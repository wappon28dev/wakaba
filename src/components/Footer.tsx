import { styled as p } from "panda/jsx";
import { type ReactElement } from "react";

export function Footer(): ReactElement {
  return (
    <p.footer bg="gray" color="white" p="4" textAlign="center">
      mdn
    </p.footer>
  );
}
