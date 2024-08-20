import React, { forwardRef } from "react";
import { IconButtonProps, IconButtonStyleProps } from "./IconButton.types";
import styled from "styled-components";
import Text from "../Text/Text";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { hasPropertyChain } from "../../helpers/helpers";
import { get } from "http";

const IconButton = forwardRef(
  (
    {
      icon,
      size = "medium",
      variant = "contained",
      color = "primary",
      disabled = false,
      className,
      style,
      onClick,
      ...rest
    }: IconButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const theme = useTheme().theme;
    if(!theme) return null;
    const colorPalette = theme.colorPalette;

    return (
      <StyledIconBtn ref={ref} $variant={variant} $size={size} $color={color} $disabled={disabled} $colorPalette={colorPalette}
        aria-disabled={disabled}
        style={style}
        className={className}
        onClick={onClick}
        {...rest}
      >
        {typeof icon === "string" ? (
          <Text variant="span" size={size}>
            {icon}
          </Text>
        ) : (
          <IconButtonIcon icon={icon} size={size}/>
        )}
      </StyledIconBtn>
    );
  }
);

export default IconButton;
const IconButtonIcon = ({icon,size}:{icon: React.ReactNode, size: "small" | "medium" | "large"}) => {
  return (
    <StyledIconButtonIcon $size={size}>{icon}</StyledIconButtonIcon>
  );
};

const StyledIconBtn = styled.button<IconButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  ${props => {
    const properties = propsHandler(props.$variant, props.$color, props.$colorPalette, props.$size);
    return `
      background-color: ${properties.backgroundColor.default};
      color: ${properties.color.default};
      padding: ${properties.padding};
      border: ${properties.border.default};
      cursor: ${props.$disabled ? "not-allowed" : "pointer"};
      // ${hasPropertyChain(properties, ["boxShadow", "default"]) && `box-shadow: ${properties.boxShadow!.default};`}

      &:hover {
        background-color: ${properties.backgroundColor.hover};
        color: ${properties.color.hover};
        border: ${properties.border.hover};
        ${hasPropertyChain(properties, ["boxShadow", "hover"]) && `box-shadow: ${properties.boxShadow!.hover};`}
      }
      &:active {
        background-color: ${properties.backgroundColor.active};
        color: ${properties.color.active};
        border: ${properties.border.active};
        ${hasPropertyChain(properties, ["boxShadow", "active"]) && `box-shadow: ${properties.boxShadow!.active};`}
        ${hasPropertyChain(properties, ["filter", "active"]) && `filter: ${properties.filter!.active};`
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${props.$colorPalette[props.$color].accentScale[8]};
      }
    `;
  }}
  `;
const StyledIconButtonIcon = styled.div<{$size: "small" | "medium" | "large"}>`
  width: ${(props) => getSizeProps(props.$size).width};
  height: ${(props) => getSizeProps(props.$size).height};
  & svg {
    width: 100%;
    height: 100%;
  }
`;

const propsHandler = (
  variant: IconButtonStyleProps["$variant"],
  color: IconButtonStyleProps["$color"],
  colorPalette: IconButtonStyleProps["$colorPalette"],
  size: IconButtonStyleProps["$size"]
) => {
  return {
    ...getVariantProps(variant, color, colorPalette),
    ...getSizeProps(size),
  }
};
const getVariantProps = (
  variant: IconButtonStyleProps["$variant"],
  color: IconButtonStyleProps["$color"],
  colorPalette: IconButtonStyleProps["$colorPalette"]
) => {
  switch(variant){
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
      }
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
          default: `1px solid ${colorPalette[color].accentScale[5]}`,
          hover: `1px solid ${colorPalette[color].accentScale[6]}`,
          active: `1px solid ${colorPalette[color].accentScale[7]}`,
        },
      }
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
        filter: {
          active: "brightness(0.92) saturate(1.1)",
        }
      }
    case "outlined-soft":
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
          default: `2px solid ${colorPalette[color].accentScale[5]}`,
          hover: `2px solid ${colorPalette[color].accentScale[6]}`,
          active: `2px solid ${colorPalette[color].accentScale[7]}`,
        }
      }
    case "neumorph":
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
          default: "none",
          hover: "none",
          active: "none",
        },
        boxShadow: {
          default: `-6px -6px 14px rgba(255, 255, 255, .7),
              -6px -6px 10px rgba(255, 255, 255, .5),
              6px 6px 8px rgba(255, 255, 255, .075),
              6px 6px 10px rgba(0, 0, 0, .15)`,
          hover: `-2px -2px 6px rgba(255, 255, 255, .6),
              -2px -2px 4px rgba(255, 255, 255, .4),
              2px 2px 2px rgba(255, 255, 255, .05),
              2px 2px 4px rgba(0, 0, 0, .1)`,
          active: `inset -2px -2px 6px rgba(255, 255, 255, .7),
              inset -2px -2px 4px rgba(255, 255, 255, .5),
              inset 2px 2px 2px rgba(255, 255, 255, .075),
              inset 2px 2px 4px rgba(0, 0, 0, .15)`
        }
      }
  }
}
const getSizeProps = (size: IconButtonStyleProps["$size"]) => {
  switch(size){
    case "small":
      return {
        padding: "0.5rem 0.5rem",
        width: "1.25rem",
        height: "1.25rem"
      }
    case "medium":
      return {
        padding: "0.75rem 0.75rem",
        width: "1.5rem",
        height: "1.5rem"
      }
    case "large":
      return {
        padding: "1rem 1rem",
        width: "2rem",
        height: "2rem"
      }
  }
};