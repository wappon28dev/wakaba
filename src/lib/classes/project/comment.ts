import { ResultAsync } from "neverthrow";
import { Project } from "@/lib/classes/project";
import { supabase } from "@/lib/services/supabase";
import { Table } from "@/lib/utils/table";
import {
  type TableSchemaOf,
  type TableConfig,
  type Table2schema,
  type TableResult,
} from "@/types/table";

const config = {
  className: "Comment",
  tableName: "comments",
  primaryKeyName: "comment_id",
  displayName: "コメント",
} as const satisfies TableConfig;

type Schema = Table2schema<typeof config>;
type SchemaResolvedData = Schema & {
  project: TableSchemaOf<Project>;
};
type SchemaResolved = Schema & {
  project: Project;
};

export class Comment extends Table<typeof config, Schema, SchemaResolved> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = Table.getFactories(Comment, config);

  public override resolveRelations(): TableResult<SchemaResolved> {
    return ResultAsync.fromSafePromise(
      supabase
        .from("comments")
        .select("*, project:projects(*)")
        .eq(config.primaryKeyName, this.data.comment_id)
        .returns<SchemaResolvedData>()
        .single(),
    )
      .andThen(this.transform<SchemaResolvedData>)
      .map((data) => ({
        ...data,
        project: new Project(data.project),
      }))
      .mapErr(this.transformError("resolveRelations"));
  }
}
