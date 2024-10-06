import React, { useRef, forwardRef } from "react";
import styled from "styled-components";
import { CapsuleProps, CapsuleStyleProps } from "./Capsule.types";
import Text from "../Text/Text";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colors from "../../tokens/colors.json";

const Capsule = forwardRef<HTMLDivElement, CapsuleProps>(
  (
    {
      image,
      imageAlt,
      title,
      description,
      color = colors.default.primary.main,
      variant = "contained",
      imagePosition = "left",
      width = "25rem",
      height = "4rem",
      textProps,
      style,
      "data-testid": dataTestId,
      ...rest
    }: CapsuleProps,
    ref
  ) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const theme = useTheme().theme;
    const colorPalette = getColorPalette(theme, color);

    const renderTextContent = () => {
      if (!title && !description) return null;

      return (
        <StyledTextContainer $padding={textProps?.padding || "0.5rem 0.75rem"}>
          {title && (
            <Text disableColor variant="paragraph">
              {title}
            </Text>
          )}
          {description && (
            <Text disableColor variant="paragraph" size="small">
              {description}
            </Text>
          )}
        </StyledTextContainer>
      );
    };

    return (
      <StyledCapsuleContainer
        style={style}
        ref={innerRef}
        $variant={variant}
        $color={color}
        $colorPalette={colorPalette}
        $imagePosition={imagePosition}
        $width={width}
        $height={height}
        data-testid={dataTestId}
        {...rest}
      >
        <StyledImgContainer $imagePosition={imagePosition}>
          <img src={image} alt={imageAlt} />
        </StyledImgContainer>
        {renderTextContent()}
      </StyledCapsuleContainer>
    );
  }
);

const StyledCapsuleContainer = styled.div<CapsuleStyleProps>`
  display: flex;
  ${props => {
    const properties = getVariantProps(
      props.$variant,
      props.$color,
      props.$colorPalette
    );
    return `
      background-color: ${properties.backgroundColor.default};
      box-shadow: ${properties.boxShadow ? properties.boxShadow.default : "none"};
      color: ${properties.color.default};
      border-radius: 1rem;
      flex-direction: ${props.$imagePosition === "left" ? "row" : "row-reverse"};
      width: ${props.$width};
      height: ${props.$height};
      border: ${properties.border!.default};
    `;
  }}
`;

const StyledTextContainer = styled.div<{ $padding: string }>`
  display: flex;
  flex-direction: column;
  padding: ${({ $padding }) => $padding};
  gap: 0.2rem;
`;

const StyledImgContainer = styled.div<{ $imagePosition: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: ${({ $imagePosition }) =>
    $imagePosition === "left" ? "0.9rem 0 0 0.9rem" : "0 0.9rem 0.9rem 0"};
  overflow: hidden;
  img {
    height: 100%;
    border-radius: inherit;
  }
`;

const getVariantProps = (
  variant: CapsuleStyleProps["$variant"],
  color: CapsuleStyleProps["$color"],
  colorPalette: CapsuleStyleProps["$colorPalette"]
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
          default: colorPalette[color].accentScale[8],
        },
        border: {
          default: `2px solid ${colorPalette[color].accentScale[8]}`,
        },
      };
    case "soft":
      return {
        backgroundColor: {
          default: colorPalette[color].accentScale[2],
        },
        color: {
          default: colorPalette[color].accentScale[8],
        },
        border: {
          default: `2px solid ${colorPalette[color].accentScale[2]}`,
        },
      };
    case "neumorph":
      return {
        backgroundColor: {
          default: "transparent"
        },
        color: {
          default: colorPalette[color].accentScale[10]
        },
        border: {
          default: `2px solid transparent`
        },
        boxShadow: {
          default: colorPalette[color].appearance === "light" 
            ? `-6px -6px 14px rgba(255, 255, 255, .7), -6px -6px 10px rgba(255, 255, 255, .5), 6px 6px 8px rgba(255, 255, 255, .075), 6px 6px 10px rgba(0, 0, 0, .15)` 
            : `-6px -6px 14px rgba(0, 0, 0, 0.1),-6px -6px 10px rgba(0, 0, 0, .01),6px 6px 8px rgba(0, 0, 0, 0.5),6px 6px 10px rgba(0, 0, 0, .1)`,
        }
      }
  }
};

export default Capsule;
