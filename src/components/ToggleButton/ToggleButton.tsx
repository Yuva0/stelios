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
const getPadding = (size: ToggleButtonStyleProps["$size"]) => {
  switch (size) {
    case "small":
      return "4px 8px";
    case "medium":
      return "8px 16px";
    case "large":
      return "12px 18px";
    default:
      return "8px 16px";
  }
};
const getIconSize = (size: ToggleButtonStyleProps["$size"]) => {
  switch (size) {
    case "small":
      return "16px";
    case "medium":
      return "20px";
    case "large":
      return "24px";
    default:
      return "20px";
  }
};
const getGap = (size: ToggleButtonStyleProps["$size"]) => {
  switch (size) {
    case "small":
      return "0.25rem";
    case "medium":
      return "0.5rem";
    case "large":
      return "0.5rem";
    default:
      return "0.5rem";
  }
};

const StyledToggleBtn = styled.button<ToggleButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => getPadding(props.$size)};
  font-size: 1rem;
  width: 100%;
  gap: ${(props) => getGap(props.$size)};
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

  & svg {
    width: ${(props) => getIconSize(props.$size)};
    height: ${(props) => getIconSize(props.$size)};
  }
`;

const ToggleButton = ({
  index,
  children,
  value,
  defaultSelected,
  selected,
  color = "primary",
  size = "medium",
  className,
  style,
  // Events
  onClick,
}: ToggleButtonProps) => {
  const themeColor = useTheme().theme.themeColor;
  const isSelected = selected ?? defaultSelected ?? false;

  const _onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e, value, index);
  };

  return (
    <StyledToggleBtn
      $size={size}
      $selected={isSelected}
      $color={color}
      $colorGradient={themeColor}
      className={className}
      style={style}
      onClick={_onClick}
    >
      {children}
    </StyledToggleBtn>
  );
};

export default ToggleButton;
