import { styled as p } from "panda/jsx";

/**
 * Button コンポーネントのレシピ
 *
 * 実体は <button> タグで, `<p.button ... > ... </p.button>` の Props がそのまま使えます.
 * また, `variant` という Props で `light`, `filled`, `outlined` のいずれかを指定することで, ボタンのスタイルをまとめて変更できます.
 * `colorPalette="wkb.secondary"` で色をまとめて変更できます.
 *
 * 書き方 refs:
 * - https://panda-css.com/docs/concepts/recipes#atomic-recipe-or-cva
 * - https://zenn.dev/jun0723/articles/bfa4cd24096584#%E3%83%AC%E3%82%B7%E3%83%94
 * - `colorPalette` や `/` などの Virtual Color について: https://panda-css.com/docs/concepts/virtual-color
 */
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
        color: "wkb.bg",
        _hover: {
          bg: "colorPalette/90",
        },
      },
      outlined: {
        outline: "1px solid",
        outlineColor: "colorPalette",
        color: "colorPalette",
        _hover: {
          bg: "colorPalette/5",
        },
      },
      text: {
        bg: "colorPalette/5",
        color: "colorPalette",
        _hover: {
          bg: "colorPalette/10",
        },
      },
    },
  },
  defaultVariants: {
    variant: "light",
  },
});
