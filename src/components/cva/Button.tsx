import { styled as p } from "panda/jsx";

export const Button = p("button", {
  base: {
    p: "2",
    px: "4",
    rounded: "md",
  },
  variants: {
    variant: {
      light: {
        bg: "colorPalette.50",
        color: "colorPalette.500",
        _hover: {
          bg: "colorPalette.100",
        },
      },
      filled: {
        bg: "colorPalette.500",
        color: "white",
        _hover: {
          bg: "colorPalette.600",
        },
      },
      outlined: {
        border: "1px solid",
        borderColor: "colorPalette.500",
        color: "colorPalette.500",
        _hover: {
          bg: "colorPalette.50",
        },
      },
    },
  },
});
