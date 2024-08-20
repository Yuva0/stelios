import React from "react";
import { TagProps, TagStyleProps } from "./Tag.types";
import Text from "../Text/Text";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const getBackgroundColor = (
  variant: TagStyleProps["$variant"],
  color: TagStyleProps["$color"],
  colorGradient: TagStyleProps["$colorGradient"]
) => {
  switch (variant) {
    case "contained":
      return {
        default: colorGradient[color].accentScale[8],
        hover: colorGradient[color].accentScale[9],
        active: colorGradient[color].accentScale[9],
      };
    case "outlined":
      return {
        default: colorGradient[color].accentScale[0],
        hover: colorGradient[color].accentScale[1],
        active: colorGradient[color].accentScale[1],
      };
  }
};
const getColor = (
  variant: TagStyleProps["$variant"],
  color: TagStyleProps["$color"],
  colorGradient: TagStyleProps["$colorGradient"]
) => {
  switch (variant) {
    case "contained":
      return {
        default: colorGradient[color].accentContrast,
        hover: colorGradient[color].accentContrast,
        active: colorGradient[color].accentContrast,
      };
    case "outlined":
      return {
        default: colorGradient[color].accentScale[1],
        hover: colorGradient[color].accentScale[1],
        active: colorGradient[color].accentScale[1],
      };
  }
};

const getPadding = (size: TagStyleProps["$size"]) => {
  switch (size) {
    case "small":
      return "0.125rem 0.25rem";
    case "medium":
      return "0.25rem 0.5rem";
    case "large":
      return "0.5rem 1rem";
  }
};

const getIconSize = (size: TagStyleProps["$size"]) => {
  switch (size) {
    case "small":
      return "1rem";
    case "medium":
      return "1.25rem";
    case "large":
      return "1.5rem";
  }
  return "1rem";
};

const StyledTag = styled.div<TagStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: fit-content;
  border-radius: 1rem;
  cursor: ${(props) => (props.$disableClick ? "default" : "pointer")};
  background-color: ${(props) =>
    getBackgroundColor(props.$variant, props.$color, props.$colorGradient)
      .default};
  padding: ${(props) => getPadding(props.$size)};
  color: ${(props) =>
    getColor(props.$variant, props.$color, props.$colorGradient).default};
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${(props) =>
      getBackgroundColor(props.$variant, props.$color, props.$colorGradient)
        .hover};
  }
`;

const StyledTagIcon = styled.span<TagStyleProps>`
  width: ${(props) => getIconSize(props.$size)};
  height: ${(props) => getIconSize(props.$size)};
  & svg {
    width: 100%;
    height: 100%;
  }
`;

const Tag = ({
  size = "medium",
  color = "primary",
  variant = "contained",
  children,
  leadingIcon,
  trailingIcon,
  className,
  disableClick = false,
  style,
  // Events
  onClick,
}: TagProps) => {
  const theme = useTheme().theme;
  if(!theme) return;
  const colorPalette = theme.colorPalette;

  return (
    <StyledTag
      $size={size}
      $variant={variant}
      $color={color}
      $disableClick={disableClick}
      $colorGradient={colorPalette}
      className={className}
      onClick={onClick}
    >
      {leadingIcon && (
        <StyledTagIcon
          $variant={variant}
          $color={color}
          $size={size}
          $colorGradient={colorPalette}
        >
          {leadingIcon}
        </StyledTagIcon>
      )}
      {typeof children === "string" ? (
        <Text noColor variant="span" size={size}>
          {children}
        </Text>
      ) : (
        children
      )}
      {trailingIcon && (
        <StyledTagIcon
          $variant={variant}
          $color={color}
          $size={size}
          $colorGradient={colorPalette}
        >
          {trailingIcon}
        </StyledTagIcon>
      )}
    </StyledTag>
  );
};

export default Tag;
