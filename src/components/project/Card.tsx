import { Icon } from "@iconify/react";
import { styled as p, HStack, VStack } from "panda/jsx";

import { type ReactElement } from "react";
import useSWRImmutable from "swr/immutable";
import { match } from "ts-pattern";
import { ICON } from "@/assets/icon";
import { fetchAddressFromLocation } from "@/lib/services/address";
import { S } from "@/lib/utils/patterns";
import { notifyErrorInToast } from "@/lib/utils/toast";
import { ICON } from "@/assets/icon";

export function ProjectCard({
  name,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  key_visual,
  location,
  amountOfMoney,
}: {
  name: string;
  location: {
    lat: number;
    lon: number;
  };
  amount_of_money: number;
  status: "wakaba" | "tsubomi" | "hana";
  key_visual: string;
}): ReactElement {
  const swrLocation = useSWRImmutable("location", async () =>
    (
      await fetchAddressFromLocation({
        lat: location.lat,
        lon: location.lon,
      })
    )._unsafeUnwrap(),
  );

  return (
    <VStack
      alignItems="start"
      bg="wkb-neutral.0"
      fontSize="sm"
      m={4}
      mdDown={{ minW: "90%" }}
      minH={300}
      minW={600}
      p={4}
      rounded="md"
      w="20%"
    >
      <p.div position="relative">
        <p.img
          alt="Placeholder"
          h="1/2"
          objectFit="cover"
          rounded="md"
          src={key_visual}
          w="100%"
        />
      </p.div>
      <HStack gap="1">
        {match(swrLocation)
          .with(S.Loading, () => (
            <>
              <Icon icon="svg-spinners:ring-resize" />
              <p.p>住所を取得中...</p.p>
            </>
          ))
          .with(S.Success, ({ data }) => {
            const addr = data.Feature.at(0)?.Property.AddressElement;
            const addrStr = match(status)
              .with("wakaba", () => `${addr?.at(2)?.Name}周辺`)
              .otherwise(() => addr?.at(2)?.Name ?? addr?.at(3)?.Name ?? "");
            return (
              <>
                <Icon icon="bi:geo-alt-fill" />
                <p.p>{addrStr}</p.p>
              </>
            );
          })
          .with(S.Error, ({ error }) => {
            notifyErrorInToast(
              "swrLocation",
              new Error(error as string),
              "住所の取得中にエラーが発生しました",
            );
            return (
              <p.p color="wkb.secondary">
                住所の取得中にエラーが発生しました
              </p.p>
            );
          })
          .otherwise(() => null)}
      </HStack>
      <p.p flex="1" fontSize="2xl" minH="3em">
        {name}
      </p.p>
      <p.p fontSize="md">現在金額 ￥{amount_of_money}</p.p>
      <HStack justifyContent="space-between" w="100%">
        <HStack>
          <Icon height="1.5em" icon="mdi:star-outline" />
          <Icon height="1.5em" icon="mdi:share-variant" />
        </HStack>
        <p.div alignItems="baseline" ml="auto">
          <Icon
            height={status === "hana" ? "2rem" : "1.5rem"}
            icon={ICON[status]}
          />
        </p.div>
      </HStack>
    </VStack>
  );
}
