import { ResultAsync } from "neverthrow";
import { supabase } from "@/lib/services/supabase";
import { Table } from "@/lib/utils/table";
import {
  type UserId,
  type TableConfig,
  type Table2schema,
  type TableResult,
  type TableSchemaOf,
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
export class Sponsor extends Table<typeof config, Schema> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = {
    ...this.getFactories(Sponsor, config),
    fromUser(userId: UserId): TableResult<Sponsor> {
      return ResultAsync.fromSafePromise(
        supabase
          .from("sponsors")
          .select()
          .eq("user_id", userId)
          .returns<TableSchemaOf<Sponsor>>()
          .single(),
      )
        .andThen(Table.transform)
        .map((data) => new Sponsor(data))
        .mapErr((error) =>
          Table.transformError(config, "factories.fromUser", error),
        );
    },
  };
}
