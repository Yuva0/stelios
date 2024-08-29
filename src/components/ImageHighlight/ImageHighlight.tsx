import * as React from "react";
import styled, { keyframes } from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { ImageHighlightProps, ImageStyleProps } from "./ImageHighlight.types";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const ImageHighlight: React.FunctionComponent<ImageHighlightProps> = ({
  imgSrc,
  imgAlt,
  gradientColors,
  color = colorTokens.default.primary.main,
  "data-testid": dataTestId,
  ...props
}) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme);

  return (
    <StyledImgHighlightCtr
      $gradientColors={gradientColors}
      data-testId={dataTestId}
      {...props}
    >
      <StyledImgCtr $colorPalette={colorPalette} $color={color}>
        <StyledImg src={imgSrc} alt={imgAlt} />
      </StyledImgCtr>
    </StyledImgHighlightCtr>
  );
};

export default ImageHighlight;

// Define keyframes for gradient animation
const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
const StyledImgHighlightCtr = styled.div<{ $gradientColors?: Array<string> }>`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: ${(props) => {
    if (!props.$gradientColors)
      return "linear-gradient(to bottom left, #fb6f92, #f7cb5e)";
    return `linear-gradient(to bottom left, ${props.$gradientColors.toString()})`;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 200% 200%;
  animation: ${gradientMove} 1s infinite linear;
`;
const StyledImgCtr = styled.div<ImageStyleProps>`
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
  border-radius: 50%;
  border: 0.25rem solid white;
  background-color: ${(props) => props.$colorPalette[props.$color].grayScale[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
