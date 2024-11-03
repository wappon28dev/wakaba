import { toastAnatomy } from "@ark-ui/react";
import { sva } from "panda/css";

export const svaToast = sva({
  className: "toast",
  slots: toastAnatomy.keys(),
  base: {
    root: {
      bg: "wkb.bg",
      rounded: "md",
      border: "1px solid",
      shadow: "md",
      w: {
        base: "300px",
        md: "400px",
      },
      p: "3",

      // ref: https://zagjs.com/components/react/toast#requirement
      translate: "var(--x) var(--y)",
      scale: "var(--scale)",
      zIndex: "var(--z-index)",
      height: "var(--height)",
      opacity: "var(--opacity)",
      willChange: "translate, opacity, scale",
      transition: "all 0.3s",
      transitionTimingFunction: "cubic-bezier(0.21, 1.02, 0.73, 1)",
    },
    title: {
      fontSize: "md",
      fontWeight: "bold",
    },
    description: {
      fontSize: "sm",
    },
    closeTrigger: {},
  },
});
