alter table
    "public"."sponsor_data" drop constraint "sponsor_data_pkey";

drop index if exists "public"."sponsor_data_pkey";

create table "public"."pledges" (
    "pledges_id" uuid not null default gen_random_uuid(),
    "sower_id" uuid not null,
    "project_id" uuid not null,
    "amount_of_money" integer not null,
    "created_at" timestamp with time zone not null default now()
);

alter table
    "public"."pledges" enable row level security;

alter table
    "public"."fruits"
add
    column "amount_of_money" integer not null;

alter table
    "public"."projects" drop column "amount_of_money";

alter table
    "public"."projects" drop column "comment_ids";

alter table
    "public"."projects" drop column "sponsor_data_id";

alter table
    "public"."projects"
add
    column "category_id" uuid not null;

alter table
    "public"."projects"
add
    column "description" text not null;

alter table
    "public"."seeds" drop column "category_ids";

alter table
    "public"."seeds"
add
    column "category_id" uuid not null;

alter table
    "public"."sponsor_data" drop column "fruit_ids";

alter table
    "public"."sponsor_data" drop column "report_ids";

alter table
    "public"."sponsor_data" drop column "sponsor_data_id";

CREATE UNIQUE INDEX pledges_pkey ON public.pledges USING btree (pledges_id);

CREATE UNIQUE INDEX sponsor_data_pkey ON public.sponsor_data USING btree (project_id);

alter table
    "public"."pledges"
add
    constraint "pledges_pkey" PRIMARY KEY using index "pledges_pkey";

alter table
    "public"."sponsor_data"
add
    constraint "sponsor_data_pkey" PRIMARY KEY using index "sponsor_data_pkey";

alter table
    "public"."pledges"
add
    constraint "pledges_project_id_fkey" FOREIGN KEY (project_id) REFERENCES projects(project_id) not valid;

alter table
    "public"."pledges" validate constraint "pledges_project_id_fkey";

alter table
    "public"."pledges"
add
    constraint "pledges_sower_id_fkey" FOREIGN KEY (sower_id) REFERENCES sowers(sower_id) not valid;

alter table
    "public"."pledges" validate constraint "pledges_sower_id_fkey";

alter table
    "public"."projects"
add
    constraint "projects_category_id_fkey" FOREIGN KEY (category_id) REFERENCES categories(category_id) not valid;

alter table
    "public"."projects" validate constraint "projects_category_id_fkey";

alter table
    "public"."seeds"
add
    constraint "seeds_category_id_fkey" FOREIGN KEY (category_id) REFERENCES categories(category_id) not valid;

alter table
    "public"."seeds" validate constraint "seeds_category_id_fkey";

grant delete on table "public"."pledges" to "anon";

grant
insert
    on table "public"."pledges" to "anon";

grant references on table "public"."pledges" to "anon";

grant
select
    on table "public"."pledges" to "anon";

grant trigger on table "public"."pledges" to "anon";

grant truncate on table "public"."pledges" to "anon";

grant
update
    on table "public"."pledges" to "anon";

grant delete on table "public"."pledges" to "authenticated";

grant
insert
    on table "public"."pledges" to "authenticated";

grant references on table "public"."pledges" to "authenticated";

grant
select
    on table "public"."pledges" to "authenticated";

grant trigger on table "public"."pledges" to "authenticated";

grant truncate on table "public"."pledges" to "authenticated";

grant
update
    on table "public"."pledges" to "authenticated";

grant delete on table "public"."pledges" to "service_role";

grant
insert
    on table "public"."pledges" to "service_role";

grant references on table "public"."pledges" to "service_role";

grant
select
    on table "public"."pledges" to "service_role";

grant trigger on table "public"."pledges" to "service_role";

grant truncate on table "public"."pledges" to "service_role";

grant
update
    on table "public"."pledges" to "service_role";
