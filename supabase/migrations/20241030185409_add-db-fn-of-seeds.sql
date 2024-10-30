set
  check_function_bodies = off;

CREATE
OR REPLACE FUNCTION public.get_seeds_in_territory(territory_id uuid) RETURNS SETOF seeds LANGUAGE sql AS $ function $
select
  s.*
from
  seeds as s
  join territories as t on st_contains(t.zone, s.location)
where
  t.territory_id = territory_id $ function $;
