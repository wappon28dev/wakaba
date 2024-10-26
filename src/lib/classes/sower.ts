import { ResultAsync } from "neverthrow";
import { Seed } from "./seed";
import { supabase } from "@/lib/services/supabase";
import { Table } from "@/lib/utils/table";
import {
  type UserId,
  type TableSchemaOf,
  type Table2schema,
  type TableError,
} from "@/types/table";
import { type Override, type OmitStrict } from "@/types/utils";

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
  }
>;

export class Sower extends Table<Schema> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = this.getFactories(Sower, config);

  public fetchOwnSeeds(): ResultAsync<Seed[], TableError> {
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

  public sowSeed(
    sowData: OmitStrict<Seed["data"], "sower_id">,
  ): ResultAsync<Seed, TableError> {
    return ResultAsync.fromSafePromise(
      supabase
        .from("seeds")
        .insert({
          sower_id: this.data.sower_id,
          ...sowData,
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
