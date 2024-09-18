import { createClient } from "@supabase/supabase-js";
import { ENV } from "./env";

export const supabase = createClient(
  ENV.VITE_SUPABASE_URL,
  ENV.VITE_SUPABASE_API_KEY,
);
