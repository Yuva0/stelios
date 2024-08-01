import * as React from "react";
import { CapsuleProps } from "./Capsule.types";
import styled from "styled-components";
import Text from "../Text/Text";
import { DefaultTheme } from "../ThemeProvider/ThemeProvider.types";

const StyledCapsuleContainer = styled.div<{ $width: string; $height: string }>`
  display: flex;
  flex-direction: row;
  border-radius: 1rem;
  background-color: wheat;
  color: black;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

const StyledTextContainer = styled.span`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  gap: 0.2rem;
`;

const StyledImgContainer = styled.span<{ $imagePosition: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  width: auto;
  border-radius: ${({ $imagePosition }) =>
    $imagePosition === "left" ? "1rem 0 0 1rem" : "0 1rem 1rem 0"};
  & img {
    width: auto;
    height: 100%;
    border-radius: ${({ $imagePosition }) =>
      $imagePosition === "left" ? "1rem 0 0 1rem" : "0 1rem 1rem 0"};
  }
`;

const Capsule: React.FunctionComponent<CapsuleProps> = ({
  image,
  imageProps,
  title,
  description,
  imagePosition = "left",
  width = "25rem",
  height = "4em",
}: CapsuleProps) => {
  const TextContent = () => {
    if (!title && !description) return null;

    const titleContent = title ? (
      typeof title === "string" ? (
        <Text noColor variant="paragraph">
          {title}
        </Text>
      ) : (
        title
      )
    ) : null;
    const descriptionContent = description ? (
      typeof description === "string" ? (
        <Text noColor variant="paragraph" size="small">
          {description}
        </Text>
      ) : (
        description
      )
    ) : null;

    return (
      <StyledTextContainer>
        {titleContent}
        {descriptionContent}
      </StyledTextContainer>
    );
  };

  return (
    <StyledCapsuleContainer $width={width} $height={height}>
      {imagePosition === "left" && (
        <StyledImgContainer $imagePosition={imagePosition}>
          <img src={image} alt="Checkbox" />
        </StyledImgContainer>
      )}
      <TextContent />
      {imagePosition === "right" && (
        <StyledImgContainer $imagePosition={imagePosition}>
          <img src={image} alt="Checkbox" />
        </StyledImgContainer>
      )}
    </StyledCapsuleContainer>
  );
};

export default Capsule;
