import { Icon } from "@iconify/react";
import { css } from "panda/css";
import { VStack, type VstackProps } from "panda/jsx";
import { token, type Token } from "panda/tokens";
import { type ComponentProps, type ReactElement } from "react";
import { LOGO } from "@/assets/logo";
import { type OmitStrict } from "@/types/utils";

export function Logo({
  variant,
  refillColor,
  ...props
}: {
  variant: keyof typeof LOGO;
  refillColor?: Token;
} & OmitStrict<ComponentProps<typeof Icon>, "icon">): ReactElement {
  return (
    <Icon
      icon={LOGO[variant]}
      {...props}
      className={css({
        "&[data-should-refill='true']": {
          "& > *": {
            // eslint-disable-next-line @pandacss/no-hardcoded-color
            fill: "var(--fill)!",
          },
        },
      })}
      data-should-refill={refillColor != null}
      style={{
        // @ts-expect-error: CSS custom property
        "--fill": refillColor != null ? token(refillColor) : "currentColor",
      }}
    />
  );
}

export function LogoComposite({ ...props }: VstackProps): ReactElement {
  return (
    <VStack w="fit-content" {...props}>
      <Logo height="4em" variant="sym" />
      <Logo height="1em" variant="title" />
    </VStack>
  );
}
