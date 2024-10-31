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
  type Location,
} from "@/types/table";
import { type Override } from "@/types/utils";

const config = {
  className: "SponsorData",
  tableName: "sponsor_data",
  primaryKeyName: "project_id",
  displayName: "支援情報",
} as const satisfies TableConfig;

type Schema = Override<Table2schema<typeof config>, { location: Location }>;
type SchemaResolvedData = Schema & {
  project: TableSchemaOf<Project>;
  sponsor: TableSchemaOf<Sponsor>;
};
type SchemaResolved = Schema & {
  project: Project;
  sponsor: Sponsor;
};

export class SponsorData extends Table<typeof config, Schema, SchemaResolved> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = this.getFactories(SponsorData, config);

  public override resolveRelations(): TableResult<SchemaResolved> {
    return ResultAsync.fromSafePromise(
      supabase
        .from(config.tableName)
        .select("*, project:projects(*), sponsor:sponsors(*)")
        .eq(config.primaryKeyName, this.data.project_id)
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
