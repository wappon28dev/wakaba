import { Popover } from "@ark-ui/react";
import { Icon } from "@iconify/react";
import { css } from "panda/css";
import { styled as p, HStack } from "panda/jsx";
import { type ReactElement } from "react";
import { Button } from "@/components/cva/Button";
import { svaPopover } from "@/components/sva/popover";

export function PopoverSample(): ReactElement {
  const cls = svaPopover();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outlined">ポップオーバーサンプル！</Button>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content className={cls.content}>
          <Popover.Arrow className={cls.arrow}>
            <Popover.ArrowTip className={cls.arrowTip} />
          </Popover.Arrow>
          <HStack justify="space-between" w="100%">
            <Popover.Title
              // NOTE: cva で適宜されたスタイルを上書きするときは, 空白でクラス名を連結
              className={[
                cls.title,
                css({
                  color: "red.500",
                }),
              ].join(" ")}
            >
              ここがタイトル
            </Popover.Title>
            <Popover.CloseTrigger className={cls.closeTrigger}>
              <Icon icon="mdi:close" />
            </Popover.CloseTrigger>
          </HStack>
          <Popover.Description>
            ここに説明が入ります.
            <p.br />
            <p.code>sva</p.code> を用いてスタイルを定義しています.
          </Popover.Description>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
}
