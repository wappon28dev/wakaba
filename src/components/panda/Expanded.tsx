import { p } from "./_p";

export const Expanded = p("div", {
  base: {
    w: "100%",
    h: "100%",
  },
  variants: {
    size: {
      container: {
        w: "100%",
        h: "100%",
      },
      screen: {
        w: ["100vw", "100dvw"],
        h: ["100vh", "100dvh"],
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
