import { atomWithStorage } from "jotai/utils";
import { getLocalStorageKey } from "@/lib/consts";
import { type Nullable } from "@/types/utils";

export const $redirectTo = atomWithStorage<Nullable<string>>(
  getLocalStorageKey("redirectTo"),
  undefined,
);
