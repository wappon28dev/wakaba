import { type Database } from "./supabase.gen";

export type DB = Database["public"]["Tables"];
export type DBSchema<T extends keyof DB> =
  Database["public"]["Tables"][T]["Row"];
