import { selectAnatomy } from "@ark-ui/react";
import { sva } from "panda/css";

/**
 * Ark UI の [Popover コンポーネント](https://ark-ui.com/react/docs/components/popover) の基底スタイル
 *
 * 書き方 refs:
 * - https://panda-css.com/docs/concepts/slot-recipes
 * - https://ark-ui.com/react/docs/guides/styling#styling-with-panda-css
 * - https://speakerdeck.com/ikumatadokoro/panda-css-to-ark-ui-dehazimeruge-ren-kai-fa?slide=31
 */
export const svaSelect = sva({
  className: "select",
  slots: selectAnatomy.keys(),
  base: {
    root: {
      bg: "wkb.bg",
      rounded: "md",
      shadow: "md",
      p: "3",
      w: "full",
    },
    trigger: {
      cursor: "pointer",
      w: "full",
      p: "2",
      _selected: {
        bg: "wkb.primary",
        color: "wkb.bg",
      },
    },
    list: {
      bg: "wkb.bg",
      rounded: "md",
      shadow: "md",
      p: "2",
      w: "full",
    },
    item: {
      cursor: "pointer",
      bg: "wkb-neutral.100",
      shadow: "md",
      w: "full",
      p: "2",
      _hover: {
        bg: "gray.200",
      },
      _selected: {
        bg: "wkb-green",
        color: "wkb.bg",
      },
    },
  },
});
