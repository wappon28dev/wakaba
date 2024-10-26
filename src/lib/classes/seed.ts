import { ResultAsync } from "neverthrow";
import { type Category } from "./category";
import { type Sower } from "./sower";
import { supabase } from "@/lib/services/supabase";
import { Table } from "@/lib/utils/table";
import {
  type Table2schema,
  type TableConfig,
  type TableSchemaOf,
  type TableResult,
} from "@/types/table";
import { type Override } from "@/types/utils";

const config = {
  className: "Seed",
  tableName: "seeds",
  primaryKeyName: "seed_id",
  displayName: "シード",
} as const satisfies TableConfig;

type Schema = Override<
  Table2schema<typeof config>,
  {
    location: {
      type: "Point";
      crs: {
        type: "name";
        properties: {
          name: string;
        };
      };
      coordinates: [number, number];
    };
  }
>;
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
        .returns<SchemaResolved>()
        .single(),
    )
      .andThen(this.transform)
      .mapErr(this.transformError("resolveRelations"));
  }
}
