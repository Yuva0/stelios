import { createUseStyles } from "react-jss";
import colors from "../../tokens/colors.json";
import { SwitchStyleProps } from "./Switch.types";

const useSwitchStyles = createUseStyles({
  "ste-switch": (props: SwitchStyleProps) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    cursor: "pointer",
    padding: "0.5rem",
    borderRadius: "50%",
    "&:hover": {
      background: colors[props.color ?? "info"]["10"],
    },
    '& input[type="checkbox"]': {
      position: "absolute",
      opacity: 0,
      cursor: "pointer",
    },
  }),
});

export default useSwitchStyles;
