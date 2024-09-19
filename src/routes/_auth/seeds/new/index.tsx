import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/_auth/seeds/new/")({
  component: () => {
    const [location, setLocation] = useState<{
      lat: number;
      lon: number;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        () => {
          setError("位置情報を取得できませんでした。");
        },
      );
    }, []);

    return (
      <p.p>
        {location != null ? (
          <div>
            <p.p>現在の位置情報:</p.p>
            <p.p>緯度: {location.lat}</p.p>
            <p.p>経度: {location.lon}</p.p>
          </div>
        ) : (
          <p.p>{error ?? "位置情報を取得中..."}</p.p>
        )}
      </p.p>
    );
  },
});
