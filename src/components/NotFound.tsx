import { Icon } from "@iconify/react";
import { styled as p, VStack } from "panda/jsx";
import { type ReactElement } from "react";
import { Expanded } from "./panda/Expanded";

export function NotFoundScreen(): ReactElement {
  return (
    <Expanded items="center">
      <VStack>
        <Icon
          height="2em"
          icon="mdi:umbrella-closed-variant"
          transform="rotate(30)"
        />
        <p.p>404 - Not Found</p.p>
      </VStack>
    </Expanded>
  );
}
