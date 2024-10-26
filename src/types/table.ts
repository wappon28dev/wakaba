import { type PostgrestError } from "@supabase/supabase-js";
import { type Tables, type Database } from "./supabase.gen";
import { type Override, type Brand, type Nullable } from "./utils";
import { type queryErrorCode, type Table } from "@/lib/utils/table";

export type UserId = Brand<string, "UserId">;

export type TableConfig = {
  className: string;
  primaryKeyName: string;
  tableName: TableKeys;
  displayName: string;
};

export type TableError = {
  config: TableConfig;
  caller: string;
  type: keyof typeof queryErrorCode | "UNKNOWN";
  message: string;
  error: PostgrestError;
  hint?: Nullable<string>;
};

export type TableKeys = keyof Database["public"]["Tables"];
export type TableSchemaOf<T> = T extends Table<infer S> ? S : never;
export type TableSchemaResolvedOf<T> =
  T extends Table<any, infer S> ? S : never;

export type Table2schema<C extends TableConfig> = Override<
  Tables<C["tableName"]>,
  // @ts-expect-error: 型エラーの原因わからんけどまあいいや
  {
    [K in C["primaryKeyName"]]: Brand<string, C["primaryKeyName"]>;
  }
>;
