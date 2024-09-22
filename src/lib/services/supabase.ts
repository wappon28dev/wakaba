import { createClient } from "@supabase/supabase-js";
import { ENV } from "./env";
import { type Database } from "@/types/supabase.gen";

export const supabase = createClient<Database>(
  ENV.VITE_SUPABASE_URL,
  ENV.VITE_SUPABASE_API_KEY,
);
