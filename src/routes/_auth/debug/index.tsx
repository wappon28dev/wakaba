/* eslint-disable no-console */
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Territory } from "@/lib/classes/territory";
import { notifyTableErrorInToast } from "@/lib/utils/table";
import { type TableBrandedId, type TableResult } from "@/types/table";

export const Route = createFileRoute("/_auth/debug/")({
  component: () => {
    function init(): TableResult<void> {
      const japanId =
        "dcc2053e-306d-4b2d-9704-47686925e626" as TableBrandedId<Territory>;

      const japanTerritory = Territory.factories
        .from(japanId)
        .andTee(console.log);
      const seeds = japanTerritory.andThen(
        /*
          Territory.zone のポリゴン内に含まれる (`st_contains`) 座標を含む Seed から Seed クラスの配列が取得できる
          -> [Seed, Seed, Seed, Seed, Seed, Seed, Seed, Seed, Seed, Seed, Seed, Seed, Seed, Seed, Seed]
        */
        (t) => t.fetchSeedsInZone(),
      );
      return seeds.map(() => undefined);
    }

    useEffect(() => {
      void init().mapErr(notifyTableErrorInToast("getCategoryFnStyle"));
    }, []);

    return null;
  },
});
