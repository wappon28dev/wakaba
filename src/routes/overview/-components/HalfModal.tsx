import { useState, useEffect, type ReactElement, useRef } from "react";
import { Drawer } from "vaul";
import { svaDrawer } from "@/components/sva/drawer";

export function HalfModal({
  direction,
  children,
  projectId,
}: {
  direction: "bottom" | "top" | "left" | "right";
  children: ReactElement;
  projectId: string;
}): ReactElement {
  const cls = svaDrawer({ direction });
  const [open, setOpen] = useState(false);

  function usePrevious(value: any): any {
    const ref = useRef(null);
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevProjectId = usePrevious(projectId);

  useEffect(() => {
    if (prevProjectId !== projectId) {
      setOpen(true);
    }
    if (prevProjectId !== projectId && projectId === "") {
      setOpen(false);
    }
  }, [projectId]);

  return (
    <Drawer.Root
      direction={direction}
      modal={false}
      open={open}
      snapPoints={direction === "right" ? ["768px"] : ["768px", 0.9]}
    >
      <Drawer.Portal>
        <Drawer.Content className={cls.content}>{children}</Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
