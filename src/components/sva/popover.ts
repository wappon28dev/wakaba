import { popoverAnatomy } from "@ark-ui/react";
import { sva } from "panda/css";

/**
 * Ark UI の [Popover コンポーネント](https://ark-ui.com/react/docs/components/popover) の基底スタイル
 *
 * 書き方 refs:
 * - https://panda-css.com/docs/concepts/slot-recipes
 * - https://ark-ui.com/react/docs/guides/styling#styling-with-panda-css
 * - https://speakerdeck.com/ikumatadokoro/panda-css-to-ark-ui-dehazimeruge-ren-kai-fa?slide=31
 */
export const svaPopover = sva({
  className: "popover",
  slots: popoverAnatomy.keys(),
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
    title: {
      fontSize: "lg",
      fontWeight: "bold",
    },
    closeTrigger: {
      cursor: "pointer",
      rounded: "md",
      p: "2",
      _hover: {
        bg: "gray.200",
      },
    },
    // https://zagjs.com/components/popover#arrow
    arrow: {
      "--arrow-background": "var(--colors-wkb\\.background)",
      "--arrow-size": "16px",
      "--arrow-shadow-color": "gray",
    },
    arrowTip: {
      borderTop: "1px solid",
      borderLeft: "1px solid",
    },
  },
});
