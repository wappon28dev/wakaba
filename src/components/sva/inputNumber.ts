import { numberInputAnatomy } from "@ark-ui/react";
import { sva } from "panda/css";

/**
 * Ark UI の [Popover コンポーネント](https://ark-ui.com/react/docs/components/popover) の基底スタイル
 *
 * 書き方 refs:
 * - https://panda-css.com/docs/concepts/slot-recipes
 * - https://ark-ui.com/react/docs/guides/styling#styling-with-panda-css
 * - https://speakerdeck.com/ikumatadokoro/panda-css-to-ark-ui-dehazimeruge-ren-kai-fa?slide=31
 */
export const svaNumberInput = sva({
  className: "NumberInput",
  slots: numberInputAnatomy.keys(),
  base: {
    root: {
      width: "100%",
      margin: "auto",
      borderRadius: "md",
      padding: "1rem",
      border: "1px solid",
      borderColor: "wkb-neutral.900",
      position: "relative",
    },
    label: {
      fontSize: "sm",
      fontWeight: "bold",
      position: "absolute",
      top: "-1.5rem",
    },
    input: {
      color: "wkb-neutral.900",
      rounded: "md",
      shadow: "md",
      width: "100%",
      p: "1rem",
      textAlign: "left",
    },
    incrementTrigger: {
      bg: "wkb-neutral.900",
      rounded: "md",
      shadow: "md",
    },
    decrementTrigger: {
      bg: "wkb-neutral.900",
      rounded: "md",
      shadow: "md",
    },
    control: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      right: "0",
      top: "0",
      bottom: "0",
      justifyContent: "space-between",
      bg: "wkb-neutral.100",
      color: "wkb-neutral.900",
    },
  },
});
