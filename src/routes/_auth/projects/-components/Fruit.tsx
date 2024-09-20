import { HStack, styled as p, VStack } from "panda/jsx";
import { type ReactElement } from "react";
import { Button } from "@/components/cva/Button";

export function FruitCard({
  name,
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
    <VStack bg="wkb-neutral.0" p={4} rounded="md">
      <p.img
        alignSelf="start"
        alt="Placeholder"
        rounded="md"
        src={key_visual}
      />
      <HStack alignSelf="start" gap={2}>
        <p.p fontSize="2xl" fontWeight="bold">
          {name}
        </p.p>
        {index === 0 && (
          <p.span fontSize="xl" fontWeight="bold">
            ¥ 1,000
          </p.span>
        )}
        {index === 1 && (
          <p.span fontSize="xl" fontWeight="bold">
            ¥ 3,000
          </p.span>
        )}
        {index === 2 && (
          <p.span fontSize="xl" fontWeight="bold">
            ¥ 5,000
          </p.span>
        )}
      </HStack>
      <p.p fontSize="sm">{description}</p.p>
      <Button alignSelf="end" variant="filled">
        支援する
      </Button>
    </VStack>
  );
}
