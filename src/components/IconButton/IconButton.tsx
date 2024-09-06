import React, { forwardRef } from "react";
import { IconButtonProps, IconButtonStyleProps } from "./IconButton.types";
import styled from "styled-components";
import Text from "../Text/Text";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette, hasPropertyChain } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const IconButton = forwardRef(
  (
    {
      icon,
      size = "medium",
      variant = "contained",
      color = colorTokens.default.primary.main,
      disabled = false,
      className,
      style,
      onClick,
      "data-testid": dataTestId,
      ...rest
    }: IconButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const theme = useTheme().theme;
    const colorPalette = getColorPalette(theme, color);

    return (
      <StyledIconBtn
        ref={ref}
        $variant={variant}
        $size={size}
        $color={color}
        $disabled={disabled}
        $colorPalette={colorPalette}
        aria-disabled={disabled}
        style={style}
        className={className}
        onClick={onClick}
        data-testid={dataTestId}
        {...rest}
      >
        {typeof icon === "string" ? (
          <Text variant="span" size={size}>
            {icon}
          </Text>
        ) : (
          <IconButtonIcon icon={icon} size={size} />
        )}
      </StyledIconBtn>
    );
  }
);

export default IconButton;
const IconButtonIcon = ({
  icon,
  size,
}: {
  icon: React.ReactNode;
  size: "small" | "medium" | "large";
}) => {
  return <StyledIconButtonIcon $size={size}>{icon}</StyledIconButtonIcon>;
};

const StyledIconBtn = styled.button<IconButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  ${(props) => {
    const properties = propsHandler(
      props.$variant,
      props.$color,
      props.$colorPalette,
      props.$size,
      props.$disabled
    );
    return `
      background-color: ${properties.backgroundColor.default};
      color: ${properties.color.default};
      padding: ${properties.padding};
      border: ${properties.border.default};
      cursor: ${props.$disabled ? "not-allowed" : "pointer"};
      ${hasPropertyChain(properties, ["boxShadow", "default"]) ? `box-shadow: ${properties.boxShadow!.default};` : ""}

      &:hover {
        background-color: ${properties.backgroundColor.hover};
        color: ${properties.color.hover};
        border: ${properties.border.hover};
        ${hasPropertyChain(properties, ["boxShadow", "hover"]) ? `box-shadow: ${properties.boxShadow!.hover};` : ""}
      }
      &:active {
        background-color: ${properties.backgroundColor.active};
        color: ${properties.color.active};
        border: ${properties.border.active};
        ${hasPropertyChain(properties, ["boxShadow", "active"]) ? `box-shadow: ${properties.boxShadow!.active};` : ""}
        ${
          hasPropertyChain(properties, ["filter", "active"])
            ? `filter: ${properties.filter!.active};`
            : ""
        }
      };
      ${`&:focus-visible {
          outline-offset: 2px;
          outline: 2px solid ${props.$colorPalette[props.$color].accentScale[8]};
        }`}
    `;
  }}
