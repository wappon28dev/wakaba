import { Icon } from "@iconify/react";
import { styled as p, HStack } from "panda/jsx";

import { type ReactElement } from "react";
import { ICON } from "@/assets/icon";

export function ProjectCard({
  name,
  keyVisual,
  location,
  amountOfMoney,
  status,
}: {
  name: string;
  location: string;
  amountOfMoney: number;
  status: "wakaba" | "seed" | "tree";
  keyVisual: string;
}): ReactElement {
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
          src={keyVisual}
          w="100%"
        />
      </p.div>
      <p.div h="1/2" pt={4}>
        <p.span>
          <HStack gap="-1">
            <Icon icon="bi:geo-alt-fill" />
            {location}
          </HStack>
        </p.span>
        <p.p fontSize="3xl">{name}</p.p>
        <p.p fontSize="md">現在金額 ￥{amountOfMoney}</p.p>
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
