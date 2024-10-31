import { datePickerAnatomy } from "@ark-ui/react";
import { sva } from "panda/css";

export const svaDatePicker = sva({
  className: "datePicker",
  slots: datePickerAnatomy.keys(),
  base: {
    control: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px",
      borderRadius: "md",
      backgroundColor: "wkb.bg",
      shadow: "md",
      _hover: {
        borderColor: "gray.400",
      },
      _focusWithin: {
        borderColor: "blue.500",
      },
    },
    input: {
      fontSize: "16px",
      color: "gray.700",
      bg: "wkb.bg",
      padding: "0 8px",
      width: "100%",
      _focus: {
        outline: "none",
      },
    },
    trigger: {
      fontSize: "20px",
      color: "gray.500",
      cursor: "pointer",
      _hover: {
        color: "blue.500",
      },
    },
    clearTrigger: {
      fontSize: "20px",
      color: "gray.500",
      cursor: "pointer",
      _hover: {
        color: "red.500",
      },
    },
    content: {
      padding: "16px",
      border: "1px solid",
      borderColor: "gray.300",
      borderRadius: "md",
      boxShadow: "lg",
      backgroundColor: "white",
    },
    positioner: {
      zIndex: 10,
    },
    yearSelect: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 16px",
    },
    monthSelect: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 16px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "8px",
    },
    tableRow: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    tableCell: {
      width: "14.285%",
      height: "36px",
      textAlign: "center",
      verticalAlign: "middle",
      cursor: "pointer",
      _hover: {
        backgroundColor: "gray.100",
      },
      _selected: {
        backgroundColor: "blue.500",
        color: "white",
      },
    },
    tableHead: {
      fontWeight: "bold",
      color: "gray.500",
      display: "flex",
      width: "1%",
    },
    prevTrigger: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "blue.500",
      color: "white",
      padding: "4px 8px",
      borderRadius: "4px",
      cursor: "pointer",
      _hover: {
        backgroundColor: "blue.400",
      },
    },
    nextTrigger: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "blue.500",
      color: "white",
      padding: "4px 8px",
      borderRadius: "4px",
      cursor: "pointer",
      _hover: {
        backgroundColor: "blue.400",
      },
    },
  },
});
