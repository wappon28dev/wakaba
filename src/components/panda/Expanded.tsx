import { styled as p } from "panda/jsx";

export const Expanded = p("div", {
  base: {
    minW: "100%",
    minH: "100%",
  },
  variants: {
    size: {
      container: {},
      screen: {
        minW: ["100vw", "100dvw"],
        minH: ["100vh", "100dvh"],
      },
    },
    items: {
      center: {
        display: "grid",
        placeItems: "center",
        alignItems: "center",
      },
    },
  },
});
