import { createUseStyles } from "react-jss";
import { CheckboxStyleProps } from "./Checkbox.types";
import colors from "../../tokens/colors.json";

const getSize = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return 0.875;
    case "medium":
      return 1;
    case "large":
      return 1.25;
  }
  return 1;
};

const getColor = (
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "success"
    | "info"
) => {
  switch (color) {
    case "primary":
      return colors.primary[800];
    case "secondary":
      return colors.secondary[800];
    case "tertiary":
      return colors.tertiary[800];
    case "danger":
      return colors.danger[700];
    case "warning":
      return colors.warning[800];
    case "success":
      return colors.success[800];
    case "info":
      return colors.info[700];
  }
  return colors.info[700];
};

const useCheckboxStyles = createUseStyles({
  "ste-checkbox": (props: CheckboxStyleProps) => ({
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
    '& input[type="checkbox"] + span': {
      width: `${getSize(props.size)}rem`,
      height: `${getSize(props.size)}rem`,
      border: `1.5px solid ${getColor(props.color)}`,
      borderRadius: "0.25rem",
      position: "relative",

      "& svg": {
        width: "100%",
        height: "100%",
        backgroundColor: getColor(props.color),
        color: colors.white,
      },
    },
    '& input[type="checkbox"]:focus + span': {
      outline: `1px solid ${getColor(props.color)}`,
      outlineOffset: "1px",
    },
  }),
});

export default useCheckboxStyles;
