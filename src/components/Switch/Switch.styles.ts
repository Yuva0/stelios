import { createUseStyles } from "react-jss";
import colors from "../../tokens/colors.json";
import { SwitchStyleProps } from "./Switch.types";

const getSize = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return {
        height: "0.6rem",
        width: "1rem",
        contentSize: "0.4rem",
        top: "0.1rem",
        unselectedLeft: "0.1rem",
        selectedLeft: "0.5rem",
        padding: "0.2rem",
      };
    case "medium":
      return {
        height: "0.8rem",
        width: "1.4rem",
        contentSize: "0.6rem",
        top: "0.1rem",
        unselectedLeft: "0.1rem",
        selectedLeft: "0.7rem",
        padding: "0.3rem",
      };
    case "large":
      return {
        height: "1rem",
        width: "1.8rem",
        contentSize: "0.8rem",
        top: "0.1rem",
        unselectedLeft: "0.1rem",
        selectedLeft: "0.9rem",
        padding: "0.5rem",
      };
  }

  return {
    height: "1rem",
    width: "1.8rem",
    contentSize: "0.8rem",
    top: "0.1rem",
    unselectedLeft: "0.1rem",
    selectedLeft: "0.9rem",
    padding: "0.5rem",
  };
};

const useSwitchStyles = createUseStyles({
  "ste-switch": (props: SwitchStyleProps) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    cursor: "pointer",
    padding: getSize(props.size).padding,
    borderRadius: "1rem",
    "&:hover": {
      background: colors[props.color ?? "info"]["10"],
    },
    '& input[type="checkbox"]': {
      position: "absolute",
      opacity: 0,
      cursor: "pointer",
    },
    '& input[type="checkbox"] + span': {
      position: "relative",
      width: getSize(props.size).width,
      height: getSize(props.size).height,
      border: props.checked
        ? `1.5px solid ${colors.info["500"]}`
        : `1.5px solid ${colors.secondary["500"]}`,
      borderRadius: "1rem",
    },
  }),
  "ste-switch-content": (props: SwitchStyleProps) => ({
    top: "0.1rem",
    position: "absolute",
    width: getSize(props.size).contentSize,
    height: getSize(props.size).contentSize,
    borderRadius: "50%",
    transition: "all 0.2s",
    "&.ste-switch-content-unselected": {
      left: getSize(props.size).unselectedLeft,
      backgroundColor: colors.secondary["800"],
    },
    "&.ste-switch-content-selected": {
      left: getSize(props.size).selectedLeft,
      backgroundColor: colors.info["700"],
    },
  }),
});

export default useSwitchStyles;
