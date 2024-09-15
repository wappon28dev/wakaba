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

export function LogoComposite({ ...props }: VstackProps): ReactElement {
  return (
    <VStack w="fit-content" {...props}>
      <Logo height="4em" variant="sym" />
      <Logo height="1em" variant="title" />
    </VStack>
  );
}
