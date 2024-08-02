import * as React from "react";
import styled, { keyframes } from "styled-components";

interface ImageHighlightProps {
  imgSrc: string;
  imgAlt: string;
  gradientColors?: Array<string>;
}

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

const StyledImgCtr = styled.div`
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
  border-radius: 50%;
  border: 0.25rem solid white;
  background-color: lightgrey;
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

const ImageHighlight: React.FunctionComponent<ImageHighlightProps> = ({
  imgSrc,
  imgAlt,
  gradientColors,
}) => {
  return (
    <StyledImgHighlightCtr $gradientColors={gradientColors}>
      <StyledImgCtr>
        <StyledImg src={imgSrc} alt={imgAlt} />
      </StyledImgCtr>
    </StyledImgHighlightCtr>
  );
};

export default ImageHighlight;