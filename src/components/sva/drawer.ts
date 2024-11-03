import { sva } from "panda/css";
import { Drawer } from "vaul";
import { getKeys } from "@/lib/utils";

export const svaDrawer = sva({
  className: "drawer-vaul",
  slots: getKeys(Drawer).map(
    (key) => key.charAt(0).toLowerCase() + key.slice(1),
  ) as Array<Lowercase<keyof typeof Drawer>>,
  base: {
    overlay: {
      backgroundColor: "wkb-neutral.900/20",
      position: "fixed",
      inset: "0",
      zIndex: "modal",
    },
    content: {
      bg: "wkb.bg-overlay",
      border: "1px solid",
      rounded: "xl",
      zIndex: "1000",
      position: "fixed",
      bottom: "0",
      textAlign: "center",
      overflowY: "auto",
    },
    handle: {
      mt: "1rem",
      w: "100px",
      h: "0.3rem",
      borderRadius: "full",
      backgroundColor: "wkb-neutral.700",
      marginBottom: "1rem",
      cursor: "grab",
    },
  },

  variants: {
    direction: {
      top: {
        content: {
          top: 0,
          left: 0,
          right: 0,
          h: "full",
          w: "auto",
        },
      },
      bottom: {
        content: {
          bottom: 0,
          left: 0,
          right: 0,
          h: "full",
          w: "auto",
        },
      },
      left: {
        content: {
          left: 0,
          top: 0,
          bottom: 0,
          h: "auto",
          w: "full",
        },
      },
      right: {
        content: {
          right: 0,
          top: 0,
          bottom: 0,
          h: "auto",
          w: "full",
        },
      },
    },
  },

  defaultVariants: {
    direction: "bottom",
  },
});
