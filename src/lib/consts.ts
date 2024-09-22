export const INFO = {
  id: "wakaba",
  name: "WaKaba",
} as const;

export const LOCAL_STORAGE_VERSION = "1";
export function getLocalStorageKey(key: string): string {
  return `${INFO.id}.v${LOCAL_STORAGE_VERSION}.${key}`;
}
