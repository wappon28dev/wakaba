import { Table } from "@/lib/utils/table";
import { type Table2schema, type TableConfig } from "@/types/table";

const config = {
  className: "Category",
  tableName: "categories",
  primaryKeyName: "category_id",
  displayName: "カテゴリー",
} as const satisfies TableConfig;

type Schema = Table2schema<typeof config>;

export class Category extends Table<typeof config, Schema> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = Table.getFactories(Category, config);
}
