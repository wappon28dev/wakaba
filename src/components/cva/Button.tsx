import { styled as p } from "panda/jsx";

export const Button = p("button", {
  base: {
    colorPalette: "wkb.primary",
    p: "2",
    px: "4",
    rounded: "md",
  },
  variants: {
    variant: {
      light: {
        bg: "colorPalette/5",
        color: "colorPalette",
        _hover: {
          bg: "colorPalette/10",
        },
      },
      filled: {
        bg: "colorPalette",
        color: "wkb-white",
        _hover: {
          bg: "colorPalette/90",
        },
      },
      outlined: {
        m: "1",
        outline: "1px solid",
        outlineColor: "colorPalette",
        color: "colorPalette",
        _hover: {
          bg: "colorPalette/5",
        },
      },
    },
  },
  defaultVariants: {
    variant: "light",
  },
});
