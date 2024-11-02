/* eslint-disable no-console */
import { err, ok, ResultAsync } from "neverthrow";

export type RequestError<E extends object | Error = Error> =
  | { type: "NETWORK_ERROR"; error: Error }
  | { type: "RESPONSE_ERROR"; error: E };

export type RequestResult<
  S extends object,
  E extends object = Response,
> = ResultAsync<S, RequestError<E>>;

function parseJson<S extends object>(res: Response): ResultAsync<S, never> {
  return ResultAsync.fromPromise(res.json() as Promise<S>, (e) => {
    throw new Error("Failed to parse JSON: ", { cause: e });
  });
}

function handleNetworkError(
  error: unknown,
): Extract<RequestError, { type: "NETWORK_ERROR" }> {
  console.error(error);
  return {
    type: "NETWORK_ERROR",
    error: new Error(error as string),
  } as const;
}

export function fetchResult<S extends object>(
  ...args: Parameters<typeof fetch>
): RequestResult<S> {
  return ResultAsync.fromPromise(fetch(...args), handleNetworkError)
    .andThen((res) => {
      if (!res.ok) {
        console.error(res);
        return err({ type: "RESPONSE_ERROR", error: res } as const);
      }

      return ok(res);
    })
    .andThen((res) => parseJson<S>(res));
}

export function fetchResultWithError<S extends object, E extends object>(
  ...args: Parameters<typeof fetch>
): RequestResult<S, E> {
  return ResultAsync.fromPromise(fetch(...args), handleNetworkError).andThen(
    (res) => {
      if (!res.ok) {
        return parseJson<E>(res).andThen((error) =>
          err({ type: "RESPONSE_ERROR", error } as const),
        );
      }

      return parseJson<S>(res);
    },
  );
}
