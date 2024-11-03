import { styled as p, VStack } from "panda/jsx";
import { type ReactElement } from "react";
import { Drawer } from "vaul";
import { Button } from "@/components/cva/Button";
import { svaDrawer } from "@/components/sva/drawer";

export function HalfModal(): ReactElement {
  const cls = svaDrawer({ direction: "right" });

  return (
    <Drawer.Root
      defaultOpen={false}
      direction="bottom"
      modal={false}
      snapPoints={["115px", "240px", "480px", 0.9]}
    >
      <Drawer.Trigger asChild>
        <Button>Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        {/* <Drawer.Overlay className={cls.overlay} /> */}
        <Drawer.Content className={cls.content}>
          <VStack>
            <div className={cls.handle} />
            <p.p>hey!</p.p>
          </VStack>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
