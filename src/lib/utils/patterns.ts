import { type SWRHook } from "swr";
import { P } from "ts-pattern";

// pattern for swr
export const S = {
  Error: { error: P.nonNullable },
  Loading: { isLoading: true },
  Validating: { isValidating: true },
  Success: { data: P.nonNullable },
} satisfies Record<string, P.Pattern<SWRHook>>;
