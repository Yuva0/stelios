import * as React from "react";
import Link from "../../Link/Link";
import Text from "../../Text/Text";
import colorTokens from "../../../tokens/colors.json";
import styled from "styled-components";
import {
  BreadcrumbsItemProps,
  BreadcrumbsItemStyledProps,
} from "./BreadcrumbsItem.types";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../../helpers/helpers";

const BreadcrumbsItem: React.FunctionComponent<BreadcrumbsItemProps> = ({
  link,
  title,
  color = colorTokens.default.primary.main,
  size = "medium",
  variant = "contained",
  "data-testid": dataTestId,
  ...props
}: BreadcrumbsItemProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  const getPreciseColor = () => {
    if (colorPalette)
      return variant === "contained"
        ? colorPalette[color].accentContrast
        : colorPalette[color].accentScale[10];
  };

  const BreadcrumbsItemContent = link ? (
    <Link
      size={size}
      preciseColor={getPreciseColor()}
      variant="hover"
      href={link}
    >
      {title}
    </Link>
  ) : (
    <Text disableColor size={size} variant="span">
      {title}
    </Text>
  );

  return (
    <StyledBreadcrumbsItem
      $variant={variant}
      $color={color}
      $colorPalette={colorPalette}
      $size={size}
      $isSelectable={!!link}
      data-testid={dataTestId}
      aria-current={link ? "page" : undefined}
      {...props}
    >
      {BreadcrumbsItemContent}
    </StyledBreadcrumbsItem>
  );
};
export default BreadcrumbsItem;

const StyledBreadcrumbsItem = styled.div<BreadcrumbsItemStyledProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  ${(props) => {
    const properties = styledHandler(
      props.$variant,
      props.$color,
      props.$colorPalette,
      props.$isSelectable,
      props.$size
    );
    return `
      background-color: ${properties.backgroundColor.default};
      color: ${properties.color.default};
      border: ${properties.border.default};
      padding: ${properties.padding};
      margin: ${properties.margin};
      ${
        props.$isSelectable
          ? `&:hover {
          background-color: ${properties.backgroundColor.hover};
          color: ${properties.color.hover};
          border: ${properties.border.hover};
          }
          &:active {
          background-color: ${properties.backgroundColor.active};
          color: ${properties.color.active};
          border: ${properties.border.active};
          `
          : ""
      }
      `;
  }}
`;
const styledHandler = (
  variant: BreadcrumbsItemStyledProps["$variant"],
  color: BreadcrumbsItemStyledProps["$color"],
  colorPalette: BreadcrumbsItemStyledProps["$colorPalette"],
  isSelectable: BreadcrumbsItemStyledProps["$isSelectable"],
  size: BreadcrumbsItemStyledProps["$size"]
) => {
  return {
    ...variantHandler(variant, color, colorPalette, isSelectable),
    ...sizeHandler(size),
  };
};
const variantHandler = (
  variant: BreadcrumbsItemStyledProps["$variant"],
  color: BreadcrumbsItemStyledProps["$color"],
  colorPalette: BreadcrumbsItemStyledProps["$colorPalette"],
  isSelectable: BreadcrumbsItemStyledProps["$isSelectable"]
) => {
  switch (variant) {
    case "contained":
      if (!isSelectable) {
        return {
          backgroundColor: {
            default: colorPalette[color].grayScale[8],
          },
          color: {
            default: colorPalette[color].accentContrast,
          },
          border: {
            default: `1px solid ${colorPalette[color].grayScale[8]}`,
          },
        };
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
          default: `1px solid ${colorPalette[color].accentScale[8]}`,
          hover: `1px solid ${colorPalette[color].accentScale[9]}`,
          active: `1px solid ${colorPalette[color].accentScale[9]}`,
        },
      };
    case "outlined":
      if (!isSelectable) {
        return {
          backgroundColor: {
            default: "transparent",
          },
          color: {
            default: colorPalette[color].grayScale[10],
          },
          border: {
            default: `1px solid ${colorPalette[color].grayScale[8]}`,
          },
        };
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
          default: `1px solid ${colorPalette[color].accentScale[6]}`,
          hover: `1px solid ${colorPalette[color].accentScale[7]}`,
          active: `1px solid ${colorPalette[color].accentScale[7]}`,
        },
      };
    case "soft":
      if (!isSelectable) {
        return {
          backgroundColor: {
            default: colorPalette[color].grayScale[3],
          },
          color: {
            default: colorPalette[color].grayScale[10],
          },
          border: {
            default: `1px solid ${colorPalette[color].grayScale[3]}`,
          },
        };
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
          default: `1px solid ${colorPalette[color].accentScale[2]}`,
          hover: `1px solid ${colorPalette[color].accentScale[3]}`,
          active: `1px solid ${colorPalette[color].accentScale[3]}`,
        },
      };
    case "text":
      if (!isSelectable) {
        return {
          backgroundColor: {
            default: "transparent",
          },
          color: {
            default: colorPalette[color].grayScale[10],
          },
          border: {
            default: `1px solid transparent`,
          },
        };
      }
      return {
        backgroundColor: {
          default: "transparent",
          hover: "transparent",
          active: "transparent",
        },
        color: {
          default: colorPalette[color].accentScale[10],
          hover: colorPalette[color].accentScale[11],
          active: colorPalette[color].accentScale[11],
        },
        border: {
          default: "1px solid transparent",
          hover: "1px solid transparent",
          active: "1px solid transparent",
        },
      };
  }
};
const sizeHandler = (size: BreadcrumbsItemStyledProps["$size"]) => {
  switch (size) {
    case "small":
      return {
        margin: "0rem 0.25rem",
        padding: "0.25rem 0.5rem",
      };
    case "medium":
      return {
        margin: "0rem 0.5rem",
        padding: "0.25rem 0.5rem",
      };
    case "large":
      return {
        margin: "0rem 0.5rem",
        padding: "0.25rem 0.5rem",
      };
  }
};
