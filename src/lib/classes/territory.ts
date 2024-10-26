import { Table } from "@/lib/utils/table";
import { type Table2schema, type TableConfig } from "@/types/table";
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

export class Territory extends Table<Schema> {
  constructor(data: Schema) {
    super(data, config);
  }

  static factories = this.getFactories(Territory, config);
}
