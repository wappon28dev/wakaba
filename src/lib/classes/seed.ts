import { ResultAsync } from "neverthrow";
import { Category } from "./category";
import { type Project } from "./project";
import { Sower } from "./sower";
import { Territory } from "./territory";
import { supabase } from "@/lib/services/supabase";
import { Table } from "@/lib/utils/table";
import {
  type Table2schema,
  type TableConfig,
  type TableSchemaOf,
  type TableResult,
  type Location,
} from "@/types/table";
import { type Override } from "@/types/utils";

const config = {
  className: "Seed",
  tableName: "seeds",
  primaryKeyName: "seed_id",
  displayName: "シード",
} as const satisfies TableConfig;

type Schema = Override<Table2schema<typeof config>, { location: Location }>;
type SchemaResolvedData = Schema & {
  sower: TableSchemaOf<Sower>;
  category: TableSchemaOf<Category>;
};
type SchemaResolved = Override<
  SchemaResolvedData,
  {
    sower: Sower;
    category: Category;
  }
>;

export class Seed extends Table<typeof config, Schema, SchemaResolved> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = Table.getFactories(Seed, config);

  public override resolveRelations(): TableResult<SchemaResolved> {
    return ResultAsync.fromSafePromise(
      supabase
        .from("seeds")
        .select("*, category:categories(*), sower:sowers(*)")
        .eq(config.primaryKeyName, this.data.seed_id)
        .returns<SchemaResolvedData>()
        .single(),
    )
      .andThen(this.transform<SchemaResolvedData>)
      .map((data) => ({
        ...data,
        sower: new Sower(data.sower),
        category: new Category(data.category),
      }))
      .mapErr(this.transformError("resolveRelations"));
  }

  // シード s が属するテリトリー t_n (1-N)
  public fetchTerritoriesWithin(): TableResult<Territory[]> {
    return ResultAsync.fromSafePromise(
      supabase.rpc("get_territories_within_seed", {
        seed_id: this.data.seed_id,
      }),
    )
      .andThen(this.transform)
      .map((territories) =>
        territories.map((t) => new Territory(t as TableSchemaOf<Territory>)),
      )
      .mapErr(this.transformError("fetchTerritoryWithin"));
  }

  // シード s が属するテリトリー t_n に属するプロジェクト p(t_n) (1-N)
  public fetchTerritoriesProjects(): TableResult<{
    territories: Territory[];
    projects: Project[];
  }> {
    return this.fetchTerritoriesWithin().andThen((territories) =>
      ResultAsync.combine(
        territories.map((t) =>
          t.resolveReferenced().map(({ projects }) => projects),
        ),
      ).map((psNested) => ({
        territories,
        projects: psNested.flatMap((ps) => ps),
      })),
    );
  }
}
