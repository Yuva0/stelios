import { createUseStyles } from "react-jss";
import { InputStyleProps } from "./Input.types";
import colors from "../../tokens/colors.json";

const getPadding = (props: InputStyleProps) => {
  switch (props.size) {
    case "small":
      if (props.hasLeadingIcon && props.hasTrailingIcon) return "0 8px";
      if (props.hasLeadingIcon) return "0 12px 0 8px";
      if (props.hasTrailingIcon) return "0 8px 0 12px";
      return "0 12px";
    case "medium":
      if (props.hasLeadingIcon && props.hasTrailingIcon) return "0 12px";
      if (props.hasLeadingIcon) return "0 16px 0 12px";
      if (props.hasTrailingIcon) return "0 12px 0 16px";
      return "0 16px";

    case "large":
      if (props.hasLeadingIcon && props.hasTrailingIcon) return "0 16px";
      if (props.hasLeadingIcon) return "0 20px 0 16px";
      if (props.hasTrailingIcon) return "0 16px 0 20px";
      return "0 20px";
  }
  return "0 16px";
};

const getBorderColor = (props: InputStyleProps) => {
  switch (props.color) {
    case "primary":
      return `1px solid ${colors.primary[400]}`;
    case "secondary":
      return `1px solid ${colors.secondary[400]}`;
  }
};

const getFontSize = (props: InputStyleProps) => {
  switch (props.size) {
    case "small":
      return { fontSize: "0.875rem", lineHeight: "2rem" };
    case "medium":
      return { fontSize: "0.875rem", lineHeight: "2.5rem" };
    case "large":
      return { fontSize: "1rem", lineHeight: "3rem" };
  }
  return { fontSize: "1rem", lineHeight: "2.5rem" };
};

const getIconSize = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return "1rem";
    case "medium":
      return "1.25rem";
    case "large":
      return "1.5rem";
  }
  return "1.5rem";
};

const useInputStyles = createUseStyles({
  "ste-input": (props: InputStyleProps) => {
    return {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      width: props.width ?? "auto",
    };
  },
  "ste-input-content": (props: InputStyleProps) => ({
    border: getBorderColor(props),
    borderRadius: "8px",
    outline: props.isFocused ? `2px solid ${colors.info["500"]}` : "none",
    outlineOffset: "-1px",
    padding: getPadding(props),
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
    justifyContent: "center",
    alignItems: "center",
    cursor: "text",

    "& input": {
      padding: 0,
      margin: 0,
      border: 0,
      width: "100%",
      fontSize: getFontSize(props).fontSize,
      lineHeight: getFontSize(props).lineHeight,
      outlineOffset: "-1px",
      "&::placeholder": {
        color: colors.secondary[500],
      },
      "&:focus-visible": {
        outline: "none",
      },
    },
    "&:hover": {
      outline: props.isFocused
        ? `2px solid ${colors.info["500"]}`
        : `1px solid ${colors.secondary["600"]}`,
    },
    "&:focus": {
      outline: `1px solid blue`,
    },
  }),
  "ste-input-label": (props: InputStyleProps) => ({
    marginLeft: "0.2rem",
    color: colors.secondary[800],
  }),
  "ste-input-icon": (props: InputStyleProps) => ({
    color: colors.secondary[500],
    width: getIconSize(props.size),
    height: getIconSize(props.size),
    "& svg": {
      width: "100%",
      height: "100%",
    },
  }),
});

export default useInputStyles;
