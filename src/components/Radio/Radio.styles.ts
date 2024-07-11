import { RadioStyleProps } from "./Radio.types";
import { createUseStyles } from "react-jss";
import colors from "../../tokens/colors.json";

const getSize = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return 0.875;
    case "medium":
      return 1;
    case "large":
      return 1.5;
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

const useRadioStyles = createUseStyles({
  "ste-radio-content": (props: RadioStyleProps) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    cursor: "pointer",
    padding: "0.5rem",
    borderRadius: "50%",
    "&:hover": {
      background: colors[props.color ?? "info"]["10"],
      // boxShadow: `0 0 0 8px ${colors[props.color ?? "info"]["10"]}`,
    },
    '& input[type="radio"]': {
      position: "absolute",
      opacity: 0,
    },
    '& input[type="radio"] + span': {
      width: `${getSize(props.size)}rem`,
      height: `${getSize(props.size)}rem`,
      borderRadius: "50%",
      border: `1.5px solid ${colors.secondary[800]}`,
      transition: "all 0.2s",
      position: "relative",
    },
    '& input[type="radio"]:checked + span': {
      width: `${getSize(props.size)}rem`,
      height: `${getSize(props.size)}rem`,
      borderRadius: "50%",
      border: `1.5px solid ${getColor(props.color)}`,
      transition: "all 0.2s",
      position: "relative",
    },
    '& input[type="radio"]:checked + span::before': {
      content: "''",
      width: `${(2 * getSize(props.size)) / 3}rem`,
      height: `${(2 * getSize(props.size)) / 3}rem`,
      borderRadius: "50%",
      background: getColor(props.color),
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    '& input[type="radio"]:focus + span': {
      boxShadow: `0px 0px 4px 2px ${getColor(props.color)}`,
    },
  }),
  "ste-radio-content-focus-visible": {
    outline: "1px solid black",
  },
});

export default useRadioStyles;
