import { tabsAnatomy } from "@ark-ui/react";
import { sva } from "panda/css";

export const svaTabs = sva({
  className: "tabs",
  slots: tabsAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      px: "20",
      mdDown: {
        px: "10",
      },
      py: "4",
      bg: "wkb.bg",
    },
    list: {
      display: "flex",
      justifyContent: "space-between",
    },
    trigger: {
      cursor: "pointer",
      borderBottom: { base: "5px solid", md: "3px solid" },
      borderColor: "wkb.text",
      fontWeight: "bold",
      _selected: {
        color: "wkb-green",
        borderBottom: { base: "5px solid", md: "3px solid" },
        borderColor: "wkb.primary",
      },
      fontSize: { base: "2xl", md: "lg" },
    },
  },
});
