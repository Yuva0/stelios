import { createUseStyles } from "react-jss";
import { MenuStyleProps } from "./Menu.types";

const useMenuStyles = createUseStyles({
  "ste-menu-container": (props: MenuStyleProps) => ({
    display: props.open ? "block" : "none",
    minWidth: props.minWidth,
    border: "1px solid #ccc",
    borderRadius: "0.5rem",
    padding: "0.5rem 0",
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
  }),
});

export default useMenuStyles;
