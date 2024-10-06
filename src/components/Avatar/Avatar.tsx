import * as React from "react";
import { AvatarProps, AvatarStyledProps } from "./Avatar.types";
import styled from "styled-components";
import colorTokens from "../../tokens/colors.json";
import Text from "../Text/Text";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";

const Avatar: React.FunctionComponent<AvatarProps> = ({
  src,
  alt,
  initials,
  variant = "contained",
  size = "medium",
  shape = "rounded",
  type = "image",
  color = colorTokens.default.primary.main,

  // Test props
  "data-testid": dataTestId,
  ...props
}) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);
  const AvatarContent = () => {
    switch (type) {
      case "image":
        return <img src={src} alt={alt} />;
      case "initials":
        const _size = size === "xlarge" || size === "medium" ? "large" : "medium";
        return <Text size={_size} disableColor variant="span">{initials}</Text>;
    }
  };

  return (
    <StyledImgContainer
      $shape={shape}
      $size={size}
      $variant={variant}
      $colorPalette={colorPalette}
      $color={color}
      data-testid={dataTestId}
      {...props}
    >
      <AvatarContent />
    </StyledImgContainer>
  );
};

const StyledImgContainer = styled.div<AvatarStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    const properties = styleHandler(props.$size, props.$shape, props.$variant, props.$colorPalette, props.$color);
    return `
      border-radius: ${properties.borderRadius};
      width: ${properties.width};
      height: ${properties.height};
      background-color: ${properties.backgroundColor};
      box-shadow: ${properties.boxShadow};
      color: ${properties.color};
      outline: ${properties.outline};
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: ${properties.borderRadius};
      }
    `;
  }}
`;
const styleHandler = (
  size: AvatarStyledProps["$size"],
  shape: AvatarStyledProps["$shape"],
  variant: AvatarStyledProps["$variant"],
  colorPalette: any,
  color: AvatarStyledProps["$color"]
) => {
  return {
    ...sizeHandler(size),
    ...shapeHandler(shape),
    ...variantHandler(variant, colorPalette, color),
  };
};
const shapeHandler = (shape: AvatarStyledProps["$shape"]) => {
  switch (shape) {
    case "rounded":
      return {
        borderRadius: "50%",
      };
    case "square":
      return {
        borderRadius: "8px",
      };
  }
};
const sizeHandler = (size: AvatarStyledProps["$size"]) => {
  switch (size) {
    case "small":
      return {
        width: "3rem",
        height: "3rem",
      };
    case "medium":
      return {
        width: "5rem",
        height: "5rem",
      };
    case "large":
      return {
        width: "7rem",
        height: "7rem",
      };
    case "xlarge":
      return {
        width: "10rem",
        height: "10rem",
      };
  }
};
const variantHandler = (
  variant: AvatarStyledProps["$variant"],
  colorPalette: AvatarStyledProps["$colorPalette"],
  color: AvatarStyledProps["$color"]
) => {
  switch (variant) {
    case "contained":
      return {
        backgroundColor: colorPalette[color].accentScale[8],
        color: colorPalette[color].accentContrast,
        outline: "none" ,
        boxShadow: "none",
      };
    case "outlined":
      return {
        backgroundColor: "transparent",
        color: colorPalette[color].accentScale[10],
        outline: `1px solid ${colorPalette[color].accentScale[8]}`,
        boxShadow: "none",
      };
    case "neumorph":
      return {
        backgroundColor: "transparent",
        color: colorPalette[color].accentScale[10],
        boxShadow: `-6px -6px 14px rgba(255, 255, 255, .7),
          -6px -6px 10px rgba(255, 255, 255, .5),
          6px 6px 8px rgba(255, 255, 255, .075),
          6px 6px 10px rgba(0, 0, 0, .15)`,
        outline: "none",
      }
  }
};

export default Avatar;
