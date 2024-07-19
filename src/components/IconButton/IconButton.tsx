import React, { forwardRef } from "react";
import { IconButtonProps, IconButtonStyleProps } from "./IconButton.types";
import styled from "styled-components";
import Text from "../Text/Text";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const getBackgroundColor = (
  variant: IconButtonStyleProps["$variant"],
  color: IconButtonStyleProps["$color"],
  colorGradient: IconButtonStyleProps["$colorGradient"]
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
        default: colorGradient[color].accentScale[2],
        hover: colorGradient[color].accentScale[3],
        active: colorGradient[color].accentScale[4],
      };
    case "text":
      return {
        default: colorGradient[color].accentScale[0],
        hover: colorGradient[color].accentScale[1],
        active: colorGradient[color].accentScale[2],
      };
    default:
      return {
        default: colorGradient[color].accentScale[9],
        hover: colorGradient[color].accentScale[10],
        active: colorGradient[color].accentScale[11],
      };
  }
};

const getColor = (
  variant: IconButtonStyleProps["$variant"],
  color: IconButtonStyleProps["$color"],
  colorGradient: IconButtonStyleProps["$colorGradient"]
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
        default: colorGradient[color].accentScale[10],
        hover: colorGradient[color].accentScale[10],
        active: colorGradient[color].accentScale[10],
      };
    case "text":
      return {
        default: colorGradient[color].accentScale[10],
        hover: colorGradient[color].accentScale[10],
        active: colorGradient[color].accentScale[10],
      };
    default:
      return {
        default: colorGradient[color].accentContrast,
        hover: colorGradient[color].accentContrast,
        active: colorGradient[color].accentContrast,
      };
  }
};

const getPadding = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return "0.5rem 0.5rem";
    case "medium":
      return "0.5rem 0.5rem";
    case "large":
      return "1rem 1rem";
  }
};

const getOutline = (
  variant: IconButtonStyleProps["$variant"],
  color: IconButtonStyleProps["$color"],
  colorGradient: IconButtonStyleProps["$colorGradient"]
) => {
  if (variant === "outlined") {
    return {
      default: `1px solid ${colorGradient[color].accentScale[5]}`,
      hover: `1px solid ${colorGradient[color].accentScale[6]}`,
      active: `1px solid ${colorGradient[color].accentScale[7]}`,
    };
  }
  return { default: "none", hover: "none", active: "none" };
};

const getIconSize = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return "1.25rem";
    case "medium":
      return "1.25rem";
    case "large":
      return "1.5rem";
  }
};

const StyledIconBtn = styled.button<IconButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    getBackgroundColor(props.$variant, props.$color, props.$colorGradient)
      .default};
  color: ${(props) =>
    getColor(props.$variant, props.$color, props.$colorGradient).default};
  outline: ${(props) =>
    getOutline(props.$variant, props.$color, props.$colorGradient)};
  border: 0;
  border-radius: 50%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  padding: ${(props) => getPadding(props.$size ?? "medium")};
  svg {
    width: ${(props) => getIconSize(props.$size ?? "medium")};
    height: ${(props) => getIconSize(props.$size ?? "medium")};
  }
  &:hover {
    background-color: ${(props) =>
      getBackgroundColor(props.$variant, props.$color, props.$colorGradient)
        .hover};
    color: ${(props) =>
      getColor(props.$variant, props.$color, props.$colorGradient).hover};
    outline: ${(props) =>
      getOutline(props.$variant, props.$color, props.$colorGradient).hover};
    box-shadow: ${(props) =>
      props.$variant === "text" ? "none" : "0 2px 4px 0 rgba(0, 0, 0, 0.1)"};
  }
  &:active {
    background-color: ${(props) =>
      getBackgroundColor(props.$variant, props.$color, props.$colorGradient)
        .active};
    color: ${(props) =>
      getColor(props.$variant, props.$color, props.$colorGradient).active};
    outline: ${(props) =>
      getOutline(props.$variant, props.$color, props.$colorGradient).active};
    filter: ${(props) =>
      props.$variant === "contained"
        ? "brightness(0.92) saturate(1.1)"
        : "none"};
    box-shadow: ${(props) =>
      props.$variant === "text" ? "none" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)"};
  }
`;

const IconButton = forwardRef(
  (
    {
      icon,
      onClick,
      size = "medium",
      variant = "contained",
      color = "primary",
      disabled = false,
      className,
    }: IconButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const colorGradient = useTheme().colorGradient;

    return (
      <StyledIconBtn
        ref={ref}
        $variant={variant}
        $size={size}
        $color={color}
        $disabled={disabled}
        aria-disabled={disabled}
        $colorGradient={colorGradient}
        onClick={onClick}
        className={className}
      >
        {typeof icon === "string" ? (
          <Text variant="span" size={size}>
            {icon}
          </Text>
        ) : (
          icon
        )}
      </StyledIconBtn>
    );
  }
);

export default IconButton;
