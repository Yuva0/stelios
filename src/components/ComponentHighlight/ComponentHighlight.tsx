import * as React from "react";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import Text from "../Text/Text";
import { ComponentHighlightProps, ComponentHighlightStyleProps } from "./ComponentHighlight.types";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const ComponentHighlight: React.FunctionComponent<ComponentHighlightProps> = ({
  children,
  width = "auto",
  height = "auto",
  gradientColors,
  outerBorderRadius = "1rem",
  innerBorderRadius = "0.8rem",
  style,
  className,
  color = colorTokens.default.primary.main,
  "data-testid": dataTestId,
  ...props
}) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme,color);

  const CHILDREN =
    typeof children === "string" ? <Text disableColor>{children}</Text> : children;

  return (
    <StyledComponentCtr
      style={style}
      className={className}
      $width={width}
      $height={height}
      $outerBorderRadius={outerBorderRadius}
      $innerBorderRadius={innerBorderRadius}
      $colorPalette={colorPalette}
      $color={color}
      $gradientColors={gradientColors}
      data-testid={dataTestId}
      {...props}
    >
      {CHILDREN}
    </StyledComponentCtr>
  );
};
export default ComponentHighlight;


const StyledComponentCtr = styled.div<ComponentHighlightStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$colorPalette[props.$color].grayScale[0]};
  background-clip: padding-box;
  border-radius: ${(props) => props.$innerBorderRadius};
  padding: 0.5rem;

  &::after {
    position: absolute;
    top: -3px;
    bottom: -3px;
    left: -3px;
    right: -3px;
    background: ${(props) => {
      if (!props.$gradientColors)
        return `linear-gradient(to bottom left, #fb6f92, #f7cb5e)`;
      return `linear-gradient(to bottom left, ${props.$gradientColors.toString()})`;
    }};
    content: "";
    z-index: -1;
    border-radius: ${(props) => props.$outerBorderRadius};
  }
`;