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
export const svaContactField = sva({
  className: "ContactField",
  slots: fieldAnatomy.keys(),
  base: {
    root: {
      display: "grid",
      gap: "0.5rem",
      gridTemplateColumns: "1fr",
      width: "70vw",
      maxWidth: "700px",
      minWidth: "300px",
      borderRadius: "md",
    },
    textarea: {
      p: "2",
      bg: "white",
      height: "200px",
      rounded: "md",
      shadow: "md",
      duration: "200ms",
      width: "100%",
    },
    select: {
      p: "2",
      bg: "white",
      border: "1px solid",
      rounded: "md",
      shadow: "md",
      duration: "200ms",
    },
    input: {
      p: "2",
      bg: "white",
      rounded: "md",
      shadow: "md",
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
