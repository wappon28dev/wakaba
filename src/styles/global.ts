import { type GlobalStyleObject } from "@pandacss/dev";

export const globalCss: GlobalStyleObject = {
  "html, body": {
    color: "wkb.text",
    bg: "wkb.bg",
    fontFeatureSettings: "'plat'",
    fontFamily: "sans",
    scrollBehavior: "smooth",

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
    maxW: "1200px",
    px: "10",
    mdDown: {
      px: "5",
    },
  },
};
