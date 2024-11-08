set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_seeds_in_territory(territory_id uuid)
 RETURNS SETOF seeds
 LANGUAGE sql
AS $function$SELECT DISTINCT
  s.*
FROM
  seeds AS s
JOIN
  territories AS t ON st_contains(t.zone, s.location)
WHERE
  t.territory_id = territory_id$function$
;

CREATE OR REPLACE FUNCTION public.get_territories_within_seed(seed_id uuid)
 RETURNS SETOF territories
 LANGUAGE sql
AS $function$SELECT DISTINCT
  t.*
FROM
  territories AS t
JOIN
  seeds AS s ON st_contains(t.zone, s.location)
WHERE
  s.seed_id = seed_id$function$
;
