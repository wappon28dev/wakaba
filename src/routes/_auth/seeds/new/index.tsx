import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/cva/Button";
import { yahooRevGeoAPI } from "@/lib/services/address";

type IFormInput = {
  location: unknown;
  category: string;
  description: string;
};

export const Route = createFileRoute("/_auth/seeds/new/")({
  component: () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const [location, setLocation] = useState<{
      lat: number;
      lon: number;
    } | null>(null);

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
      console.log("フォームデータ:", data);
    };

    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
          },
          (error) => {
            console.error("位置情報の取得に失敗しました:", error);
          },
        );
      }
    }, []);

    const handleButtonClick = async (): Promise<void> => {
      if (location?.lat !== undefined && location?.lon !== undefined) {
        try {
          await yahooRevGeoAPI(location?.lat, location?.lon);
          console.log("成功しました！");
        } catch (error) {
          console.error("エラーが発生しました:", error);
        }
      }
    };

    const handleButtonClickWrapper = (): void => {
      handleButtonClick().catch((error) => {
        console.error("エラーが発生しました:", error);
      });
    };

    const handleSubmitWrapper = (event?: React.BaseSyntheticEvent): void => {
      handleSubmit(onSubmit, (submitErrors) => {
        console.error("フォームの送信に失敗しました:", submitErrors);
      })(event).catch((error) => {
        console.error("エラーが発生しました:", error);
      });
    };

    return (
      <p.div>
        {location !== null ? (
          <div>
            <p.p>現在の位置情報:</p.p>
            <p.p>緯度: {location.lat}</p.p>
            <p.p>経度: {location.lon}</p.p>
          </div>
        ) : (
          <p.p>位置情報を取得中...</p.p>
        )}
        <Button onClick={handleButtonClickWrapper}>a</Button>
        <form onSubmit={handleSubmitWrapper}>
          <input {...register("location", { required: true, maxLength: 20 })} />
          <input {...register("category", { pattern: /^[A-Za-z]+$/i })} />
          <input
            type="number"
            {...register("description", { min: 18, max: 99 })}
          />
          <input type="submit" />
        </form>
      </p.div>
    );
  },
});
