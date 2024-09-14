import { join } from "path";
import { $ } from "bun";

const pRoot = join(__dirname, "..");
const { SUPABASE_PROJECT_REF } = process.env;

await $`bun supabase link --project-ref ${SUPABASE_PROJECT_REF}`.cwd(pRoot);
