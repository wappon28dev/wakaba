import { ResultAsync } from "neverthrow";
import { Project } from "@/lib/classes/project";
import { Sponsor } from "@/lib/classes/sponsor";
import { supabase } from "@/lib/services/supabase";
import { Table } from "@/lib/utils/table";
import {
  type Table2schema,
  type TableConfig,
  type TableSchemaOf,
  type TableResult,
} from "@/types/table";

const config = {
  className: "Report",
  tableName: "reports",
  primaryKeyName: "report_id",
  displayName: "レポート",
} as const satisfies TableConfig;

type Schema = Table2schema<typeof config>;
type SchemaRelationData = Schema & {
  project: TableSchemaOf<Project>;
  sponsor: TableSchemaOf<Sponsor>;
};
type SchemaRelation = Schema & {
  project: Project;
  sponsor: Sponsor;
};

export class Report extends Table<typeof config, Schema, SchemaRelation> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = Table.getFactories(Report, config);

  public override resolveRelation(): TableResult<SchemaRelation> {
    return ResultAsync.fromSafePromise(
      supabase
        .from(config.tableName)
        .select("*, project:projects(*), sponsor:sponsors(*)")
        .eq(config.primaryKeyName, this.data.report_id)
        .returns<SchemaRelationData>()
        .single(),
    )
      .andThen(this.transform<SchemaRelationData>)
      .map((data) => ({
        ...data,
        project: new Project(data.project),
        sponsor: new Sponsor(data.sponsor),
      }))
      .mapErr(this.transformError("resolveRelations"));
  }
}
