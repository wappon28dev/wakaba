import { Icon } from "@iconify/react";
import { styled as p, HStack } from "panda/jsx";

import { type ReactElement } from "react";
import useSWRImmutable from "swr/immutable";
import { match } from "ts-pattern";
import { ICON } from "@/assets/icon";
import { Loading } from "@/components/Loading";
import { Expanded } from "@/components/cva/Expanded";
import { fetchAddressFromLocation } from "@/lib/services/address";
import { S } from "@/lib/utils/patterns";

export function ProjectCard({
  name,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  key_visual,
  location,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  amount_of_money,
  status,
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

  return match(swrLocation)
    .with(S.Loading, () => (
      <Expanded basedOn="screen" items="center">
        <Loading>
          <p.p>わかばの起動中...</p.p>
        </Loading>
      </Expanded>
    ))
    .with(S.Success, ({ data: { Feature } }) => (
      <p.div
        bg="wkb-neutral.0"
        fontSize="sm"
        m={4}
        mdDown={{ minW: "90%" }}
        minH={300}
        minW={300}
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
        <p.div h="1/2" pt={4}>
          <p.span>
            <HStack gap="-1">
              <Icon icon="bi:geo-alt-fill" />
              {status === "wakaba"
                ? `${Feature.at(0)?.Property.AddressElement[2]?.Name}周辺`
                : Feature.at(0)?.Property.AddressElement[2]?.Name ??
                  `${Feature.at(0)?.Property.AddressElement[3]?.Name}` ??
                  ""}
            </HStack>
          </p.span>
          <p.p fontSize="2xl">{name}</p.p>
          <p.p fontSize="md">現在金額 ￥{amount_of_money}</p.p>
          <HStack>
            <Icon icon="mdi:star-outline" width={30} />
            <Icon icon="mdi:share-variant" width={30} />
            <p.div alignItems="baseline" ml="auto">
              <Icon
                height={status === "hana" ? "2rem" : "1.5rem"}
                icon={ICON[status]}
              />
            </p.div>
          </HStack>
        </p.div>
      </p.div>
    ))
    .otherwise(({ error }) => <p.p>{error.Error.Message}</p.p>);
}
