import * as React from "react";
import styled, { keyframes } from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { DefaultTheme } from "../ThemeProvider/ThemeProvider.types";
interface LoaderProps {
  shape?: "circle" | "square" | "rectangle";
  height?: string;
  width?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
  className?: string;
  startTime?: number;
}

interface LoaderStyleProps {
  $shape: LoaderProps["shape"];
  $height: LoaderProps["height"];
  $width: LoaderProps["width"];
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
  $borderRadius?: LoaderProps["borderRadius"];
  $startTime?: LoaderProps["startTime"];
}

const loadingAnimation = keyframes`
  0% {
    left: -3rem;
  }
  50% {
    left: 100%
  }
  100% {
    left: 100%;
  }
`;

const StyledLoaderProps = styled.div<LoaderStyleProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border-radius: ${(props) => props.$borderRadius};
  background-color: ${(props) => props.$colorPalette.primary.grayScale[1]};
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    display: block;
    position: absolute;
    animation: ${loadingAnimation} 2s infinite ${props => props.$startTime}s;
    width: 3rem;
    left:-3rem;
    height: 100%;
    background: ${(props) => `linear-gradient(90deg, transparent, ${props.$colorPalette.primary.grayScale[0]}, transparent)`};
  }
`;

const Loader: React.FunctionComponent<LoaderProps> = ({
  shape = "square",
  height = "2rem",
  width = "2rem",
  borderRadius = shape === "circle" ? "50%" : "0.5rem",
  style,
  className,
  startTime = 0
}) => {
  const colorPalette = useTheme().theme.colorPalette;

  return (
    <StyledLoaderProps
      $width={width}
      $height={height}
      $shape={shape}
      $colorPalette={colorPalette}
      $borderRadius={borderRadius}
      $startTime={startTime}
      style={style}
      className={className}
    />
  );
};

export default Loader;
