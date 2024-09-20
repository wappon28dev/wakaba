import { Portal, Select } from "@ark-ui/react";
import { Icon } from "@iconify/react";
import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/cva/Button";
import { svaSelect } from "@/components/sva/select";
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

    const cls = svaSelect();

    type Item = { label: string; value: string; disabled?: boolean };
    const items: Item[] = [
      { label: "カフェ", value: "cafe" },
      { label: "", value: "solid" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte", disabled: true },
    ];

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
        <p.form onSubmit={handleSubmitWrapper}>
          <p.input
            {...register("location", { required: true, maxLength: 20 })}
          />
          <p.input {...register("category", { pattern: /^[A-Za-z]+$/i })} />
          <p.input
            type="number"
            {...register("description", { min: 18, max: 99 })}
          />
          <input type="submit" />
        </p.form>
        <Select.Root className={cls.root} items={items}>
          <Select.Label className={cls.label}>Framework</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText
                className={cls.valueText}
                placeholder="カテゴリー"
              />
              <Select.Indicator className={cls.indicator}>
                <Icon icon="mdi:close" />
              </Select.Indicator>
            </Select.Trigger>
            <Select.ClearTrigger className={cls.clearTrigger}>
              Clear
            </Select.ClearTrigger>
          </Select.Control>
          <Portal>
            <Select.Positioner className={cls.positioner}>
              <Select.Content className={cls.content}>
                <Select.ItemGroup className={cls.itemGroup}>
                  <Select.ItemGroupLabel className={cls.itemGroupLabel}>
                    Frameworks
                  </Select.ItemGroupLabel>
                  {items.map((item) => (
                    <Select.Item
                      key={item.value}
                      className={cls.item}
                      item={item}
                    >
                      <Select.ItemText className={cls.itemText}>
                        {item.label}
                      </Select.ItemText>
                      <Select.ItemIndicator className={cls.itemIndicator}>
                        ✓
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.ItemGroup>
              </Select.Content>
            </Select.Positioner>
          </Portal>
          <Select.HiddenSelect />
        </Select.Root>
      </p.div>
    );
  },
});
