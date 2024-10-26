import { Table } from "@/lib/utils/table";
import {
  type UserId,
  type TableConfig,
  type Table2schema,
} from "@/types/table";
import { type Override } from "@/types/utils";

const config = {
  className: "Sponsor",
  tableName: "sponsors",
  primaryKeyName: "sponsor_id",
  displayName: "スポンサー",
} as const satisfies TableConfig;

type Schema = Override<
  Table2schema<typeof config>,
  {
    user_id: UserId;
  }
>;
export class Sponsor extends Table<Schema> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = this.getFactories(Sponsor, config);
}
