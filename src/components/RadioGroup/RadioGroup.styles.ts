import { createUseStyles } from "react-jss";
import { RadioGroupStyleProps } from "./RadioGroup.types";

const useRadioGroupStyles = createUseStyles({
  "ste-radio-group": (props: RadioGroupStyleProps) => ({
    display: "flex",
    flexDirection: props.orientation === "vertical" ? "column" : "row",
    gap: "0.5rem",
  }),
});

export default useRadioGroupStyles;
