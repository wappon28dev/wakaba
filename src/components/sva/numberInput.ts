import { numberInputAnatomy } from "@ark-ui/react";
import { sva } from "panda/css";

export const svaNumberInput = sva({
  className: "numberInput",
  slots: numberInputAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      borderRadius: "md",
      backgroundColor: "wkb.bg",
      textAlign: "right",
      width: "100%",
      _hover: {
        borderColor: "gray.400",
      },
      _focusWithin: {
        borderColor: "blue.500",
      },
    },
    input: {
      fontSize: "6xl",
      color: "gray.700",
      textAlign: "right",
      width: "100%",
      _focus: {
        outline: "none",
      },
    },
  },
});
