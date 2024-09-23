import { Icon } from "@iconify/react";
import { styled as p, HStack } from "panda/jsx";
import { type ReactElement } from "react";
import { ICON } from "@/assets/icon";
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
      _hover={{ shadow: "md" }}
      bg="wkb-neutral.0"
      boxSizing="border-box"
      fontSize="sm"
      minH={250}
      minW="250px"
      p={4}
      rounded="md"
    >
      {" "}
      <p.div>
        <p.div display="grid" gap={2} height="100%">
          <HStack gap={2} justify="start">
            <HStack alignItems="center" justify="center">
              <Icon icon="uil:calender" width={30} />
              <p.p>{createdAt}</p.p>
            </HStack>
            <p.span ml="auto">
              <Icon fontSize={30} icon={ICON.seed} />
            </p.span>
          </HStack>
          <Button
            _hover={{ bg: "wkb-brown", shadow: "md" }}
            background="wkb-brown"
            color="wkb.bg"
            mt={5}
            rounded="xl"
            width="1/2"
          >
            # {category}
          </Button>
          <p.p fontSize="1.2rem">{description}</p.p>
        </p.div>
      </p.div>
    </p.div>
  );
}
