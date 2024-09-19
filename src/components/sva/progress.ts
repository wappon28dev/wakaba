import { progressAnatomy } from "@ark-ui/react";
import { sva } from "panda/css";

/**
 * Ark UI の [Popover コンポーネント](https://ark-ui.com/react/docs/components/popover) の基底スタイル
 *
 * 書き方 refs:
 * - https://panda-css.com/docs/concepts/slot-recipes
 * - https://ark-ui.com/react/docs/guides/styling#styling-with-panda-css
 * - https://speakerdeck.com/ikumatadokoro/panda-css-to-ark-ui-dehazimeruge-ren-kai-fa?slide=31
 */
export const svaProgress = sva({
  className: "progress",
  slots: progressAnatomy.keys(),
  base: {
    root: {
      bg: "wkb-neutral.900",
      rounded: "full",
      h: "4",
    },
    track: {
      bg: "wkb-neutral.100",
      h: "full",
      w: "full",
      rounded: "full",
    },
    range: {
      bg: "wkb.primary",
      h: "full",
      w: "full",
      rounded: "full",
      display: "flex",
      alignItems: "center",
    },
    valueText: {
      color: "wkb.text",
      fontSize: "sm",
      paddingLeft: "2",
    },
  },
});
