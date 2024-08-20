import * as React from "react";
import styled, { keyframes } from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { DefaultTheme } from "../ThemeProvider/ThemeProvider.types";
import Text from "../Text/Text";
interface ComponentHighlightProps {
  width?: string;
  height?: string;
  gradientColors?: Array<string>;
  borderRadius?: string;
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
  className?: string;
}
interface ComponentHighlightStyleProps {
  $width: string;
  $height: string;
  $borderRadius: string;
  $colorPalette: any;
  $gradientColors?: Array<string>;
}

const StyledComponentCtr = styled.div<ComponentHighlightStyleProps>`
  position: relative;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$colorPalette.primary.grayScale[0]};
  background-clip: padding-box;
  border-radius: 0.75rem;
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
    border-radius: 1rem;
  }
`;

const ComponentHighlight: React.FunctionComponent<ComponentHighlightProps> = ({
  children,
  width = "auto",
  height = "auto",
  gradientColors,
  borderRadius = "1rem",
  style,
  className,
}) => {
  const theme = useTheme().theme;
  if(!theme) return null;
  const colorPalette = theme.colorPalette;

  const CHILDREN =
    typeof children === "string" ? <Text>{children}</Text> : children;

  return (
    <StyledComponentCtr
      style={style}
      className={className}
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
      $colorPalette={colorPalette}
      $gradientColors={gradientColors}
    >
      {CHILDREN}
    </StyledComponentCtr>
  );
};

export default ComponentHighlight;
