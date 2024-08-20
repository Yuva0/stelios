import React from "react";
import {
  ButtonInternalProps,
  ButtonProps,
  ButtonStyleProps,
} from "./Button.types";
import Text from "../Text/Text";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import styled from "styled-components";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  leadingIcon,
  trailingIcon,
  size = "medium",
  variant = "contained",
  color = "primary",
  disabled = false,
  children,
  fullWidth = false,

  // Events
  onClick,
  ...rest
}: ButtonProps & ButtonInternalProps,
ref) => {
  const theme = useTheme().theme;
  const colorPalette = theme.colorPalette;

  return (
    <StyledButton ref={ref} $size={size} $variant={variant} $color={color} $colorPalette={colorPalette} $disabled={disabled} $fullWidth={fullWidth}
      aria-disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {leadingIcon && <StyledButtonIcon>{leadingIcon}</StyledButtonIcon>}
      {typeof children === "string" ? (
        <Text noColor variant="span" size={size}>
          {children}
        </Text>
      ) : (
        children
      )}
      {trailingIcon && <StyledButtonIcon>{trailingIcon}</StyledButtonIcon>}
    </StyledButton>
  );
});

export default Button;


const getVariantProperties = (
  variant: ButtonStyleProps["$variant"],
  color: ButtonStyleProps["$color"],
  colorPalette: ButtonStyleProps["$colorPalette"]
) => {
  switch (variant) {
    case "contained":
      return {
        backgroundColor: {
          default: colorPalette[color].accentScale[8],
          hover: colorPalette[color].accentScale[9],
          active: colorPalette[color].accentScale[9],
        },
        color: {
          default: colorPalette[color].accentContrast,
          hover: colorPalette[color].accentContrast,
          active: colorPalette[color].accentContrast,
        },
        border: {
          default: `2px solid ${colorPalette[color].accentScale[8]}`,
          hover: `2px solid ${colorPalette[color].accentScale[9]}`,
          active: `2px solid ${colorPalette[color].accentScale[9]}`,
        },
        filter: "brightness(0.92) saturate(1.1)", // Active state filter
      };

    case "outlined":
      return {
        backgroundColor: {
          default: "transparent",
          hover: "transparent",
          active: "transparent",
        },
        color: {
          default: colorPalette[color].accentScale[10],
          hover: colorPalette[color].accentScale[10],
          active: colorPalette[color].accentScale[10],
        },
        border: {
          default: `2px solid ${colorPalette[color].accentScale[5]}`,
          hover: `2px solid ${colorPalette[color].accentScale[6]}`,
          active: `2px solid ${colorPalette[color].accentScale[7]}`,
        }
      };

    case "soft":
      return {
        backgroundColor: {
          default: colorPalette[color].accentScale[2],
          hover: colorPalette[color].accentScale[3],
          active: colorPalette[color].accentScale[3],
        },
        color: {
          default: colorPalette[color].accentScale[10],
          hover: colorPalette[color].accentScale[10],
          active: colorPalette[color].accentScale[10],
        },
        border: {
          default: "none",
          hover: "none",
          active: "none",
        },
        filter: "brightness(0.92) saturate(1.1)", // Active state filter
      };
  }
};
const getSizeProperties = (size: ButtonStyleProps["$size"]) => {
  switch (size) {
    case "small":
      return { padding: "0.25rem 0.5rem" };
    case "medium":
      return { padding: "0.5rem 1rem" };
    case "large":
      return { padding: "0.75rem 1.5rem" };
  }
};
const propertiesHandler = (
  variant: ButtonStyleProps["$variant"],
  color: ButtonStyleProps["$color"],
  colorPalette: ButtonStyleProps["$colorPalette"],
  size: ButtonStyleProps["$size"]
) => {
  return {
    ...getVariantProperties(variant, color, colorPalette),
    ...getSizeProperties(size),
  };
};

const StyledButton = styled.button<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.25rem;

  ${props => {
    const properties = propertiesHandler(props.$variant, props.$color, props.$colorPalette, props.$size);
    return `
      background-color: ${properties.backgroundColor.default};
      color: ${properties.color.default};
      border: ${properties.border.default};
      padding: ${properties.padding};
      &:hover {
        background-color: ${properties.backgroundColor.hover};
        color: ${properties.color.hover};
        border: ${properties.border.hover};
      }
      &:active {
        background-color: ${properties.backgroundColor.active};
        color: ${properties.color.active};
        border: ${properties.border.active};
        filter: ${properties.filter};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${props.$colorPalette[props.$color].accentScale[8]};
      }
      width: ${props.$fullWidth ? "100%" : "auto"};
      cursor: ${props.$disabled ? "not-allowed" : "pointer"};
    `;
  }}
`;
const StyledButtonIcon = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;