SET
  statement_timeout = 0;

SET
  lock_timeout = 0;

SET
  idle_in_transaction_session_timeout = 0;

SET
  client_encoding = 'UTF8';

SET
  standard_conforming_strings = on;

SELECT
  pg_catalog.set_config('search_path', '', false);

SET
  check_function_bodies = false;

SET
  xmloption = content;

SET
  client_min_messages = warning;

SET
  row_security = off;

CREATE EXTENSION IF NOT EXISTS "pg_net" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

COMMENT ON SCHEMA "public" IS 'standard public schema';

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "postgis" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

SET
  default_tablespace = '';

SET
  default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."categories" (
  "category_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
  "name" "text" NOT NULL,
  "description" "text",
  "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE
  "public"."categories" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."comments" (
  "comment_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
  "project_id" "uuid" NOT NULL,
  "user_id" "uuid" NOT NULL,
  "body" "text" NOT NULL,
  "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE
  "public"."comments" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."fruits" (
  "fruit_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
  "project_id" "uuid" NOT NULL,
  "sponsor_id" "uuid" NOT NULL,
  "name" "text" NOT NULL,
  "key_visual" "text",
  "description" "text" NOT NULL,
  "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE
  "public"."fruits" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."projects" (
  "project_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
  "name" "text" NOT NULL,
  "key_visual" "text",
  "deadline" timestamp with time zone NOT NULL,
  "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
  "territory_id" "uuid" NOT NULL,
  "amount_of_money" integer NOT NULL,
  "sponsor_data_id" "uuid",
  "comment_ids" "uuid" [] NOT NULL
);

ALTER TABLE
  "public"."projects" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."reports" (
  "report_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
  "project_id" "uuid" NOT NULL,
  "sponsor_id" "uuid" NOT NULL,
  "title" "text" NOT NULL,
  "key_visual" "text",
  "body" "text" NOT NULL,
  "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE
  "public"."reports" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."seeds" (
  "seed_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
  "location" "extensions"."geometry"(Point) NOT NULL,
  "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
  "category_ids" "uuid" [] NOT NULL,
  "description" "text",
  "sower_id" "uuid" NOT NULL
);

ALTER TABLE
  "public"."seeds" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."sowers" (
  "user_id" "uuid" NOT NULL,
  "name" "text" NOT NULL,
  "birthday" "date" NOT NULL,
  "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
  "sower_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL
);

ALTER TABLE
  "public"."sowers" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."sponsor_data" (
  "sponsor_data_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
  "project_id" "uuid" NOT NULL,
  "sponsor_id" "uuid" NOT NULL,
  "fruit_ids" "uuid" [] NOT NULL,
  "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
  "motivation" "text" NOT NULL,
  "location" "extensions"."geometry"(Point) NOT NULL,
  "target_amount_of_money" integer NOT NULL,
  "report_ids" "uuid" [] NOT NULL
);

ALTER TABLE
  "public"."sponsor_data" OWNER TO "postgres";

COMMENT ON TABLE "public"."sponsor_data" IS 'sponsor_data';

CREATE TABLE IF NOT EXISTS "public"."sponsors" (
  "sponsor_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
  "name" "text" NOT NULL,
  "icon" "text" NOT NULL,
  "description" "text",
  "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
  "user_id" "uuid" NOT NULL
);

ALTER TABLE
  "public"."sponsors" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."territories" (
  "territory_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
  "zone" "extensions"."geometry"(Polygon) NOT NULL,
  "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE
  "public"."territories" OWNER TO "postgres";

ALTER TABLE
  ONLY "public"."categories"
ADD
  CONSTRAINT "categories_pkey" PRIMARY KEY ("category_id");

ALTER TABLE
  ONLY "public"."comments"
ADD
  CONSTRAINT "comments_pkey" PRIMARY KEY ("comment_id");

ALTER TABLE
  ONLY "public"."fruits"
ADD
  CONSTRAINT "fruits_pkey" PRIMARY KEY ("fruit_id");

ALTER TABLE
  ONLY "public"."projects"
ADD
  CONSTRAINT "projects_pkey" PRIMARY KEY ("project_id");

ALTER TABLE
  ONLY "public"."reports"
ADD
  CONSTRAINT "reports_pkey" PRIMARY KEY ("report_id");

ALTER TABLE
  ONLY "public"."seeds"
ADD
  CONSTRAINT "seeds_pkey" PRIMARY KEY ("seed_id");

ALTER TABLE
  ONLY "public"."sowers"
ADD
  CONSTRAINT "sowers_pkey" PRIMARY KEY ("sower_id");

ALTER TABLE
  ONLY "public"."sowers"
ADD
  CONSTRAINT "sowers_user_id_key" UNIQUE ("user_id");

ALTER TABLE
  ONLY "public"."sponsor_data"
ADD
  CONSTRAINT "sponsor_data_pkey" PRIMARY KEY ("sponsor_data_id");

ALTER TABLE
  ONLY "public"."sponsors"
ADD
  CONSTRAINT "sponsors_pkey" PRIMARY KEY ("sponsor_id");

ALTER TABLE
  ONLY "public"."sponsors"
ADD
  CONSTRAINT "sponsors_user_id_key" UNIQUE ("user_id");

ALTER TABLE
  ONLY "public"."territories"
ADD
  CONSTRAINT "territories_pkey" PRIMARY KEY ("territory_id");

ALTER TABLE
  ONLY "public"."comments"
ADD
  CONSTRAINT "comments_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("project_id");

ALTER TABLE
  ONLY "public"."comments"
ADD
  CONSTRAINT "comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id");

ALTER TABLE
  ONLY "public"."fruits"
ADD
  CONSTRAINT "fruits_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("project_id");

ALTER TABLE
  ONLY "public"."fruits"
ADD
  CONSTRAINT "fruits_sponsor_id_fkey" FOREIGN KEY ("sponsor_id") REFERENCES "public"."sponsors"("sponsor_id");

ALTER TABLE
  ONLY "public"."projects"
ADD
  CONSTRAINT "projects_territory_id_fkey" FOREIGN KEY ("territory_id") REFERENCES "public"."territories"("territory_id");

ALTER TABLE
  ONLY "public"."reports"
ADD
  CONSTRAINT "reports_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("project_id");

ALTER TABLE
  ONLY "public"."reports"
ADD
  CONSTRAINT "reports_sponsor_id_fkey" FOREIGN KEY ("sponsor_id") REFERENCES "public"."sponsors"("sponsor_id");

ALTER TABLE
  ONLY "public"."seeds"
ADD
  CONSTRAINT "seeds_sower_id_fkey" FOREIGN KEY ("sower_id") REFERENCES "public"."sowers"("sower_id");

ALTER TABLE
  ONLY "public"."sponsor_data"
ADD
  CONSTRAINT "sponsor_data_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("project_id");

ALTER TABLE
  ONLY "public"."sponsor_data"
ADD
  CONSTRAINT "sponsor_data_sponsor_id_fkey" FOREIGN KEY ("sponsor_id") REFERENCES "public"."sponsors"("sponsor_id");

ALTER TABLE
  ONLY "public"."sponsors"
ADD
  CONSTRAINT "sponsors_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id");

ALTER TABLE
  ONLY "public"."sowers"
ADD
  CONSTRAINT "users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id");

ALTER TABLE
  "public"."categories" ENABLE ROW LEVEL SECURITY;

ALTER TABLE
  "public"."comments" ENABLE ROW LEVEL SECURITY;

ALTER TABLE
  "public"."fruits" ENABLE ROW LEVEL SECURITY;

ALTER TABLE
  "public"."projects" ENABLE ROW LEVEL SECURITY;

ALTER TABLE
  "public"."reports" ENABLE ROW LEVEL SECURITY;

ALTER TABLE
  "public"."seeds" ENABLE ROW LEVEL SECURITY;

ALTER TABLE
  "public"."sowers" ENABLE ROW LEVEL SECURITY;

ALTER TABLE
  "public"."sponsor_data" ENABLE ROW LEVEL SECURITY;

ALTER TABLE
  "public"."sponsors" ENABLE ROW LEVEL SECURITY;

ALTER TABLE
  "public"."territories" ENABLE ROW LEVEL SECURITY;

ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";

GRANT USAGE ON SCHEMA "public" TO "postgres";

GRANT USAGE ON SCHEMA "public" TO "anon";

GRANT USAGE ON SCHEMA "public" TO "authenticated";

GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON TABLE "public"."categories" TO "anon";

GRANT ALL ON TABLE "public"."categories" TO "authenticated";

GRANT ALL ON TABLE "public"."categories" TO "service_role";

GRANT ALL ON TABLE "public"."comments" TO "anon";

GRANT ALL ON TABLE "public"."comments" TO "authenticated";

GRANT ALL ON TABLE "public"."comments" TO "service_role";

GRANT ALL ON TABLE "public"."fruits" TO "anon";

GRANT ALL ON TABLE "public"."fruits" TO "authenticated";

GRANT ALL ON TABLE "public"."fruits" TO "service_role";

GRANT ALL ON TABLE "public"."projects" TO "anon";

GRANT ALL ON TABLE "public"."projects" TO "authenticated";

GRANT ALL ON TABLE "public"."projects" TO "service_role";

GRANT ALL ON TABLE "public"."reports" TO "anon";

GRANT ALL ON TABLE "public"."reports" TO "authenticated";

GRANT ALL ON TABLE "public"."reports" TO "service_role";

GRANT ALL ON TABLE "public"."seeds" TO "anon";

GRANT ALL ON TABLE "public"."seeds" TO "authenticated";

GRANT ALL ON TABLE "public"."seeds" TO "service_role";

GRANT ALL ON TABLE "public"."sowers" TO "anon";

GRANT ALL ON TABLE "public"."sowers" TO "authenticated";

GRANT ALL ON TABLE "public"."sowers" TO "service_role";

GRANT ALL ON TABLE "public"."sponsor_data" TO "anon";

GRANT ALL ON TABLE "public"."sponsor_data" TO "authenticated";

GRANT ALL ON TABLE "public"."sponsor_data" TO "service_role";

GRANT ALL ON TABLE "public"."sponsors" TO "anon";

GRANT ALL ON TABLE "public"."sponsors" TO "authenticated";

GRANT ALL ON TABLE "public"."sponsors" TO "service_role";

GRANT ALL ON TABLE "public"."territories" TO "anon";

GRANT ALL ON TABLE "public"."territories" TO "authenticated";

GRANT ALL ON TABLE "public"."territories" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "postgres";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "anon";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "authenticated";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "postgres";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "anon";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "authenticated";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "postgres";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "anon";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "authenticated";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "service_role";

RESET ALL;

--
-- Dumped schema changes for auth and storage
--
