import { styled as p } from "panda/jsx";
import { type ReactElement } from "react";

export function HorizontalScrolling({
  children,
  title,
}: {
  children: ReactElement;
  title?: string;
}): ReactElement {
  return (
    <p.div w="100%">
      {title !== "" && (
        <p.p fontSize="xl" fontWeight="bold" ml={5} mt={2}>
          {title}
        </p.p>
      )}
      <p.div overflowX="scroll" w="100%">
        {children}
      </p.div>
    </p.div>
  );
}
