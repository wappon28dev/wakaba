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
        // eslint-disable-next-line @pandacss/no-dynamic-styling
        h: ["100dvh", "100vh"],
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
