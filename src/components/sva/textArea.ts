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
      borderRadius: "md",
    },
    textarea: {
      bg: "wkb.bg",
      rounded: "md",
      shadow: "md",
      duration: "200ms",
      width: "100%",
      minHeight: "200px",
      outline: "none",
      p: "1rem",
      _focus: {
        outline: "solid 2px wkb.primary",
      },
    },
    select: {
      bg: "wkb.bg",
      border: "1px solid",
      borderColor: "wkb.bg",
      rounded: "md",
      shadow: "md",
      duration: "200ms",
    },
    input: {
      minHeight: "48px",
      bg: "wkb.bg",
      rounded: "md",
      shadow: "md",
      width: "100%",
      p: "1rem",
      _open: {
        //
      },
      _closed: {
        //
      },
    },
  },
});
