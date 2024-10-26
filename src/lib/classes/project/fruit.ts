import { ResultAsync } from "neverthrow";
import { Project } from "@/lib/classes/project";
import { Sponsor } from "@/lib/classes/sponsor";
import { supabase } from "@/lib/services/supabase";
import { Table } from "@/lib/utils/table";
import {
  type Table2schema,
  type TableConfig,
  type TableSchemaOf,
  type TableError,
} from "@/types/table";

const config = {
  className: "Fruit",
  tableName: "fruits",
  primaryKeyName: "fruit_id",
  displayName: "返礼品",
} as const satisfies TableConfig;

type Schema = Table2schema<typeof config>;
type SchemaResolvedData = Schema & {
  project: TableSchemaOf<Project>;
  sponsor: TableSchemaOf<Sponsor>;
};
type SchemaResolved = Schema & {
  project: Project;
  sponsor: Sponsor;
};

export class Fruit extends Table<Schema, SchemaResolved> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = Table.getFactories(Fruit, config);

  public override resolveRelations(): ResultAsync<SchemaResolved, TableError> {
    return ResultAsync.fromSafePromise(
      supabase
        .from(config.tableName)
        .select("*, project:projects(*), sponsor:sponsors(*)")
        .eq(config.primaryKeyName, this.data.fruit_id)
        .returns<SchemaResolvedData>()
        .single(),
    )
      .andThen(this.transform<SchemaResolvedData>)
      .map((data) => ({
        ...data,
        project: new Project(data.project),
        sponsor: new Sponsor(data.sponsor),
      }))
      .mapErr(this.transformError("resolveRelations"));
  }
}
