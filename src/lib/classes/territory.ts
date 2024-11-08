import { ResultAsync } from "neverthrow";
import { Project } from "./project";
import { Seed } from "./seed";
import { supabase } from "@/lib/services/supabase";
import { Table } from "@/lib/utils/table";
import {
  type TableResult,
  type TableSchemaOf,
  type Table2schema,
  type TableConfig,
  type Zone,
} from "@/types/table";
import { type Override } from "@/types/utils";

const config = {
  className: "Territory",
  tableName: "territories",
  primaryKeyName: "territory_id",
  displayName: "区域",
} as const satisfies TableConfig;

type Schema = Override<Table2schema<typeof config>, { zone: Zone }>;
type SchemaReferenced = {
  projects: Project[];
};

export class Territory extends Table<
  typeof config,
  Schema,
  any,
  SchemaReferenced
> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = this.getFactories(Territory, config);

  public fetchSeedsInZone(): TableResult<Seed[]> {
    return ResultAsync.fromSafePromise(
      supabase.rpc("get_seeds_in_territory", {
        territory_id: this.data.territory_id,
      }),
    )
      .andThen(this.transform)
      .map((seeds) => seeds.map((s) => new Seed(s as TableSchemaOf<Seed>)))
      .mapErr(this.transformError("fetchSeedsInZone"));
  }

  public override resolveReferenced(): TableResult<SchemaReferenced> {
    return ResultAsync.fromSafePromise(
      supabase
        .from("projects")
        .select("*")
        .eq("territory_id", this.data.territory_id),
    )
      .andThen(this.transform)
      .map((data) => ({
        projects: data.map((p) => new Project(p as TableSchemaOf<Project>)),
      }))
      .mapErr(this.transformError("resolveReferenced"));
  }
}
