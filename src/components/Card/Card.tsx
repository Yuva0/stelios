import * as React from "react";
import {
  CardProps,
  CardHeaderProps,
  CardFooterProps,
  ChildrenProps,
  CardStyledProps,
} from "./Card.types";
import Text from "../Text/Text";
import styled, { css } from "styled-components";
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
  clickable = false,
  onClick,
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
      $clickable={clickable}
      className={className}
      style={style}
      data-testid={dataTestId}
      onClick={onClick}
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
  width: ${props => props.$width};
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
  ${props => getVariantProps(props.$variant, props.$colorPalette, props.$color, props.$clickable)}
`;

const getVariantProps = (
  variant: CardStyledProps["$variant"],
  colorPalette: CardStyledProps["$colorPalette"],
  color: CardStyledProps["$color"],
  clickable: CardStyledProps["$clickable"]
) => {
  switch (variant) {
    case "contained":
      return css`
        background-color: ${colorPalette[color].accentScale[8]};
        color: ${colorPalette[color].accentContrast};
        border: 2px solid ${colorPalette[color].accentScale[8]};

        ${clickable && css`
          &:hover {
            background-color: ${colorPalette[color].accentScale[9]};
            border: 2px solid ${colorPalette[color].accentScale[9]};
          }
          &:active {
            background-color: ${colorPalette[color].accentScale[9]};
            border: 2px solid ${colorPalette[color].accentScale[9]};
            filter: brightness(0.92) saturate(1.1);
          }
        `}
      `
    case "outlined":
      return css`
        background-color: transparent;
        color: ${colorPalette[color].accentScale[10]};
        border: 2px solid ${colorPalette[color].accentScale[5]};

        ${clickable && css`
          &:hover {
            background-color: transparent;
            border: 2px solid ${colorPalette[color].accentScale[6]};
          }
          &:active {
            background-color: transparent;
            border: 2px solid ${colorPalette[color].accentScale[7]};
          }
        `}
      `
    case "soft":
      return css`
        background-color: ${colorPalette[color].accentScale[2]};
        color: ${colorPalette[color].accentScale[10]};
        border: 2px solid ${colorPalette[color].accentScale[2]};

        ${clickable && css`
          &:hover {
            background-color: ${colorPalette[color].accentScale[3]};
            border: 2px solid ${colorPalette[color].accentScale[3]};
          }
          &:active {
            background-color: ${colorPalette[color].accentScale[3]};
            border: 2px solid ${colorPalette[color].accentScale[3]};
            filter: brightness(0.92) saturate(1.1);
          }
        `}
      `
    case "outlined-soft":
      return css`
        background-color: ${colorPalette[color].accentScale[2]};
        color: ${colorPalette[color].accentScale[10]};
        border: 2px solid ${colorPalette[color].accentScale[5]};

        ${clickable && css`
          &:hover {
            background-color: ${colorPalette[color].accentScale[3]};
            border: 2px solid ${colorPalette[color].accentScale[6]};
          }
          &:active {
            background-color: ${colorPalette[color].accentScale[3]};
            border: 2px solid ${colorPalette[color].accentScale[6]};
            filter: brightness(0.92) saturate(1.1);
          }
        `}
      `
    case "neumorph":
      return css`
        background-color: transparent;
        color: ${colorPalette[color].accentScale[10]};
        border: 2px solid transparent;
        box-shadow: ${colorPalette[color].appearance === "light" 
            ? `-6px -6px 14px rgba(255, 255, 255, .7), -6px -6px 10px rgba(255, 255, 255, .5), 6px 6px 8px rgba(255, 255, 255, .075), 6px 6px 10px rgba(0, 0, 0, .15)` 
            : `-6px -6px 14px rgba(0, 0, 0, 0.1),-6px -6px 10px rgba(0, 0, 0, .01),6px 6px 10px rgba(0, 0, 0, 0.4),6px 6px 10px rgba(0, 0, 0, .1)`};

        ${clickable && css`
          &:hover {
            background-color: transparent;
            border: 2px solid transparent;
            box-shadow: ${colorPalette[color].appearance === "light" 
              ? `-2px -2px 6px rgba(255, 255, 255, .6), -2px -2px 4px rgba(255, 255, 255, .4), 2px 2px 2px rgba(255, 255, 255, .05), 2px 2px 4px rgba(0, 0, 0, .1)` 
              : `-1px -1px 10px rgba(0, 0, 0, 0.4), -3px -3px 10px rgba(0, 0, 0, .01), 1px 1px 10px rgba(0, 0, 0, 0.4), 3px 3px 10px rgba(0, 0, 0, 0.1)`};
          }
          &:active {
            background-color: transparent;
            border: 2px solid transparent;
            box-shadow: ${colorPalette[color].appearance === "light" 
              ? `inset -2px -2px 6px rgba(255, 255, 255, .7), inset -2px -2px 4px rgba(255, 255, 255, .5), inset 2px 2px 2px rgba(255, 255, 255, .075), inset 2px 2px 4px rgba(0, 0, 0, .15)` 
              : `inset -2px -2px 14px rgba(0, 0, 0, 0.1),inset -2px -2px 4px rgba(0, 0, 0, .1),inset 2px 2px 4px rgba(0, 0, 0, .1),inset 2px 2px 8px rgba(0, 0, 0, .1)`};
          }
        `}

      `
  }
};
