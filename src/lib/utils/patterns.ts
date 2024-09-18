import { type SWRHook } from "swr";
import { P } from "ts-pattern";

// pattern for swr
export const S = {
  Error: { error: P.not(undefined) },
  Loading: { isLoading: true },
  Validating: { isValidating: true },
  Success: { data: P.not(undefined) },
} satisfies Record<string, P.Pattern<SWRHook>>;
