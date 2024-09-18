import { styled as p } from "panda/jsx";
import { type ReactElement } from "react";

export function GridLayout({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  return (
    <p.div
      display="grid"
      gap={4}
      gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {children}
    </p.div>
  );
}
