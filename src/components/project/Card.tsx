import { Icon } from "@iconify/react";
import { styled as p, HStack } from "panda/jsx";
import { type ReactElement } from "react";

export function ProjectCard({
  name,
  keyVisual,
  location,
  isFinished,
  amountOfMoney,
  sponsorIcon,
}: {
  name: string;
  location: string;
  isFinished: boolean;
  amountOfMoney: number;
  sponsorIcon?: string;
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
        {sponsorIcon !== "" && (
          <p.img
            bottom={0}
            h="50px"
            position="absolute"
            right={0}
            rounded="full"
            src={sponsorIcon}
          />
        )}
        {isFinished && (
          <p.img
            h="50px"
            left="-3"
            position="absolute"
            rounded="full"
            src="https://i0.wp.com/sozaikoujou.com/wordpress/wp-content/uploads/2015/04/th_business_icon_ca_124.png?w=860&ssl=1"
            top="-3"
          />
        )}
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
          {/*  ここにステータスあいこんを追加してほしい */}
        </HStack>
      </p.div>
    </p.div>
  );
}
