import { styled as p } from "panda/jsx";
import { type ReactElement } from "react";

export function HorizontalScrolling({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  return (
    <p.div overflowX="scroll" w="100%">
      {children}
    </p.div>
  );
}
