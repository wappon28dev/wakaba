import { Field } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { svaField } from "@/components/sva/field";

type IFormInput = {
  location: unknown;
  category: string;
  description: string;
};

const field = svaField();

export const Route = createFileRoute("/_auth/seeds/new/")({
  component: () => {
    const { register } = useForm<IFormInput>();
    const [location, setLocation] = useState<{
      lat: number;
      lon: number;
    } | null>(null);

    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
            console.log(
              "位置情報を取得しました:",
              position.coords.latitude,
              position.coords.longitude,
            );
          },
          (error) => {
            console.error("位置情報の取得に失敗しました:", error);
          },
        );
      }
    }, []);

    return (
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
    );
  },
});
