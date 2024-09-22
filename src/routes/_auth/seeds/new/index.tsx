import { Field } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { svaField } from "@/components/sva/field";
import { Button } from "@/components/cva/Button";
import { yahooRevGeoAPI } from "@/lib/services/address";

type IFormInput = {
  location: unknown;
  category: string;
  description: string;
};

const field = svaField();
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
      try {
        await yahooRevGeoAPI(1, 1);
        console.log("成功しました！");
      } catch (error) {
        console.error("エラーが発生しました:", error);
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
        <p.div py={50}>
          <p.div p={30}>
            <p.h2
              color="wkb-green"
              fontSize="3rem"
              fontWeight="bold"
              textAlign="center"
            >
              Wakaba
            </p.h2>
            <p.p textAlign="center">新しい種を植える</p.p>
          </p.div>
          <Field.Root className={field.root}>
            <p.div p={2}>
              <p.p fontWeight="bold">位置情報</p.p>
              <Field.Input
                {...register("location")}
                className={field.input}
                disabled
                inputMode="text"
                placeholder={
                  location != null
                    ? `経度：${location.lat},緯度：${location.lon}`
                    : "取得中..."
                }
              />
            </p.div>
            <p.div p={2}>
              <p.p fontWeight="bold" py={2}>
                カテゴリー
              </p.p>
              <Field.Select {...register("category")} className={field.select}>
                <option value="">選択してください</option>
                <option value="">休憩</option>
                <option value="2">環境</option>
                <option value="3">飲食</option>
                <option value="4">施設</option>
                <option value="5">移動</option>
                <option value="6">その他</option>
              </Field.Select>
            </p.div>
            <p.div p={2}>
              <p.p fontWeight="bold" py={2}>
                意見
              </p.p>
              <Field.Textarea
                {...register("description")}
                className={field.textarea}
                inputMode="text"
                placeholder="意見を入力してください"
              />
            </p.div>
          </Field.Root>
        </p.div>
      </p.div>
    );
  },
});
