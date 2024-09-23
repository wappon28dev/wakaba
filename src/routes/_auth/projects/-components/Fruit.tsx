import { HStack, styled as p, VStack } from "panda/jsx";
import { type ReactElement } from "react";
import { Button } from "@/components/cva/Button";

export function FruitCard({
  name,
  // @ts-expect-error - This is a mockup
  // eslint-disable-next-line @typescript-eslint/naming-convention
  key_visual,
  description,
  index,
}: {
  key_visual: string;
  name: string;
  description: string;
  index: number;
}): ReactElement {
  return (
    <VStack bg="wkb-neutral.100" p={4} rounded="md">
      <HStack alignSelf="start" gap={2}>
        <p.p color="wkb-neutral.700" fontSize="2xl" fontWeight="bold">
          {name}
        </p.p>
        {index === 0 && (
          <p.span color="wkb-neutral.700" fontSize="xl" fontWeight="bold">
            ¥ 1,000
          </p.span>
        )}
        {index === 1 && (
          <p.span color="wkb-neutral.700" fontSize="xl" fontWeight="bold">
            ¥ 3,000
          </p.span>
        )}
        {index === 2 && (
          <p.span color="wkb-neutral.700" fontSize="xl" fontWeight="bold">
            ¥ 5,000
          </p.span>
        )}
      </HStack>
      <p.p color="wkb-neutral.700" fontSize="sm">
        {description}
      </p.p>
      <Button
        _hover={{
          transform: "scale(1.05)",
          transition: "transform 0.1s",
        }}
        alignSelf="end"
        variant="filled"
      >
        支援する
      </Button>
    </VStack>
  );
}
