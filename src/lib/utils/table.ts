/* eslint-disable @typescript-eslint/consistent-type-assertions */

import {
  type PostgrestSingleResponse,
  type PostgrestError,
} from "@supabase/supabase-js";
import { err, ok, ResultAsync, type Result } from "neverthrow";
import { match } from "ts-pattern";
import { notifyErrorInToast } from "./toast";
import { supabase } from "@/lib/services/supabase";
import {
  type TableSchemaOf,
  type TableConfig,
  type TableError,
  type TableConfigOf,
  type TableBrandedId,
  type TableResult,
} from "@/types/table";

// https://postgrest.org/en/stable/references/errors.html#group-1-api-request
export const queryErrorCode = {
  NO_ROWS_FOUND: "PGRST116",
  ALREADY_EXISTS: "23505",
  INVALID_INPUT: "22P02",
};

export abstract class Table<
  Config extends TableConfig,
  Schema extends object,
  SchemaResolved extends object = Schema,
  SchemaReferenced extends object = Schema,
> {
  constructor(
    public data: Schema,
    protected config: Config,
  ) {}

  public resolveRelations?(): TableResult<SchemaResolved>;
  public resolveReferenced?(): TableResult<SchemaReferenced>;

  static transformError(
    this: void,
    config: TableConfig,
    caller: string,
    error: PostgrestError,
    message?: string,
    hint?: string,
  ): TableError {
    return {
      ...match(error.code)
        .with(queryErrorCode.NO_ROWS_FOUND, () => ({
          type: "NO_ROWS_FOUND" as const,
          message: message ?? `この${config.displayName}は存在しません`,
        }))
        .with(queryErrorCode.ALREADY_EXISTS, () => ({
          type: "ALREADY_EXISTS" as const,
          message: message ?? `この${config.displayName}は既に存在します`,
        }))
        .with(queryErrorCode.INVALID_INPUT, () => ({
          type: "INVALID_INPUT" as const,
          message: message ?? `不正な${config.displayName}IDです`,
        }))
        .otherwise(() => ({
          type: "UNKNOWN",
          message: message ?? `${config.displayName}の取得に失敗しました`,
        })),
      config,
      caller,
      error,
      hint,
    };
  }

  protected transformError(caller: string) {
    return (
      ...rest: Parameters<typeof Table.transformError> extends [
        any,
        any,
        ...infer R,
      ]
        ? R
        : never
    ) => Table.transformError(this.config, caller, ...rest);
  }

  static transform<S>(
    this: void,
    { data, error }: PostgrestSingleResponse<S>,
  ): Result<S, PostgrestError> {
    if (data != null) {
      return ok(data);
    }

    if (error != null) {
      return err(error);
    }

    throw new Error("PostgrestSingleResponse が不正です");
  }

  protected transform = Table.transform;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static getFactories<T extends Table<any, any>>(
    this: void,
    TableClass: new (data: TableSchemaOf<T>) => T,
    config: TableConfigOf<T>,
  ) {
    return {
      fetchAll: (): TableResult<T[]> =>
        ResultAsync.fromSafePromise(supabase.from(config.tableName).select())
          .andThen(Table.transform)
          .map((data) => data.map((d) => new TableClass(d as TableSchemaOf<T>)))
          .mapErr((error) =>
            Table.transformError(config, "factories.fetchAll", error),
          ),

      from: (id: TableBrandedId<T>): TableResult<T> =>
        ResultAsync.fromSafePromise(
          supabase
            .from(config.tableName)
            .select()
            .eq(config.primaryKeyName, id)
            .single(),
        )
          .andThen(Table.transform)
          .map((data) => new TableClass(data as TableSchemaOf<T>))
          .mapErr((error) =>
            Table.transformError(config, "factories.from", error),
          ),
    };
  }

  protected getFactories = Table.getFactories;
}

export function notifyTableErrorInToast(parentCaller: string) {
  return (tableError: TableError) => {
    const { error, message, type, hint, caller, config } = tableError;
    notifyErrorInToast(
      `${parentCaller} → ${config.className}.${caller}`,
      new Error(`${error.message} (${type})`, { cause: error }),
      message,
      hint,
    );
    return tableError;
  };
}
