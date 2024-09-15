import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  "html, body": {
    color: "wkb.text",
    bg: "wkb.background",
    fontFeatureSettings: "'plat'",
    fontFamily: "sans",

    fontSize: {
      base: "large",
      mdDown: "md",
    },
  },
  "pre, code": {
    fontFamily: "mono",
  },
  button: {
    cursor: "pointer",
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4,
    },
  },
  article: {
    mdDown: {
      px: "5",
    },
  },
  ".content": {
    mdDown: {
      px: "10",
    },
  },
});
