import * as React from "react";
import styled, { keyframes } from "styled-components";
import { LoaderProps, LoaderStyleProps } from "./Loader.types";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const Loader: React.FunctionComponent<LoaderProps> = ({
  shape = "square",
  height = "2rem",
  width = "2rem",
  borderRadius = shape === "circle" ? "50%" : "0.5rem",
  color = colorTokens.default.primary.main,
  style,
  className,
  startTime = 0,
  "data-testid": dataTestId,
  ...props
}) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  return (
    <StyledLoaderProps
      $width={width}
      $height={height}
      $shape={shape}
      $colorPalette={colorPalette}
      $color={color}
      $borderRadius={borderRadius}
      $startTime={startTime}
      style={style}
      className={className}
      data-testid={dataTestId}
      {...props}
    />
  );
};
export default Loader;

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
  background-color: ${(props) => props.$colorPalette[props.$color].grayScale[1]};
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
    background: ${(props) => `linear-gradient(90deg, transparent, ${props.$colorPalette[props.$color].grayScale[0]}, transparent)`};
  }
`;