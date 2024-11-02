import { cva } from "panda/css";
import { styled as p } from "panda/jsx";

export const cvaGridLayout = cva({
  base: {
    gap: "5",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  },
});

export const GridLayout = p("div", cvaGridLayout);
