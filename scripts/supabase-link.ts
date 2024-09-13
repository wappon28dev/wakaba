import { join } from "path";
import { $ } from "bun";

const pRoot = join(__dirname, "..");
const { SUPABASE_PROJECT_REF, SUPABASE_DB_PASSWORD } = process.env;

await $`bun supabase link --project-ref ${SUPABASE_PROJECT_REF} --password ${SUPABASE_DB_PASSWORD}`.cwd(
  pRoot,
);
