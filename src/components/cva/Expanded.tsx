import { styled as p } from "panda/jsx";

export const Expanded = p("div", {
  base: {
    w: "100%",
    h: "100%",
  },
  variants: {
    basedOn: {
      container: {
        w: "100%",
        h: "100%",
      },
      screen: {
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
