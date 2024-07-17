import { createUseStyles } from "react-jss";
import { NavigationBarGroupStyleProps } from "./NavigationBarGroup.types";
// import colorTokens from "../../../tokens/src/color.json";
import { ThemeProps } from "../../../tokens/theme/theme.types";

const useStyles = createUseStyles((theme: ThemeProps) => {
  return {
    "navigation-bar-group-container": (props: NavigationBarGroupStyleProps) => {
      return {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        userSelect: "none",
      };
    },
    "navigation-bar-group-header": (props: NavigationBarGroupStyleProps) => {
      return {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.3rem 0.5rem ",
        borderRadius: "0.5rem",
        fontWeight: "600",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: theme.navigationBar.groupHeader.hover.bgColor
        },
      };
    },
    "navigation-bar-group-leading-icon": (
      props: NavigationBarGroupStyleProps
    ) => {
      return {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        rotate: props.isIndividual ? "" : props.expand ? "90deg" : "",
        transition: props.isIndividual ? "" : "rotate 0.15s ease-in-out",
      };
    },
    "navigation-bar-group-item-container": (
      props: NavigationBarGroupStyleProps
    ) => {
      return {
        height: "auto",
        maxHeight: props.expand ? "100vh" : "0",
        overflow: "hidden",
        transition: "max-height 0.3s ease-in-out",
        gap:"0.25rem"
      };
    },
  };
});

export default useStyles;
