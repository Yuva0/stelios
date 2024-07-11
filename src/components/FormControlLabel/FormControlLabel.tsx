import React from "react";

import { FormControlLabelProps } from "./FormControlLabel.types";
import useFormControlLabelStyles from "./FormControlLabel.styles";
import Text from "../Text/Text";

const FormControlLabel: React.FC<FormControlLabelProps> = ({
  control,
  label,
  labelPlacement = "end",
  size = "medium",
  gap = 4,
  disabled,
  ...props
}) => {
  const _disabled = control.props.disabled || disabled;

  const classNames = useFormControlLabelStyles({
    labelPlacement,
    size,
    disabled: _disabled,
    gap,
  });

  // console.log(Array.isArray(control));

  return (
    <label className={classNames["ste-form-control-label"]}>
      {React.cloneElement(control, {
        ...props,
      })}
      <span className="ste-form-control-label">
        {typeof label === "string" ? (
          size === "small" ? (
            <Text variant="paragraph">{label}</Text>
          ) : (
            <Text variant="paragraph">{label}</Text>
          )
        ) : (
          label
        )}
      </span>
    </label>
  );
};

export default FormControlLabel;
