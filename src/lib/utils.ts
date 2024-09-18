import { type Entries } from "@/types/utils";

export async function waitMs(ms: number): Promise<void> {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function getKeys<T extends Record<string, unknown>>(
  obj: T,
): Array<keyof T> {
  return Object.keys(obj);
}
export function getValues<T extends Record<string, any>>(
  obj: T,
): Array<T[keyof T]> {
  return Object.values(obj);
}
export function getEntries<T extends Record<string, unknown>>(
  obj: T,
): Entries<T> {
  return Object.entries(obj) as Entries<T>;
}
export function fromEntries<T extends Record<string, unknown>>(
  entries: Entries<T>,
): T {
  return Object.fromEntries(entries) as T;
}

export function getCapitalizedStr(s: string): string {
  const s0 = s.at(0);
  if (s0 == null) {
    throw new Error("Expected a string with a length of at least 1 character");
  }

  return s0.toUpperCase() + s.slice(1);
}
