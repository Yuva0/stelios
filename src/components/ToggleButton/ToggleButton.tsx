import React from "react";
import {
  ToggleButtonProps,
  ToggleButtonStyleProps,
} from "./ToggleButton.types";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json"

const ToggleButton = ({
  index,
  children,
  value,
  defaultSelected,
  selected,
  color = colorTokens.default.primary.main,
  size = "medium",
  className,
  style,
  // Events
  onClick,
  "data-testid": dataTestId,
}: ToggleButtonProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme,color);
  const isSelected = selected ?? defaultSelected ?? false;

  const _onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e, value, index);
  };

  return (
    <StyledToggleBtn
      $size={size}
      $selected={isSelected}
      $color={color}
      $colorPalette={colorPalette}
      className={className}
      style={style}
      onClick={_onClick}
      data-testid={dataTestId}
    >
      {children}
    </StyledToggleBtn>
  );
};
ToggleButton.displayName = "ToggleButton";
export default ToggleButton;

const getBgColor = (
  color: ToggleButtonStyleProps["$color"],
  colorPalette: ToggleButtonStyleProps["$colorPalette"],
  selected: ToggleButtonStyleProps["$selected"]
) => {
  if (selected) {
    return {
      default: `${colorPalette[color].accentScale[8]}`,
    };
  }
  return {
    default: `${colorPalette[color].accentScale[0]}`,
    hover: `${colorPalette[color].accentScale[1]}`,
    active: `${colorPalette[color].accentScale[2]}`,
  };
};
const getColor = (
  color: ToggleButtonStyleProps["$color"],
  colorPalette: ToggleButtonStyleProps["$colorPalette"],
  selected: ToggleButtonStyleProps["$selected"]
) => {
  if (selected) {
    return {
      default: `${colorPalette[color].accentContrast}`,
    };
  }
  return {
    default: `${colorPalette[color].accentScale[10]}`,
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
const getOutlineFocus = (
  color: ToggleButtonStyleProps["$color"],
  colorPalette: ToggleButtonStyleProps["$colorPalette"],
) => {
  return `2px solid ${colorPalette[color].accentScale[7]}`;
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
  color: ${(props) =>
    getColor(props.$color, props.$colorPalette, props.$selected).default};
  background-color: ${(props) =>
    getBgColor(props.$color, props.$colorPalette, props.$selected).default};
  color: ${(props) =>
    getColor(props.$color, props.$colorPalette, props.$selected).default};

  &:focus-visible {
    outline-offset: -2px;
    outline: ${(props) =>
      getOutlineFocus(props.$color, props.$colorPalette)};
  }

  &:hover {
    background-color: ${(props) =>
      getBgColor(props.$color, props.$colorPalette, props.$selected).hover};
  }

  &:active {
    background-color: ${(props) =>
      getBgColor(props.$color, props.$colorPalette, props.$selected).active};
  }

  & svg {
    width: ${(props) => getIconSize(props.$size)};
    height: ${(props) => getIconSize(props.$size)};
  }
`;