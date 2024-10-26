import { ResultAsync } from "neverthrow";
import { Category } from "./category";
import { Territory } from "./territory";
import { supabase } from "@/lib/services/supabase";
import { Table } from "@/lib/utils/table";
import {
  type TableSchemaOf,
  type TableConfig,
  type Table2schema,
  type TableError,
} from "@/types/table";
import { type Override } from "@/types/utils";

const config = {
  className: "Project",
  tableName: "projects",
  primaryKeyName: "project_id",
  displayName: "プロジェクト",
} as const satisfies TableConfig;

type Schema = Table2schema<typeof config>;
type SchemaResolvedData = Schema & {
  category: TableSchemaOf<Category>;
  territory: TableSchemaOf<Territory>;
};
type SchemaResolved = Override<
  SchemaResolvedData,
  {
    category: Category;
    territory: Territory;
  }
>;

export class Project extends Table<Schema, SchemaResolved> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = Table.getFactories(Project, config);

  public override resolveRelations(): ResultAsync<SchemaResolved, TableError> {
    return ResultAsync.fromSafePromise(
      supabase
        .from("projects")
        .select("*, category:categories(*), territory:territories(*)")
        .eq(config.primaryKeyName, this.data.project_id)
        .returns<SchemaResolvedData>()
        .single(),
    )
      .andThen(this.transform<SchemaResolvedData>)
      .map((data) => ({
        ...data,
        category: new Category(data.category),
        territory: new Territory(data.territory),
      }))
      .mapErr(this.transformError("resolveRelations"));
  }
}
