import { createUseStyles } from "react-jss";
import { MenuItemStyleProps } from "./MenuItem.types";
import colors from "../../tokens/colors.json";

const useMenuItemStyles = createUseStyles({
  "ste-menu-item": (props: MenuItemStyleProps) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0.5rem",
    cursor: "pointer",
    "&:hover": {
      background: colors.secondary["100"],
    },
    "&:focus": {
      background: colors.secondary["200"],
    },
  }),
});

export default useMenuItemStyles;
