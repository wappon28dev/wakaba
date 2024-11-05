import { Toast, Toaster } from "@ark-ui/react";
import { Icon } from "@iconify/react";
import { type Type } from "@zag-js/toast";
import { Divider, HStack, VStack } from "panda/jsx";
import { token, type Token } from "panda/tokens";
import { type ReactElement } from "react";
import { match } from "ts-pattern";
import { IconText } from "./IconText";
import { Button } from "./cva/Button";
import { svaToast } from "./sva/toast";
import { toaster } from "@/lib/utils/toast";
import { type Nullable } from "@/types/utils";

type Style = {
  icon: string;
  color?: Token;
  bgColor: Token;
};

const iconAndColor = {
  success: {
    icon: "mdi:check",
    color: "colors.wkb.bg-overlay",
    bgColor: "colors.wkb.primary",
  },
  error: {
    icon: "mdi:alert",
    color: "colors.wkb.bg",
    bgColor: "colors.red.500",
  },
  info: {
    bgColor: "colors.blue.50",
    icon: "mdi:information",
  },
  loading: {
    bgColor: "colors.yellow.50",
    icon: "svg-spinners:ring-resize",
  },
} as const satisfies Record<Exclude<Type, string & object>, Style>;

function getIconAndColor(type: Nullable<Type>): Style {
  return match(type)
    .when(
      (t) => t != null && t in iconAndColor,
      (t) => iconAndColor[t as keyof typeof iconAndColor],
    )
    .otherwise(
      () =>
        ({
          bgColor: "colors.wkb.bg",
          icon: "",
        }) as const,
    );
}

export function StyledToast(): ReactElement {
  const cls = svaToast();

  return (
    <Toaster toaster={toaster}>
      {(toast) => {
        const { icon, bgColor, color } = getIconAndColor(toast.type);
        return (
          <Toast.Root
            key={toast.id}
            className={cls.root}
            style={{
              backgroundColor: token(bgColor),
              color: color != null ? token(color) : undefined,
            }}
          >
            <VStack alignItems="start">
              <HStack justifyContent="space-between" w="100%">
                <Toast.Title className={cls.title}>
                  <IconText icon={icon}>{toast.title}</IconText>
                </Toast.Title>
                <Toast.CloseTrigger className={cls.closeTrigger}>
                  <Icon icon="mdi:close" />
                </Toast.CloseTrigger>
              </HStack>
              <Toast.Description className={cls.description}>
                {toast.description}
              </Toast.Description>
              {toast.action != null && (
                <VStack alignItems="end" w="100%">
                  <Divider />
                  <Toast.ActionTrigger asChild>
                    <Button
                      colorPalette={color?.split(".").at(1) ?? "wkb.text"}
                      size="sm"
                      variant="text"
                    >
                      {toast.action?.label}
                    </Button>
                  </Toast.ActionTrigger>
                </VStack>
              )}
            </VStack>
          </Toast.Root>
        );
      }}
    </Toaster>
  );
}
