import * as React from "react";
import {
  CardProps,
  CardHeaderProps,
  CardFooterProps,
  ChildrenProps,
  CardStyledProps,
} from "./Card.types";
import Text from "../Text/Text";
import styled from "styled-components";
import colorTokens from "../../tokens/colors.json";
import { getColorPalette } from "../../helpers/helpers";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const Card: React.FunctionComponent<CardProps> = ({
  variant = "contained",
  color = colorTokens.default.primary.main,
  header,
  children,
  footer,
  width = "400px",
  className,
  style,
  "data-testid": dataTestId,
  ...props
}) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  return (
    <StyledCard
      $variant={variant}
      $colorPalette={colorPalette}
      $color={color}
      $width={width}
      className={className}
      style={style}
      data-testid={dataTestId}
      {...props}
    >
      <CardHeader>{header}</CardHeader>
      <Children>{children}</Children>
      <CardFooter>{footer}</CardFooter>



    </StyledCard>
  );
};
const CardHeader: React.FunctionComponent<CardHeaderProps> = ({ children }) => {
  return <Children children={children}/>;
};
const CardFooter: React.FunctionComponent<CardFooterProps> = ({ children }) => {
  return <Children children={children}/>;
};
const Children: React.FunctionComponent<ChildrenProps> = ({ children }) => {
  if(!React.isValidElement(children)) return null;

  return children;
};
export default Card;

const StyledCard = styled.div<CardStyledProps>`
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${(props) => {
    const properties = propsHandler(
      props.$variant,
      props.$colorPalette,
      props.$color
    );
    return `
      width: ${props.$width};
      background-color: ${properties.backgroundColor.default};
      border: ${properties.border.default};
      color: ${properties.color.default};
      ${properties.boxShadow ? `box-shadow: ${properties.boxShadow.default};` : ""}
    `;
  }}
`;
const propsHandler = (
  variant: CardStyledProps["$variant"],
  colorPalette: CardStyledProps["$colorPalette"],
  color: CardStyledProps["$color"]
) => {
  return { ...getVariantProps(variant, colorPalette, color) };
};
const getVariantProps = (
  variant: CardStyledProps["$variant"],
  colorPalette: CardStyledProps["$colorPalette"],
  color: CardStyledProps["$color"]
) => {
  switch (variant) {
    case "contained":
      return {
        backgroundColor: {
          default: colorPalette[color].accentScale[8],
        },
        color: {
          default: colorPalette[color].accentContrast,
        },
        border: {
          default: `2px solid ${colorPalette[color].accentScale[8]}`,
        },
      };
    case "outlined":
      return {
        backgroundColor: {
          default: "transparent",
        },
        color: {
          default: colorPalette[color].accentScale[10],
        },
        border: {
          default: `2px solid ${colorPalette[color].accentScale[5]}`,
        },
      };
    case "soft":
      return {
        backgroundColor: {
          default: colorPalette[color].accentScale[2],
        },
        color: {
          default: colorPalette[color].accentScale[10],
        },
        border: {
          default: `2px solid ${colorPalette[color].accentScale[2]}`,
        },
      }
    case "outlined-soft":
      return {
        backgroundColor: {
          default: colorPalette[color].accentScale[2],
        },
        color: {
          default: colorPalette[color].accentScale[10],
        },
        border: {
          default: `2px solid ${colorPalette[color].accentScale[5]}`,
        },
      }
    case "neumorph":
      return {
        backgroundColor: {
          default: "transparent",
        },
        color: {
          default: colorPalette[color].accentScale[10],
        },
        border: {
          default: `2px solid transparent`,
        },
        boxShadow: {
          default: colorPalette[color].appearance === "light" 
            ? `-6px -6px 14px rgba(255, 255, 255, .7), -6px -6px 10px rgba(255, 255, 255, .5), 6px 6px 8px rgba(255, 255, 255, .075), 6px 6px 10px rgba(0, 0, 0, .15)` 
            : `-6px -6px 14px rgba(255, 255, 255, 0.1), -6px -6px 10px rgba(255, 255, 255, 0.1), 6px 6px 8px rgba(255, 255, 255, 0.05), 6px 6px 10px rgba(0, 0, 0, 0.1)`,
        }
      }
  }
};
