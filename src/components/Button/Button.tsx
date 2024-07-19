import React from "react";
import {
  ButtonInternalProps,
  ButtonProps,
  ButtonStyleProps,
} from "./Button.types";
import Text from "../Text/Text";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import styled from "styled-components";
import { DefaultTheme } from "../ThemeProvider/ThemeProvider.types";

const getPadding = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return "0.25rem 0.5rem";
    case "medium":
      return "0.5rem 1rem";
    case "large":
      return "0.75rem 1.5rem";
    default:
      return "0.75rem 1.5rem";
  }
};

const getBackgroundColor = (
  variant?: ButtonProps["variant"],
  color?: ButtonProps["color"],
  colorGradient?: DefaultTheme["colorGradient"]
) => {
  switch (variant) {
    case "contained":
      return {
        default: colorGradient[color ?? "primary"].accentScale[8],
        hover: colorGradient[color ?? "primary"].accentScale[9],
        active: colorGradient[color ?? "primary"].accentScale[9],
      };
    case "outlined":
      return {
        default: colorGradient[color ?? "primary"].accentScale[2],
        hover: colorGradient[color ?? "primary"].accentScale[3],
        active: colorGradient[color ?? "primary"].accentScale[4],
      };
    case "text":
      return {
        default: colorGradient[color ?? "primary"].accentScale[0],
        hover: colorGradient[color ?? "primary"].accentScale[1],
        active: colorGradient[color ?? "primary"].accentScale[2],
      };
    default:
      return {
        default: colorGradient[color ?? "primary"].accentScale[9],
        hover: colorGradient[color ?? "primary"].accentScale[10],
        active: colorGradient[color ?? "primary"].accentScale[11],
      };
  }
};

const getColor = (
  variant?: ButtonProps["variant"],
  color?: ButtonProps["color"],
  colorGradient?: DefaultTheme["colorGradient"]
) => {
  switch (variant) {
    case "contained":
      return {
        default: colorGradient[color ?? "primary"].accentContrast,
        hover: colorGradient[color ?? "primary"].accentContrast,
        active: colorGradient[color ?? "primary"].accentContrast,
      };
    case "outlined":
      return {
        default: colorGradient[color ?? "primary"].accentScale[10],
        hover: colorGradient[color ?? "primary"].accentScale[10],
        active: colorGradient[color ?? "primary"].accentScale[10],
      };
    case "text":
      return {
        default: colorGradient[color ?? "primary"].accentScale[10],
        hover: colorGradient[color ?? "primary"].accentScale[10],
        active: colorGradient[color ?? "primary"].accentScale[10],
      };
    default:
      return {
        default: colorGradient[color ?? "primary"].accentContrast,
        hover: colorGradient[color ?? "primary"].accentContrast,
        active: colorGradient[color ?? "primary"].accentContrast,
      };
  }
};

const getOutline = (
  variant?: ButtonProps["variant"],
  color?: ButtonProps["color"],
  colorGradient?: DefaultTheme["colorGradient"]
) => {
  if (variant === "outlined") {
    return {
      default: `1px solid ${colorGradient[color ?? "primary"].accentScale[5]}`,
      hover: `1px solid ${colorGradient[color ?? "primary"].accentScale[6]}`,
      active: `1px solid ${colorGradient[color ?? "primary"].accentScale[7]}`,
    };
  }
  return { default: "none", hover: "none", active: "none" };
};

const StyledButton = styled.button<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  background-color: ${(props) =>
    getBackgroundColor(props.$variant, props.$color, props.$colorGradient)
      .default};
  color: ${(props) =>
    getColor(props.$variant, props.$color, props.$colorGradient).default};
  padding: ${(props) => getPadding(props.$size)};
  outline: ${(props) =>
    getOutline(props.$variant, props.$color, props.$colorGradient).default};
  outline-offset: -1px;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  border-radius: 0.25rem;
  box-shadow: ${(props) =>
    props.$variant === "text" ? "none" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)"};
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

const StyledButtonIcon = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ButtonInternal = ({
  leadingIcon,
  trailingIcon,
  size = "medium",
  variant = "contained",
  color = "primary",
  disabled,
  children,
  fullWidth,

  // Events
  onClick,
  ...rest
}: ButtonProps & ButtonInternalProps) => {
  const theme = useTheme();
  const colorGradient = theme.colorGradient;

  return (
    <StyledButton
      $size={size}
      $variant={variant}
      $color={color}
      $colorGradient={colorGradient}
      $disabled={disabled}
      $fullWidth={fullWidth}
      aria-disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {leadingIcon && <StyledButtonIcon>{leadingIcon}</StyledButtonIcon>}
      {typeof children === "string" ? (
        <Text variant="span" size={size}>
          {children}
        </Text>
      ) : (
        children
      )}
      {trailingIcon && <StyledButtonIcon>{trailingIcon}</StyledButtonIcon>}
    </StyledButton>
  );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <ButtonInternal ref={ref} {...props} />
);

export default Button;
