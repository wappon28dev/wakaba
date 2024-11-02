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
type SchemaRelationData = Schema & {
  project: TableSchemaOf<Project>;
};
type SchemaRelation = Schema & {
  project: Project;
};

export class Comment extends Table<typeof config, Schema, SchemaRelation> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = Table.getFactories(Comment, config);

  public override resolveRelation(): TableResult<SchemaRelation> {
    return ResultAsync.fromSafePromise(
      supabase
        .from("comments")
        .select("*, project:projects(*)")
        .eq(config.primaryKeyName, this.data.comment_id)
        .returns<SchemaRelationData>()
        .single(),
    )
      .andThen(this.transform<SchemaRelationData>)
      .map((data) => ({
        ...data,
        project: new Project(data.project),
      }))
      .mapErr(this.transformError("resolveRelations"));
  }
}
