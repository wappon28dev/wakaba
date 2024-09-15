import { Icon } from "@iconify/react";
import { HStack, type HstackProps } from "panda/jsx";
import { type ComponentProps, type ReactElement, type ReactNode } from "react";

export function IconText({
  icon,
  children,
  ...props
}: {
  icon: ComponentProps<typeof Icon>["icon"];
  children: ReactNode;
} & HstackProps): ReactElement {
  return (
    <HStack {...props}>
      <Icon icon={icon} />
      {children}
    </HStack>
  );
}
