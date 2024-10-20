import { fieldAnatomy } from "@ark-ui/react";
import { sva } from "panda/css";

/**
 * Ark UI の [Popover コンポーネント](https://ark-ui.com/react/docs/components/popover) の基底スタイル
 *
 * 書き方 refs:
 * - https://panda-css.com/docs/concepts/slot-recipes
 * - https://ark-ui.com/react/docs/guides/styling#styling-with-panda-css
 * - https://speakerdeck.com/ikumatadokoro/panda-css-to-ark-ui-dehazimeruge-ren-kai-fa?slide=31
 */
export const svaTextArea = sva({
  className: "TextArea",
  slots: fieldAnatomy.keys(),
  base: {
    root: {
      display: "grid",
      gap: "0.5rem",
      gridTemplateColumns: "1fr",
      width: "100%",
      margin: "auto",
      padding: "1rem",
      backgroundColor: "gray.200",
      borderRadius: "md",
      boxShadow: "md",
    },
    textarea: {
      p: "2",
      bg: "wkb.bg-overlay",
      rounded: "md",
      shadow: "md",
      duration: "200ms",
      width: "100%",
    },
    select: {
      p: "2",
      bg: "wkb.bg-overlay",
      border: "1px solid",
      borderColor: "wkb-neutral.0",
      rounded: "md",
      shadow: "md",
      duration: "200ms",
    },
    input: {
      p: "2",
      bg: "wkb.bg",
      rounded: "md",
      width: "100%",
      _open: {
        //
      },
      _closed: {
        //
      },
    },
  },
});
