import { ResultAsync } from "neverthrow";
import { Project } from "@/lib/classes/project";
import { Sower } from "@/lib/classes/sower";
import { supabase } from "@/lib/services/supabase";
import { Table } from "@/lib/utils/table";
import {
  type Table2schema,
  type TableConfig,
  type TableSchemaOf,
  type TableResult,
} from "@/types/table";

const config = {
  className: "Pledge",
  tableName: "pledges",
  primaryKeyName: "pledges_id", // FIXME: `pledges_id` → `pledge_id`
  displayName: "支援情報",
} as const satisfies TableConfig;

type Schema = Table2schema<typeof config>;
type SchemaResolvedData = Schema & {
  project: TableSchemaOf<Project>;
  sower: TableSchemaOf<Sower>;
};
type SchemaResolved = Schema & {
  project: Project;
  sower: Sower;
};

export class Pledge extends Table<typeof config, Schema, SchemaResolved> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = this.getFactories(Pledge, config);

  public override resolveRelations(): TableResult<SchemaResolved> {
    return ResultAsync.fromSafePromise(
      supabase
        .from(config.tableName)
        .select("*, project:projects(*), sower:sowers(*)")
        .eq(config.primaryKeyName, this.data.pledges_id)
        .returns<SchemaResolvedData>()
        .single(),
    )
      .andThen(this.transform<SchemaResolvedData>)
      .map((data) => ({
        ...data,
        project: new Project(data.project),
        sower: new Sower(data.sower),
      }))
      .mapErr(this.transformError("resolveRelations"));
  }
}
