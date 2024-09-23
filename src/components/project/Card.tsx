import { Icon } from "@iconify/react";
import { styled as p, HStack } from "panda/jsx";

import { useEffect, useState, type ReactElement } from "react";
import { ICON } from "@/assets/icon";
import { fetchAddressFromLocation } from "@/lib/services/address";

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
  status: "wakaba" | "seed" | "tree";
  key_visual: string;
}): ReactElement {
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    void fetchAddressFromLocation({
      lat: location.lat,
      lon: location.lon,
    }).then((res) => {
      const data =
        status === "wakaba"
          ? `${JSON.stringify(res?.value.Feature[0].Property.AddressElement[2].Name)}周辺`
          : JSON.stringify(
              res?.value.Feature[0].Property.AddressElement[2].Name,
            ) +
            JSON.stringify(
              res?.value.Feature[0].Property.AddressElement[3].Name,
            );
      // eslint-disable-next-line no-console
      console.log(data);
      setAddress(data);
    });
  }, [location.lat, location.lon]);

  return (
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
            {address.replace(/"/g, "")}
          </HStack>
        </p.span>
        <p.p fontSize="2xl">{name}</p.p>
        <p.p fontSize="md">現在金額 ￥{amount_of_money}</p.p>
        <HStack>
          <Icon icon="mdi:star-outline" width={30} />
          <Icon icon="mdi:share-variant" width={30} />
          <p.div alignItems="baseline" ml="auto">
            <Icon
              height={status === "tree" ? "2rem" : "1.5rem"}
              icon={ICON[status]}
            />
          </p.div>
        </HStack>
      </p.div>
    </p.div>
  );
}
