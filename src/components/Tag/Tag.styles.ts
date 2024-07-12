import { createUseStyles } from "react-jss";
import { TagStyleProps } from "./Tag.types";
import colors from "../../tokens/colors.json";

const getBackgroundColor = (props: TagStyleProps) => {
  switch (props.variant) {
    case "contained":
      switch (props.color) {
        case "primary":
          return colors.primary[400];
        case "secondary":
          return colors.secondary[800];
        case "tertiary":
          return colors.tertiary[800];
        case "danger":
          return colors.danger[700];
        case "warning":
          return colors.warning[700];
        case "success":
          return colors.success[800];
        case "info":
          return colors.info[700];
      }
      break;
    case "outlined":
      return "#ffffff";
  }
};
const getHoverBackgroundColor = (props: TagStyleProps) => {
  switch (props.variant) {
    case "contained":
      switch (props.color) {
        case "primary":
          return colors.primary[500];
        case "secondary":
          return colors.secondary[900];
        case "tertiary":
          return colors.tertiary[900];
        case "danger":
          return colors.danger[800];
        case "warning":
          return colors.warning[800];
        case "success":
          return colors.success[900];
        case "info":
          return colors.info[900];
      }
      break;
    case "outlined":
      switch (props.color) {
        case "primary":
          return colors.primary[10];
        case "secondary":
          return colors.secondary[100];
        case "tertiary":
          return colors.tertiary[10];
        case "danger":
          return colors.danger[10];
        case "warning":
          return colors.warning[10];
        case "success":
          return colors.success[100];
        case "info":
          return colors.info[100];
      }
      return;
  }
};

const getColor = (props: TagStyleProps) => {
  switch (props.variant) {
    case "contained":
      switch (props.color) {
        case "primary":
          return "#000";
        case "warning":
          return "#000";
      }
      return "#fff";
    case "outlined":
      switch (props.color) {
        case "primary":
          return colors.primary[900];
        case "secondary":
          return colors.secondary[800];
        case "tertiary":
          return colors.tertiary[900];
        case "danger":
          return colors.danger[700];
        case "warning":
          return colors.warning[900];
        case "success":
          return colors.success[900];
        case "info":
          return colors.info[800];
      }
      break;
  }
};
const getHoverColor = (props: TagStyleProps) => {
  switch (props.variant) {
    case "contained":
      switch (props.color) {
        case "primary":
          return "#000";
        case "warning":
          return "#000";
      }
      return "#fff";
    case "outlined":
      switch (props.color) {
        case "primary":
          return colors.primary[900];
        case "secondary":
          return colors.secondary[800];
        case "tertiary":
          return colors.tertiary[900];
        case "danger":
          return colors.danger[700];
        case "warning":
          return colors.warning[900];
        case "success":
          return colors.success[900];
        case "info":
          return colors.info[800];
      }
      break;
  }
};

const getOutline = (props: TagStyleProps) => {
  switch (props.variant) {
    case "contained":
      switch (props.color) {
        case "primary":
          return `1px solid ${colors.primary[400]}`;
        case "secondary":
          return `1px solid ${colors.secondary[800]}`;
        case "tertiary":
          return `1px solid ${colors.tertiary[800]}`;
        case "danger":
          return `1px solid ${colors.danger[700]}`;
        case "warning":
          return `1px solid ${colors.warning[700]}`;
        case "success":
          return `1px solid ${colors.success[800]}`;
        case "info":
          return `1px solid ${colors.info[700]}`;
      }
      break;
    case "outlined":
      switch (props.color) {
        case "primary":
          return `1px solid ${colors.primary[400]}`;
        case "secondary":
          return `1px solid ${colors.secondary[800]}`;
        case "tertiary":
          return `1px solid ${colors.tertiary[900]}`;
        case "danger":
          return `1px solid ${colors.danger[700]}`;
        case "warning":
          return `1px solid ${colors.warning[700]}`;
        case "success":
          return `1px solid ${colors.success[800]}`;
        case "info":
          return `1px solid ${colors.info[700]}`;
      }
      break;
  }

  return;
};
const getHoverOutline = (props: TagStyleProps) => {
  switch (props.variant) {
    case "contained":
      switch (props.color) {
        case "primary":
          return `1px solid ${colors.primary[500]}`;
        case "secondary":
          return `1px solid ${colors.secondary[900]}`;
        case "tertiary":
          return `1px solid ${colors.tertiary[1000]}`;
        case "danger":
          return `1px solid ${colors.danger[800]}`;
        case "warning":
          return `1px solid ${colors.warning[800]}`;
        case "success":
          return `1px solid ${colors.success[900]}`;
        case "info":
          return `1px solid ${colors.info[800]}`;
      }
      break;
    case "outlined":
      switch (props.color) {
        case "primary":
          return `1px solid ${colors.primary[600]}`;
        case "secondary":
          return `1px solid ${colors.secondary[900]}`;
        case "tertiary":
          return `1px solid ${colors.tertiary[1000]}`;
        case "danger":
          return `1px solid ${colors.danger[800]}`;
        case "warning":
          return `1px solid ${colors.warning[800]}`;
        case "success":
          return `1px solid ${colors.success[900]}`;
        case "info":
          return `1px solid ${colors.info[800]}`;
      }
      break;
  }

  return;
};

const getPadding = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return "0.125rem 0.25rem";
    case "medium":
      return "0.25rem 0.5rem";
    case "large":
      return "0.5rem 1rem";
    default:
      return "0.25rem 0.5rem";
  }
};

const getSize = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return "1rem";
    case "medium":
      return "1.25rem";
    case "large":
      return "1.5rem";
  }
  return "1rem";
};

const useTagStyles = createUseStyles({
  "ste-tag": (props: TagStyleProps) => ({
    display: "inline-flex",
    alignItems: "center",
    width: "fit-content",
    justifyContent: "center",
    gap: "0.25rem",
    borderRadius: "1rem",
    backgroundColor: getBackgroundColor(props),
    padding: getPadding(props.size),
    color: getColor(props),
    outline: getOutline(props),
    cursor: props.disableClick ? "inherit" : "pointer",
    "&:hover": {
      backgroundColor: getHoverBackgroundColor(props),
      color: getHoverColor(props),
      outline: getHoverOutline(props),
    },
  }),
  "ste-tag-leading-icon": (props: TagStyleProps) => {
    return {
      width: getSize(props.size),
      height: getSize(props.size),
      "& svg": {
        width: "100%",
        height: "100%",
      },
    };
  },
  "ste-tag-trailing-icon": (props: TagStyleProps) => {
    return {
      width: getSize(props.size),
      height: getSize(props.size),
      "& svg": {
        width: "100%",
        height: "100%",
      },
    };
  },
});

export default useTagStyles;
