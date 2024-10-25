import { Field } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import wakaba from "@/assets/svg/background/wakaba.svg";
import { Button } from "@/components/cva/Button";
import { svaField } from "@/components/sva/field";
import { fetchAddressFromLocation } from "@/lib/services/address";
import { toaster } from "@/lib/utils/toast";

type IFormInput = {
  location: string;
  category_id: "休憩" | "環境" | "飲食" | "施設" | "移動" | "その他";
  description: string;
};

type Param = {
  lat: number;
  lon: number;
};

const field = svaField();
export const Route = createFileRoute("/_auth/seeds/new/")({
  component: () => {
    const { register, handleSubmit, setValue, reset } = useForm<IFormInput>();
    const [location, setLocation] = useState<{
      lat: number;
      lon: number;
    } | null>(null);
    const [address, setAddress] = useState<string>();

    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          setLocation(location);
          void (async () => {
            try {
              const param: Param = {
                lat: newLocation.lat,
                lon: newLocation.lon,
              };

              const response = await fetchAddressFromLocation(param);
              if (response.isOk()) {
                const resAddress =
                  response.value?.Feature?.[0]?.Property?.Address;
                setAddress(resAddress);
                if (resAddress !== undefined) {
                  setValue("location", resAddress);
                }
              }
            } catch (error) {}
          })();
        });
      }
    }, []);
    const onSubmit = (data: IFormInput): void => {
      let hasError = false;

      if (data.category_id.length === 0 || data.category_id.length === 0) {
        toaster.error({
          id: "category-error",
          title: "エラー",
          description: "カテゴリーは必須です",
          duration: 5000,
        });
        hasError = true;
      }

      if (data.description.length === 0 || data.description.length === 0) {
        toaster.error({
          id: "description-error",
          title: "エラー",
          description: "意見は必須です",
          duration: 5000,
        });
        hasError = true;
      }

      if (hasError) return;

      reset();
      toaster.success({
        id: "login-success",
        title: "新しい種を植えました",
        duration: 5000,
      });
    };

    return (
      <p.div
        style={{
          backgroundImage: `url(${wakaba})`,
          backgroundSize: "200px",
          backgroundPosition: "90% bottom",
          backgroundRepeat: "no-repeat",
        }}
        width="100%"
      >
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void handleSubmit(onSubmit)(e);
            }}
          >
            <Field.Root className={field.root}>
              <p.div p={2}>
                <p.p fontWeight="bold">位置情報</p.p>
                <Field.Input
                  {...register("location")}
                  className={field.input}
                  disabled
                  inputMode="text"
                  placeholder={address != null ? `${address}` : "取得中..."}
                />
              </p.div>
              <p.div p={2}>
                <p.p fontWeight="bold" py={2}>
                  カテゴリー
                </p.p>
                <Field.Select
                  {...register("category_id")}
                  className={field.select}
                >
                  <option value="">選択してください</option>
                  <option value="休憩">休憩</option>
                  <option value="環境">環境</option>
                  <option value="飲食">飲食</option>
                  <option value="施設">施設</option>
                  <option value="移動">移動</option>
                  <option value="その他">その他</option>
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
                background="wkb.primary"
                color="wkb.bg"
                disabled={address == null}
                fontSize="1rem"
                fontWeight="bold"
                rounded="md"
                type="submit"
              >
                種を蒔く
              </Button>
            </Field.Root>
          </form>
        </p.div>
      </p.div>
    );
  },
});
