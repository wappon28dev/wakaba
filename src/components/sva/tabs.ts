import { tabsAnatomy } from "@ark-ui/react";
import { sva } from "panda/css";

/**
 * Ark UI の [Popover コンポーネント](https://ark-ui.com/react/docs/components/popover) の基底スタイル
 *
 * 書き方 refs:
 * - https://panda-css.com/docs/concepts/slot-recipes
 * - https://ark-ui.com/react/docs/guides/styling#styling-with-panda-css
 * - https://speakerdeck.com/ikumatadokoro/panda-css-to-ark-ui-dehazimeruge-ren-kai-fa?slide=31
 */
export const svaTabs = sva({
  className: "tabs",
  slots: tabsAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      px: "20",
      mdDown: {
        px: "10",
      },
      py: "4",
      bg: "wkb.bg",
    },
    list: {
      display: "flex",
      direction: "row",
      justifyContent: "space-between",
    },
    trigger: {
      cursor: "pointer",
      px: "6",
      borderBottom: "2px solid",
      borderColor: "wkb.text",
      fontWeight: "bold",
      _selected: {
        color: "wkb-green",
        borderBottom: "2px solid",
        borderColor: "wkb.primary",
      },
    },
  },
});
