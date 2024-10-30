import { ResultAsync } from "neverthrow";
import { Seed } from "./seed";
import { supabase } from "@/lib/services/supabase";
import { Table } from "@/lib/utils/table";
import {
  type TableResult,
  type TableSchemaOf,
  type Table2schema,
  type TableConfig,
} from "@/types/table";
import { type Override } from "@/types/utils";

const config = {
  className: "Territory",
  tableName: "territories",
  primaryKeyName: "territory_id",
  displayName: "区域",
} as const satisfies TableConfig;

type Schema = Override<
  Table2schema<typeof config>,
  {
    zone: {
      type: "Polygon";
      crs: {
        type: "name";
        properties: {
          name: string;
        };
      };
      coordinates: [[Array<[number, number]>]];
    };
  }
>;

export class Territory extends Table<typeof config, Schema> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = this.getFactories(Territory, config);

  public fetchSeedsInZone(): TableResult<Seed[]> {
    return ResultAsync.fromSafePromise(
      supabase.rpc("get_seeds_in_territory", {
        territory_id: this.data.territory_id,
      }),
    )
      .andThen(this.transform)
      .map((seeds) => seeds.map((s) => new Seed(s as TableSchemaOf<Seed>)))
      .mapErr(this.transformError("fetchSeedsInZone"));
  }
}
