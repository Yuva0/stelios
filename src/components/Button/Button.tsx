import React, { useEffect, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import { ButtonInternalProps, ButtonProps, ButtonStyleProps } from "./Button.types";
import Text from "../Text/Text";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette, hasPropertyChain } from "../../helpers/helpers";
import colors from "../../tokens/colors.json";
import layout from "../../tokens/layout.json";

interface ButtonIconProps {
  $size: ButtonStyleProps["$size"];
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  leadingIcon,
  trailingIcon,
  size = "medium",
  variant = "contained",
  color = colors.default.primary.main,
  rounded = false,
  disabled = false,
  children,
  isFullWidth = false,
  onClick,
  ...rest
}: ButtonProps & ButtonInternalProps,
ref) => {
  const innerRef = useRef<HTMLButtonElement>(null);
  useImperativeHandle(ref, () => innerRef.current!, [innerRef]);
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme,color);

  const [borderRadius, setBorderRadius] = React.useState<string>(rounded ? (innerRef.current ? `${innerRef.current.offsetHeight/2}px` : "") : `${layout.rounded.default.rem}rem`);
  useEffect(() => {
    if(!innerRef || !innerRef.current) return;
    setBorderRadius(rounded ? `${innerRef.current.offsetHeight/2}px` : `${layout.rounded.default.rem}rem`);
  },[rounded, innerRef, innerRef.current?.offsetHeight]);

  return (
    <StyledButton ref={innerRef} $size={size} $variant={variant} 
      $color={color} $colorPalette={colorPalette} $disabled={disabled} 
      $rounded={rounded} $isFullWidth={isFullWidth} $borderRadius={borderRadius}
      aria-disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {leadingIcon && <StyledButtonIcon $size={size}>{leadingIcon}</StyledButtonIcon>}
      {typeof children === "string" ? (
        <Text noColor variant="span" size={size}>
          {children}
        </Text>
      ) : (
        children
      )}
      {trailingIcon && <StyledButtonIcon $size={size}>{trailingIcon}</StyledButtonIcon>}
    </StyledButton>
  );
});
export default Button;

const StyledButton = styled.button<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${props => {
    const properties = propsHandler(props.$variant, props.$color, props.$colorPalette, props.$size, props.$disabled);
    return `
      background-color: ${properties.backgroundColor.default};
      color: ${properties.color.default};
      padding: ${properties.padding};
      gap: ${properties.gap};
      width: ${props.$isFullWidth ? "100%" : "auto"};
      cursor: ${props.$disabled ? "not-allowed" : "pointer"};
      border-radius: ${props.$borderRadius};
      ${hasPropertyChain(properties, ['border']) ? `border: ${properties.border!.default};` : ""}
      ${hasPropertyChain(properties, ['boxShadow', 'default']) ? `box-shadow: ${properties.boxShadow!.default};` : ""}
      ${!props.disabled ? 
        `&:hover {
          background-color: ${properties.backgroundColor.hover};
          color: ${properties.color.hover};
          ${hasPropertyChain(properties, ["border", "hover"]) && `border: ${properties.border!.hover};`}
          ${hasPropertyChain(properties, ["boxShadow", "hover"]) && `box-shadow: ${properties.boxShadow!.hover};`}
        }` : 
        ""
      }
      ${!props.disabled ? 
        `&:active {
          background-color: ${properties.backgroundColor.active};
          color: ${properties.color.active};
          ${properties.border && `border: ${properties.border.active};`}
          ${properties.filter && properties.filter.active && `filter: ${properties.filter.active};`};
          ${hasPropertyChain(properties, ["boxShadow", "active"]) && `box-shadow: ${properties.boxShadow!.active};`}
        }` : 
        ""
      }
      ${!props.disabled ?
        `&:focus-visible {
          outline-offset: 2px;
          outline: 2px solid ${props.$colorPalette[props.$color].accentScale[8]};
        }`:
        ""
      }
    `;
  }}
