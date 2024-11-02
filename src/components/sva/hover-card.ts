import { hoverCardAnatomy } from "@ark-ui/react";
import { sva } from "panda/css";

export const svaHoverCard = sva({
  className: "hover-card",
  slots: hoverCardAnatomy.keys(),
  base: {
    content: {
      p: "2",
      bg: "wkb.bg",
      border: "1px solid",
      rounded: "md",
      shadow: "md",
      duration: "200ms",
      _open: {
        // https://github.com/mverissimo/pandacss-animate
        slideInY: "1",
        fadeIn: "5",
      },
      _closed: {
        slideOutY: "1",
        fadeOut: "5",
      },
    },
    // https://zagjs.com/components/popover#arrow
    arrow: {
      "--arrow-background": "var(--colors-wkb\\.bg)",
      "--arrow-size": "16px",
      "--arrow-shadow-color": "gray",
    },
    arrowTip: {
      borderTop: "1px solid",
      borderLeft: "1px solid",
    },
  },
});
