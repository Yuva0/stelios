import React from "react";
import {
  ToggleButtonProps,
  ToggleButtonStyleProps,
} from "./ToggleButton.types";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const getBgColor = (
  color: ToggleButtonStyleProps["$color"],
  colorGradient: ToggleButtonStyleProps["$colorGradient"],
  selected: ToggleButtonStyleProps["$selected"]
) => {
  if (selected) {
    return {
      default: `${colorGradient[color].accentScale[8]}`,
    };
  }
  return {
    default: `${colorGradient[color].accentScale[0]}`,
    hover: `${colorGradient[color].accentScale[1]}`,
    active: `${colorGradient[color].accentScale[2]}`,
  };
};
const getColor = (
  color: ToggleButtonStyleProps["$color"],
  colorGradient: ToggleButtonStyleProps["$colorGradient"],
  selected: ToggleButtonStyleProps["$selected"]
) => {
  if (selected) {
    return {
      default: `${colorGradient[color].accentContrast}`,
    };
  }
  return {
    default: `${colorGradient[color].accentScale[9]}`,
  };
};


const StyledToggleBtn = styled.button<ToggleButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
  color: ${(props) => props.$colorGradient[props.$color].accentScale[10]};
  background-color: ${(props) =>
    getBgColor(props.$color, props.$colorGradient, props.$selected).default};
  color: ${(props) =>
    getColor(props.$color, props.$colorGradient, props.$selected).default};

  &:hover {
    background-color: ${(props) =>
      getBgColor(props.$color, props.$colorGradient, props.$selected).hover};
  }

  &:active {
    background-color: ${(props) =>
      getBgColor(props.$color, props.$colorGradient, props.$selected).active};
  }
`;

const ToggleButton = ({
  children,
  value,
  selected = false,
  color = "primary",
  className,
  style,
}: ToggleButtonProps) => {
  const colorGradient = useTheme().colorGradient;
  return (
    <StyledToggleBtn
      $selected={selected}
      $color={color}
      $colorGradient={colorGradient}
      className={className}
      style={style}
    >
      {children}
    </StyledToggleBtn>
  );
};

export default ToggleButton;
