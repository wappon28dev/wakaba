import { type PostgrestError } from "@supabase/supabase-js";
import { type ResultAsync } from "neverthrow";
import { type Tables, type Database } from "./supabase.gen";
import {
  type Override,
  type Brand,
  type Nullable,
  type OptionalKeys,
  type OmitStrict,
} from "./utils";
import { type queryErrorCode, type Table } from "@/lib/utils/table";

export type UserId = Brand<string, "user_id">;

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
export type TableResult<S> = ResultAsync<S, TableError>;

export type TableKeys = keyof Database["public"]["Tables"];
export type TableConfigOf<T> = T extends Table<infer C, any> ? C : never;
export type TableSchemaOf<T> = T extends Table<any, infer S> ? S : never;
export type TableSchemaResolvedOf<T> =
  T extends Table<any, any, infer S> ? S : never;
export type TableBrandedId<T> = Brand<
  string,
  TableConfigOf<T>["primaryKeyName"]
>;

type OptionalKeysOnUpdate<T extends Table<any, any>> = OptionalKeys<
  Database["public"]["Tables"][TableConfigOf<T>["tableName"]]["Insert"]
>;
export type TableInsertOf<T extends Table<any, any>> = OmitStrict<
  Override<
    TableSchemaOf<T>,
    // @ts-expect-error: 型エラーの原因わからんけどまあいいや
    {
      [K in OptionalKeysOnUpdate<T>]?: TableSchemaOf<T>[K];
    }
  >,
  TableConfigOf<T>["primaryKeyName"]
>;

export type TableUpdateOf<T extends Table<any, any>> = Partial<
  TableSchemaOf<T>
>;

export type Table2schema<C extends TableConfig> = Override<
  Tables<C["tableName"]>,
  // @ts-expect-error: 型エラーの原因わからんけどまあいいや
  {
    [K in C["primaryKeyName"]]: Brand<string, C["primaryKeyName"]>;
  }
>;
