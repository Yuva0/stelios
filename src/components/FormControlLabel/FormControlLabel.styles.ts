import { createUseStyles } from "react-jss";
import { FormControlLabelStyleProps } from "./FormControlLabel.types";

const getFlexDirection = (
  labelPlacement?: "start" | "end" | "top" | "bottom"
) => {
  switch (labelPlacement) {
    case "start":
      return "row-reverse";
    case "end":
      return "row";
    case "top":
      return "column-reverse";
    case "bottom":
      return "column";
    default:
      return "row";
  }
};

const useFormControlLabelStyles = createUseStyles({
  "ste-form-control-label": (props: FormControlLabelStyleProps) => ({
    display: "inline-flex",
    flexDirection: getFlexDirection(props.labelPlacement),
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    gap: `${props.gap}px`,
    cursor: "pointer",
  }),
});

export default useFormControlLabelStyles;
