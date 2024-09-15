import { Icon } from "@iconify/react";
import { VStack, type VstackProps } from "panda/jsx";
import { type ComponentProps, type ReactElement } from "react";
import { LOGO } from "@/assets/logo";
import { type OmitStrict } from "@/types/utils";

export function Logo({
  variant,
  ...props
}: {
  variant: keyof typeof LOGO;
} & OmitStrict<ComponentProps<typeof Icon>, "icon">): ReactElement {
  return <Icon icon={LOGO[variant]} {...props} />;
}

export function LogoComposite({
  scale = 1,
  ...props
}: {
  scale?: number;
} & VstackProps): ReactElement {
  return (
    <VStack w="fit-content" {...props}>
      <Logo height={`${4 * scale}em`} variant="sym" />
      <Logo height={`${1 * scale}em`} variant="title" />
    </VStack>
  );
}
