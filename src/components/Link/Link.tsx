import React from "react";
import { LinkProps, LinkStyleProps } from "./Link.types";
import Text from "../Text/Text";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { colorTypes } from "../ThemeProvider/ThemeProvider.types";

const StyledLink = styled.a<LinkStyleProps>`
  text-decoration: ${(props) =>
    props.$variant === "underline" ? "underline" : "none"};
  color: ${(props) =>
    colorTypes.includes(props.$color)
      ? props.$colorGradient["primary"].accentScale[10]
      : props.$color};
  cursor: pointer;
  display: inline-block;
  &:hover {
    text-decoration: ${(props) =>
      props.$variant === "default" ? "none" : "underline"};
  }
`;

const Link = ({
  href,
  children,
  variant = "default",
  size = "medium",
  className,
  target,
  style,
  color = "primary",
  onClick,
}: LinkProps) => {
  const colorPalette = useTheme().theme.colorPalette;

  return (
    <StyledLink
      $color={color}
      $variant={variant}
      $colorGradient={colorPalette}
      target={target}
      href={href}
      className={className}
      style={style}
      onClick={onClick}
    >
      {typeof children === "string" ? (
        <Text size={size} variant="span">
          {children}
        </Text>
      ) : (
        children
      )}
    </StyledLink>
  );
};

export default Link;
