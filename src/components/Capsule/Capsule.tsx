import React, { useRef, forwardRef } from "react";
import styled, { css } from "styled-components";
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
      height = "fit-content",
      clickable = false,
      style,
      textStyle,
      imageStyle,
      textClassName,
      imageClassName,
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
        <StyledTextContainer $padding={"0.5rem 0.75rem"} style={textStyle} className={textClassName}>
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
        $clickable={clickable}
        $height={height}
        data-testid={dataTestId}
        {...rest}
      >
        <StyledImgContainer $imagePosition={imagePosition} style={imageStyle} className={imageClassName}>
          <img src={image} alt={imageAlt} />
        </StyledImgContainer>
        {renderTextContent()}
      </StyledCapsuleContainer>
    );
  }
);

const StyledCapsuleContainer = styled.div<CapsuleStyleProps>`
  display: flex;
  border-radius: 1rem;
  flex-direction: ${props => props.$imagePosition === "left" ? "row" : "row-reverse"};
  width: ${props => props.$width};
  height: ${props => props.$height};
  cursor: ${props => props.$clickable ? "pointer" : "default"};
  ${props => getVariantProps(props.$variant, props.$color, props.$colorPalette, props.$clickable)}
`;

const StyledTextContainer = styled.div<{ $padding: string }>`
  display: flex;
  flex-direction: column;
  padding: ${({ $padding }) => $padding};
  gap: 0.2rem;
  flex: 0 0 70%;
  box-sizing: border-box;
`;

const StyledImgContainer = styled.div<{ $imagePosition: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 30%;
  border-radius: ${({ $imagePosition }) =>
    $imagePosition === "left" ? "0.9rem 0 0 0.9rem" : "0 0.9rem 0.9rem 0"};
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

const getVariantProps = (
  variant: CapsuleStyleProps["$variant"],
  color: CapsuleStyleProps["$color"],
  colorPalette: CapsuleStyleProps["$colorPalette"],
  clickable: CapsuleStyleProps["$clickable"]
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
      `;
    case "outlined":
      return css`
        background-color: transparent;
        color: ${colorPalette[color].accentScale[8]};
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
      `;
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
      `;
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
      `;
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
              : `-1px -1px 6px rgba(0, 0, 0, 0.4), -3px -3px 6px rgba(0, 0, 0, .01), 1px 1px 6px rgba(0, 0, 0, 0.4), 3px 3px 6px rgba(0, 0, 0, 0.1)`};
          }
          &:active {
            background-color: transparent;
            border: 2px solid transparent;
            box-shadow: ${colorPalette[color].appearance === "light" 
              ? `inset -2px -2px 6px rgba(255, 255, 255, .7), inset -2px -2px 4px rgba(255, 255, 255, .5), inset 2px 2px 2px rgba(255, 255, 255, .075), inset 2px 2px 4px rgba(0, 0, 0, .15)` 
              : `inset -2px -2px 14px rgba(0, 0, 0, 0.1),inset -2px -2px 4px rgba(0, 0, 0, .1),inset 2px 2px 4px rgba(0, 0, 0, .1),inset 2px 2px 8px rgba(0, 0, 0, .1)`};
          }
        `}
      `;
  }
};

export default Capsule;
