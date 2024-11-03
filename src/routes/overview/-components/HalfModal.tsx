import { type ReactElement } from "react";
import { Drawer } from "vaul";
import { Button } from "@/components/cva/Button";
import { svaDrawer } from "@/components/sva/drawer";

export function HalfModal({
  direction,
  children,
}: {
  direction: "bottom" | "top" | "left" | "right";
  children: ReactElement;
}): ReactElement {
  const cls = svaDrawer({ direction });

  return (
    <Drawer.Root
      direction={direction}
      modal={false}
      snapPoints={direction === "right" ? ["768px"] : ["768px", 0.9]}
    >
      <Drawer.Trigger asChild>
        <Button>Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content className={cls.content}>{children}</Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
