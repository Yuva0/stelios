import React from "react";

import {
  FormControlLabelProps,
  FormControlLabelStyleProps,
} from "./FormControlLabel.types";
import Text from "../Text/Text";
import styled from "styled-components";

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

const StyledFormControl = styled.label<FormControlLabelStyleProps>`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  gap: ${(props) => props.$gap}px;
  cursor: pointer;
  user-select: none;
  flex-direction: ${(props) => getFlexDirection(props.$labelPlacement)};
`;

const FormControlLabel: React.FC<FormControlLabelProps> = ({
  control,
  label,
  labelPlacement = "end",
  size = "medium",
  gap = 4,
  disabled = false,
  color,
  "data-testid": dataTestId,
  ...props
}) => {
  const _disabled = control.props.disabled || disabled;

  return (
    <StyledFormControl
      $gap={gap}
      $labelPlacement={labelPlacement}
      $disabled={_disabled}
      $size={size}
      data-testid={dataTestId}
    >
      {React.cloneElement(control, {
        ...(!control.props.size && size && { size }),
        ...(!control.props.size && color && { color }),
        ...props,
      })}
      <span>
        {typeof label === "string" ? (
          <Text color={color} variant="paragraph" size={size}>
            {label}
          </Text>
        ) : (
          label
        )}
      </span>
    </StyledFormControl>
  );
};

export default FormControlLabel;
