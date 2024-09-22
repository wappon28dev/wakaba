import { Field } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/cva/Button";
import { svaField } from "@/components/sva/field";
import { fetchAddressFromLocation } from "@/lib/services/address";

type IFormInput = {
  location: unknown;
  category: string;
  description: string;
};

type Param = {
  lat: number;
  lon: number;
};

const field = svaField();
export const Route = createFileRoute("/_auth/seeds/new/")({
  component: () => {
    const { register } = useForm<IFormInput>();
    const [location, setLocation] = useState<{
      lat: number;
      lon: number;
    } | null>(null);
    const [address, setAddress] = useState<string | null>(null);

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
        if (location != null) {
          const param: Param = {
            lat: location.lat,
            lon: location.lon,
          };

          console.log("位置情報:", param);

          const response = await fetchAddressFromLocation(param);
          setAddress(address);
          if (response.isOk()) {
            const resAddress = response.value?.Feature?.[0]?.Property?.Address;
            console.log("住所:", resAddress);
          } else {
            console.error("APIエラー:", response.error);
          }
        } else {
          console.error("位置情報が設定されていません。");
        }
      } catch (error) {
        console.error("エラーが発生しました:", error);
      }
    };

    const handleButtonClickWrapper = (): void => {
      handleButtonClick().catch((error) => {
        console.error("エラーが発生しました:", error);
      });
    };

    return (
      <p.div>
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
            <Button
              _hover={{
                background: "wkb.primary",
              }}
              background="wkb.primary"
              color="wkb.bg"
              fontSize="1rem"
              fontWeight="bold"
              onClick={handleButtonClickWrapper}
              rounded="md"
              type="button"
            >
              種を蒔く
            </Button>
            {address != null && (
              <p.div mt={4}>
                <p.p fontWeight="bold">取得した住所:</p.p>
                <p.p>{address}</p.p>
              </p.div>
            )}
          </Field.Root>
        </p.div>
      </p.div>
    );
  },
});
