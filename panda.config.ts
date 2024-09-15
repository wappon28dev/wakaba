import { defineConfig } from "@pandacss/dev";
import { globalCss } from "@/styles/global";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          "wkb-brown": { value: "#462D25" },
          "wkb-green": { value: "#83C024" },
          "wkb-orange": { value: "#F49D22" },
          "wkb-white": { value: "#F2F2F2" },
        },
        fonts: {
          sans: {
            value: "'Inter Variable', 'Noto Sans JP Variable', sans-serif",
          },
          mono: { value: "var(--font-mono)" },
        },
        zIndex: {
          header: { value: 10 },
          modal: { value: 100 },
          modalContent: { value: 110 },
        },
      },
      semanticTokens: {
        colors: {
          "wkb.primary": { value: "{colors.wkb-green}" },
          "wkb.secondary": { value: "{colors.wkb-orange}" },
          "wkb.text": { value: "{colors.wkb-brown}" },
          "wkb.background": { value: "{colors.wkb-white}" },
        },
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },

  globalCss,

  // The output directory for your css system
  outdir: "panda",
  jsxFramework: "react",
});