`;
const StyledIconButtonIcon = styled.div<{
  $size: "small" | "medium" | "large";
}>`
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
  size: IconButtonStyleProps["$size"],
  disabled: IconButtonStyleProps["$disabled"]
) => {
  return {
    ...getVariantProps(variant, color, colorPalette, disabled),
    ...getSizeProps(size),
  };
};
const getVariantProps = (
  variant: IconButtonStyleProps["$variant"],
  color: IconButtonStyleProps["$color"],
  colorPalette: IconButtonStyleProps["$colorPalette"],
  disabled: IconButtonStyleProps["$disabled"]
) => {
  switch (variant) {
    case "contained":
      if (disabled)
        return {
          backgroundColor: {
            default: colorPalette[color].grayScale[8],
          },
          color: {
            default: colorPalette[color].accentContrast,
          },
          border: {
            default: `2px solid ${colorPalette[color].grayScale[8]}`,
          },
        };
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
      };
    case "outlined":
      if (disabled)
        return {
          backgroundColor: {
            default: "transparent",
          },
          color: {
            default: colorPalette[color].grayScale[10],
          },
          border: {
            default: `2px solid ${colorPalette[color].grayScale[5]}`,
          },
        };
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
        },
      };
    case "soft":
      if (disabled)
        return {
          backgroundColor: {
            default: colorPalette[color].grayScale[2],
          },
          color: {
            default: colorPalette[color].grayScale[10],
          },
          border: {
            default: `2px solid ${colorPalette[color].grayScale[2]}`,
          },
        };
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
        },
      };
    case "outlined-soft":
      if (disabled)
        return {
          backgroundColor: {
            default: colorPalette[color].grayScale[2],
          },
          color: {
            default: colorPalette[color].grayScale[10],
          },
          border: {
            default: `2px solid ${colorPalette[color].grayScale[5]}`,
          },
        };
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
      };
    case "neumorph":
      if (disabled)
        return {
          backgroundColor: {
            default: "transparent",
          },
          color: {
            default: colorPalette[color].grayScale[5],
          },
          border: {
            default: `2px solid transparent`,
          },
          boxShadow: {
            default: `-6px -6px 14px rgba(255, 255, 255, .7),
              -6px -6px 10px rgba(255, 255, 255, .5),
              6px 6px 8px rgba(255, 255, 255, .075),
              6px 6px 10px rgba(0, 0, 0, .15)`,
          },
        };
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
          default: `2px solid transparent`,
          hover: `2px solid transparent`,
          active: `2px solid transparent`,
        },
        boxShadow: {
          default:
            colorPalette[color].appearance === "light"
              ? `-6px -6px 14px rgba(255, 255, 255, .7), -6px -6px 10px rgba(255, 255, 255, .5), 6px 6px 8px rgba(255, 255, 255, .075), 6px 6px 10px rgba(0, 0, 0, .15)`
              : `-6px -6px 14px rgba(255, 255, 255, 0.1), -6px -6px 10px rgba(255, 255, 255, 0.1), 6px 6px 8px rgba(255, 255, 255, 0.05), 6px 6px 10px rgba(0, 0, 0, 0.1)`,
          hover:
            colorPalette[color].appearance === "light"
              ? `-2px -2px 6px rgba(255, 255, 255, .6), -2px -2px 4px rgba(255, 255, 255, .4), 2px 2px 2px rgba(255, 255, 255, .05), 2px 2px 4px rgba(0, 0, 0, .1)`
              : `-2px -2px 14px rgba(255, 255, 255, 0.1),  -2px -2px 4px rgba(255, 255, 255, .1), 2px 2px 2px rgba(255, 255, 255, .01), 2px 2px 4px rgba(0, 0, 0, .1)`,
          active:
            colorPalette[color].appearance === "light"
              ? `inset -2px -2px 6px rgba(255, 255, 255, .7), inset -2px -2px 4px rgba(255, 255, 255, .5), inset 2px 2px 2px rgba(255, 255, 255, .075), inset 2px 2px 4px rgba(0, 0, 0, .15)`
              : `inset -2px -2px 14px rgba(255, 255, 255, 0.1), inset -2px -2px 4px rgba(255, 255, 255, .1), inset 2px 2px 2px rgba(255, 255, 255, .01), inset 2px 2px 4px rgba(0, 0, 0, .1)`,
        },
      };
    case "neumorph-contained":
      if (disabled)
        return {
          backgroundColor: {
            default: colorPalette[color].grayScale[8],
          },
          color: {
            default: colorPalette[color].accentContrast,
          },
          border: {
            default: `2px solid ${colorPalette[color].background}`,
          },
          boxShadow: {
            default: `-6px -6px 14px rgba(255, 255, 255, .7),
              -6px -6px 10px rgba(255, 255, 255, .5),
              6px 6px 8px rgba(255, 255, 255, .075),
              6px 6px 10px rgba(0, 0, 0, .15)`,
          },
        };
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
          default: `2px solid ${colorPalette[color].background}`,
          hover: `2px solid ${colorPalette[color].background}`,
          active: `2px solid ${colorPalette[color].background}`,
        },
        boxShadow: {
          default:
            colorPalette[color].appearance === "light"
              ? `-6px -6px 14px rgba(255, 255, 255, .7), -6px -6px 10px rgba(255, 255, 255, .5), 6px 6px 8px rgba(255, 255, 255, .075), 6px 6px 10px rgba(0, 0, 0, .15)`
              : `-6px -6px 14px rgba(255, 255, 255, 0.1), -6px -6px 10px rgba(255, 255, 255, 0.1), 6px 6px 8px rgba(255, 255, 255, 0.05), 6px 6px 10px rgba(0, 0, 0, 0.1)`,
          hover:
            colorPalette[color].appearance === "light"
              ? `-2px -2px 6px rgba(255, 255, 255, .6), -2px -2px 4px rgba(255, 255, 255, .4), 2px 2px 2px rgba(255, 255, 255, .05), 2px 2px 4px rgba(0, 0, 0, .1)`
              : `-2px -2px 14px rgba(255, 255, 255, 0.1),  -2px -2px 4px rgba(255, 255, 255, .1), 2px 2px 2px rgba(255, 255, 255, .01), 2px 2px 4px rgba(0, 0, 0, .1)`,
          active:
            colorPalette[color].appearance === "light"
              ? `inset -2px -2px 6px rgba(255, 255, 255, .7), inset -2px -2px 4px rgba(255, 255, 255, .5), inset 2px 2px 2px rgba(255, 255, 255, .075), inset 2px 2px 4px rgba(0, 0, 0, .15)`
              : `inset -2px -2px 14px rgba(255, 255, 255, 0.1), inset -2px -2px 4px rgba(255, 255, 255, .1), inset 2px 2px 2px rgba(255, 255, 255, .01), inset 2px 2px 4px rgba(0, 0, 0, .1)`,
        },
      };
  }
};
const getSizeProps = (size: IconButtonStyleProps["$size"]) => {
  switch (size) {
    case "small":
      return {
        padding: "0.5rem 0.5rem",
        width: "1.25rem",
        height: "1.25rem",
      };
    case "medium":
      return {
        padding: "0.75rem 0.75rem",
        width: "1.5rem",
        height: "1.5rem",
      };
    case "large":
      return {
        padding: "1rem 1rem",
        width: "2rem",
        height: "2rem",
      };
  }
};
