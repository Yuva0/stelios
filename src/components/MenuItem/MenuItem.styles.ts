import { createUseStyles } from "react-jss";
import { MenuItemStyleProps } from "./MenuItem.types";
import colors from "../../tokens/colors.json";

const useMenuItemStyles = createUseStyles({
  "ste-menu-item": (props: MenuItemStyleProps) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0.5rem 0.75rem 0.5rem 0.5rem",
    gap: "0.25rem",
    cursor: "pointer",
    "&:hover": {
      background: colors.secondary["100"],
    },
    "&:focus": {
      background: colors.secondary["200"],
    },
  }),
  "ste-menu-item-content": {
    width: "100%",
  },
  "ste-menu-item-icon": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "1.25rem",
    height: "1.25rem",
    "& svg": {
      width: "1.25rem",
      height: "1.25rem",
    },
  },
});

export default useMenuItemStyles;
