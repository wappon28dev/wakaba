import { Icon } from "@iconify/react";
import { styled as p, HStack, VStack } from "panda/jsx";
import { type ReactElement } from "react";

export function ProjectCard({
  name,
  description,
  keyVisual,
  location,
  wateringPeople,
  isFinished,
  sponsorIcon,
  tag,
}: {
  name: string;
  description: string;
  location: string;
  isFinished: boolean;
  tag: string;
  wateringPeople: number;
  sponsorIcon?: string;
  keyVisual: string;
}): ReactElement {
  return (
    <p.div
      color="gray.600"
      fontSize="sm"
      m={10}
      minH={300}
      minW={250}
      rounded="md"
      w="30%"
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
            left={0}
            position="absolute"
            rounded="full"
            src="https://i0.wp.com/sozaikoujou.com/wordpress/wp-content/uploads/2015/04/th_business_icon_ca_124.png?w=860&ssl=1"
            top={0}
          />
        )}
      </p.div>
      <p.div
        css={{
          WebkitLineClamp: 2,
        }}
        h="1/2"
        overflow="hidden"
        pt={2}
        textOverflow="ellipsis"
        white-space="nowrap"
      >
        <VStack>
          <HStack w="100%">
            <p.p fontSize="xl">{name}</p.p>
            <p.span bg="red.400" ml="auto" px={2} rounded="md">
              # {tag}
            </p.span>
          </HStack>
          <p.div
            css={{
              WebkitLineClamp: 2,
            }}
            overflow="hidden"
            textOverflow="ellipsis"
            white-space="nowrap"
          >
            <p.p>{description}</p.p>
          </p.div>
          <HStack w="100%">
            <p.span>
              <HStack gap={0}>
                <Icon icon="bi:geo-alt-fill" />
                {location}
              </HStack>
            </p.span>
            <p.span ml="auto">支援人数: {wateringPeople}人</p.span>
          </HStack>
        </VStack>
      </p.div>
    </p.div>
  );
}
