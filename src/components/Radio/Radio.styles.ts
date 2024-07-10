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

const useRadioStyles = createUseStyles({
  "ste-radio-content": (props: RadioStyleProps) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: "0.5rem",
    width: "fit-content",
    borderRadius: "50%",
    "&:hover": {
      background: colors[props.color ?? "info"]["10"],
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
      border: `1.5px solid ${colors.info[700]}`,
      transition: "all 0.2s",
      position: "relative",
    },
    '& input[type="radio"]:checked + span::before': {
      content: "''",
      width: `${(2 * getSize(props.size)) / 3}rem`,
      height: `${(2 * getSize(props.size)) / 3}rem`,
      borderRadius: "50%",
      background: colors.info[700],
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  }),
});

export default useRadioStyles;
