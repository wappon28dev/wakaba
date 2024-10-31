import { ResultAsync } from "neverthrow";
import { Seed } from "./seed";
import { supabase } from "@/lib/services/supabase";
import { Table } from "@/lib/utils/table";
import {
  type UserId,
  type TableSchemaOf,
  type Table2schema,
  type TableResult,
  type TableInsertOf,
  type TableBrandedId,
} from "@/types/table";
import { type Override } from "@/types/utils";

const config = {
  className: "Sower",
  tableName: "sowers",
  primaryKeyName: "sower_id",
  displayName: "Sower",
} as const;

type Schema = Override<
  Table2schema<typeof config>,
  {
    user_id: UserId;
    sower_id: TableBrandedId<Sower>;
  }
>;

export class Sower extends Table<typeof config, Schema> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = {
    ...this.getFactories(Sower, config),
    fromUser(userId: UserId): TableResult<Sower> {
      return ResultAsync.fromSafePromise(
        supabase
          .from("sowers")
          .select()
          .eq("user_id", userId)
          .returns<TableSchemaOf<Sower>>()
          .single(),
      )
        .andThen(Table.transform)
        .map((data) => new Sower(data))
        .mapErr((error) =>
          Table.transformError(config, "factories.fromUser", error),
        );
    },
  };

  public fetchOwnSeeds(): TableResult<Seed[]> {
    return ResultAsync.fromSafePromise(
      supabase
        .from("seeds")
        .select()
        .eq(config.primaryKeyName, "this.sowerId")
        .order("created_at", { ascending: false })
        .returns<TableSchemaOf<Seed>>()
        .select(),
    )
      .andThen(this.transform)
      .map((data) =>
        data.map((seedData) => new Seed(seedData as TableSchemaOf<Seed>)),
      )
      .mapErr(this.transformError("fetchOwnSeeds"));
  }

  public sowSeed(sowData: TableInsertOf<Seed>): TableResult<Seed> {
    return ResultAsync.fromSafePromise(
      supabase
        .from("seeds")
        .insert({
          ...sowData,
          sower_id: this.data.sower_id,
        })
        .select()
        .returns<TableSchemaOf<Seed>>()
        .single(),
    )
      .andThen(this.transform<TableSchemaOf<Seed>>)
      .map((data) => new Seed(data))
      .mapErr(this.transformError("sowSeed"));
  }
}
