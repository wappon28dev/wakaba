import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useEffect, useState } from "react";
import { Button } from "@/components/cva/Button";
import { yahooRevGeoAPI } from "@/lib/services/address";

export const Route = createFileRoute("/_auth/seeds/new/")({
  component: () => {
    const [location, setLocation] = useState<{
      lat: number;
      lon: number;
    } | null>(null);

    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        });
      }
    });

    return (
      <p.div>
        {location != null ? (
          <div>
            <p.p>現在の位置情報:</p.p>
            <p.p>緯度: {location.lat}</p.p>
            <p.p>経度: {location.lon}</p.p>
          </div>
        ) : (
          <p.p>位置情報を取得中...</p.p>
        )}
        <Button
          onClick={() => {
            (Promise.resolve(yahooRevGeoAPI(1, 1)) as Promise<unknown>)
              .then(() => {})
              .catch(() => {});
          }}
        >
          a
        </Button>
      </p.div>
    );
  },
});
