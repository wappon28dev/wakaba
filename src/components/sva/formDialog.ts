import { dialogAnatomy } from "@ark-ui/react";
import { sva } from "panda/css";

/**
 * Ark UI の [Popover コンポーネント](https://ark-ui.com/react/docs/components/popover) の基底スタイル
 *
 * 書き方 refs:
 * - https://panda-css.com/docs/concepts/slot-recipes
 * - https://ark-ui.com/react/docs/guides/styling#styling-with-panda-css
 * - https://speakerdeck.com/ikumatadokoro/panda-css-to-ark-ui-dehazimeruge-ren-kai-fa?slide=31
 */
export const svaFormDialog = sva({
  className: "formDialog",
  slots: dialogAnatomy.keys(),
  base: {
    content: {
      backgroundColor: "wkb-neutral.0",
      borderRadius: "md",
      boxShadow: "md",
      padding: "md",
      position: "fixed",
      zIndex: "modalContent",
      top: "50%",
      left: "50%",
      width: "90%",
      height: "90%",
      transform: "translate(-50%, -50%)",
      rounded: "md",
      // fade in animation
      animation: "fadeIn 0.3s",
      p: 4,
    },
    title: {
      fontSize: "lg",
      fontWeight: "bold",
      marginBottom: "md",
      mb: 4,
    },
    description: {
      marginBottom: "md",
      fontSize: "md",
    },
    trigger: {
      cursor: "pointer",
    },
    backdrop: {
      animation: "fadeIn 0.3s",
      backgroundColor: "wkb-neutral.0/20",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: "modal",
    },
  },
});
