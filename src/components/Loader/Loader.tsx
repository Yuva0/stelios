import * as React from "react";
import styled, { keyframes } from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { DefaultTheme } from "../ThemeProvider/ThemeProvider.types";
interface LoaderProps {
  shape?: "circle" | "square" | "rectangle";
  height?: string;
  width?: string;
  borderRadius?: string;
}

interface LoaderStyleProps {
  $shape: LoaderProps["shape"];
  $height: LoaderProps["height"];
  $width: LoaderProps["width"];
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
  $borderRadius?: LoaderProps["borderRadius"];
}

const loadingAnimation = keyframes`
  0% {
    left: -10px
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
    animation: ${loadingAnimation} 2s infinite;
    width: 1rem;
    height: 100%;
    background-color: ${(props) => props.$colorPalette.primary.grayScale[0]};
  }
`;

const Loader: React.FunctionComponent<LoaderProps> = ({
  shape = "square",
  height = "2rem",
  width = "2rem",
  borderRadius = shape === "circle" ? "50%" : "0.5rem",
}) => {
  const colorPalette = useTheme().theme.colorPalette;

  return (
    <StyledLoaderProps
      $width={width}
      $height={height}
      $shape={shape}
      $colorPalette={colorPalette}
      $borderRadius={borderRadius}
    />
  );
};

export default Loader;
