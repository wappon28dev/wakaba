import { str, envsafe, url } from "envsafe";

export const ENV = envsafe(
  {
    VITE_SUPABASE_URL: url(),
    VITE_SUPABASE_API_KEY: str(),
    VITE_GEMINI_API_KEY: str(),
  },
  {
    env: import.meta.env,
  },
);
