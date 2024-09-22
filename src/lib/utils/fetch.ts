import { err, ok, ResultAsync, type Result } from "neverthrow";

export type RequestResult<S extends object> = ResultAsync<
  S,
  | {
      type: "NETWORK_ERROR";
      error: Error;
    }
  | {
      type: "INVALID_RESPONSE";
      response: Response;
    }
>;
export type RequestResultWithError<S extends object, E extends object> = Result<
  S,
  | {
      type: "NETWORK_ERROR";
      error: Error;
    }
  | {
      type: "INVALID_RESPONSE";
      error: E;
    }
>;

export function fetchResult<S extends object>(
  ...args: Parameters<typeof fetch>
): RequestResult<S> {
  return ResultAsync.fromPromise(
    fetch(...args),
    (e) =>
      ({
        type: "NETWORK_ERROR",
        error: new Error(e as string),
      }) as const,
  )
    .andThen((res) => {
      if (!res.ok) {
        return err({
          type: "INVALID_RESPONSE",
          response: res,
        } as const);
      }
      return ok(res);
    })
    .andThen((res) =>
      ResultAsync.fromPromise(res.json() as Promise<S>, (e) => {
        throw e;
      }),
    );
}

export async function fetchResultWithError<S extends object, E extends object>(
  ...args: Parameters<typeof fetch>
): Promise<RequestResultWithError<S, E>> {
  return await fetch(...args)
    .then(async (res) => {
      if (!res.ok) {
        return err({
          type: "INVALID_RESPONSE",
          error: (await res.json()) as E,
        } as const);
      }

      return ok((await res.json()) as S);
    })
    .catch((error) =>
      err({
        type: "NETWORK_ERROR",
        error,
      } as const),
    );
}
