import { Icon } from "@iconify/react";
import { styled as p, HStack } from "panda/jsx";
import { type ReactElement } from "react";
import { Button } from "@/components/cva/Button";

export function SownSeed({
  createdAt,
  category,
  description,
}: {
  createdAt: string;
  category: string;
  description: string;
}): ReactElement {
  return (
    <p.div
      bg="wkb-neutral.0"
      fontSize="sm"
      m={4}
      mdDown={{ minW: "90%" }}
      minH={250}
      minW={300}
      p={4}
      rounded="md"
      w="20%"
    >
      <p.div>
        <p.span>
          <HStack gap="-1">
            <HStack>
              <Icon icon="bi:calendar" />
              {createdAt}
            </HStack>
            <Button># {category}</Button>
            <p.p>{description}</p.p>
          </HStack>
        </p.span>
      </p.div>
    </p.div>
  );
}
