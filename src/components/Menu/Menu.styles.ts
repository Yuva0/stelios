import { createUseStyles } from "react-jss";
import { MenuStyleProps } from "./Menu.types";
import colors from "../../tokens/colors.json";

const useMenuStyles = createUseStyles({
  "ste-menu-container": (props: MenuStyleProps) => ({
    display: props.open ? "block" : "none",
    minWidth: props.minWidth,
    border: `1px solid ${colors.secondary["400"]}`,
    borderRadius: "0.5rem",
    padding: "0.5rem 0",
    backgroundColor: colors.white[0],
  }),
  "ste-menu": (props: MenuStyleProps) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxSizing: "border-box",
    width: "100%",
    listStyleType: "none",
    cursor: "pointer",
    padding: 0,
    margin: 0,
    userSelect: "none",
  }),
});

export default useMenuStyles;