`;
const StyledButtonIcon = styled.span<ButtonIconProps>`
  ${props => {
    const size = getIconSizeProps(props.$size);
    return `
      width: ${size.width};
      height: ${size.height};
    `
  }}
  svg {
    width: 100%;
    height: 100%;
  }
`;

const propsHandler = (
  variant: ButtonStyleProps["$variant"],
  color: ButtonStyleProps["$color"],
  colorPalette: ButtonStyleProps["$colorPalette"],
  size: ButtonStyleProps["$size"],
  disabled: ButtonStyleProps["$disabled"]
) => {
  return {
    ...getVariantProps(variant, color, colorPalette, disabled),
    ...getSizeProps(size),
  };
};
const getVariantProps = (
  variant: ButtonStyleProps["$variant"],
  color: ButtonStyleProps["$color"],
  colorPalette: ButtonStyleProps["$colorPalette"],
  disabled: ButtonStyleProps["$disabled"]
) => {
  switch (variant) {
    case "contained":
      if(disabled) return {
        backgroundColor: {
          default: colorPalette[color].grayScale[8]
        },
        color: {
          default: colorPalette[color].accentContrast
        },
        border: {
          default: `2px solid ${colorPalette[color].grayScale[8]}`
        }
      }
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
        filter: {
          active: "brightness(0.92) saturate(1.1)",
        }
      };
    case "outlined":
      if(disabled) return {
        backgroundColor: {
          default: "transparent"
        },
        color: {
          default: colorPalette[color].grayScale[10]
        },
        border: {
          default: `2px solid ${colorPalette[color].grayScale[5]}`
        }
      }
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
      if(disabled) return {
        backgroundColor: {
          default: colorPalette[color].grayScale[2]
        },
        color: {
          default: colorPalette[color].grayScale[10]
        },
        border: {
          default: `2px solid ${colorPalette[color].grayScale[2]}`
        }
      }
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
          default: `2px solid ${colorPalette[color].accentScale[2]}`,
          hover: `2px solid ${colorPalette[color].accentScale[3]}`,
          active: `2px solid ${colorPalette[color].accentScale[3]}`,
        },
        filter: {
          active: "brightness(0.92) saturate(1.1)",
        }
      };
    case "outlined-soft":
      if(disabled)
        return {
          backgroundColor: {
            default: colorPalette[color].grayScale[2]
          },
          color: {
            default: colorPalette[color].grayScale[10]
          },
          border: {
            default: `2px solid ${colorPalette[color].grayScale[5]}`
          }
        }
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
        },
      }
    case "neumorph":
      if(disabled)
        return {
          backgroundColor: {
            default: "transparent"
          },
          color: {
            default: colorPalette[color].grayScale[5]
          },
          border: {
            default: `2px solid transparent`
          },
          boxShadow: {
            default: `-6px -6px 14px rgba(255, 255, 255, .7),
              -6px -6px 10px rgba(255, 255, 255, .5),
              6px 6px 8px rgba(255, 255, 255, .075),
              6px 6px 10px rgba(0, 0, 0, .15)`,
          }
        }
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
          default: "2px solid transparent",
          hover: "2px solid transparent",
          active: "2px solid transparent",
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
        },
      }   
  }
};
const getSizeProps = (size: ButtonStyleProps["$size"]) => {
  switch (size) {
    case "small":
      return { padding: "0.25rem 0.5rem", gap:"0.5rem" };
    case "medium":
      return { padding: "0.5rem 1rem", gap:"0.75rem" };
    case "large":
      return { padding: "0.5rem 1rem", gap:"0.75rem" };
  }
};

const getIconSizeProps = (size: ButtonStyleProps["$size"]) => {
  switch (size) {
    case "small":
      return { width: "1.25rem", height: "1.25rem" };
    case "medium":
      return { width: "1.5rem", height: "1.5rem" };
    case "large":
      return { width: "1.75rem", height: "1.75rem" };
  }
}

