import React from "react";
import { LinkProps, LinkStyleProps } from "./Link.types";
import Text from "../Text/Text";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const StyledLink = styled.a<LinkStyleProps>`
  text-decoration: ${(props) =>
    props.$variant === "underline" ? "underline" : "none"};
  color: ${(props) => props.$color};
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
  color,
  // Events
  onClick,
}: LinkProps) => {
  const colorPalette = useTheme().theme.colorPalette;

  const _color = color
    ? colorPalette[color].accentScale[10]
    : colorPalette.primary.grayScale[11];

  return (
    <StyledLink
      $color={_color}
      $variant={variant}
      target={target}
      href={href}
      className={className}
      style={style}
      onClick={onClick}
    >
      {typeof children === "string" ? (
        <Text noColor size={size} variant="span">
          {children}
        </Text>
      ) : (
        children
      )}
    </StyledLink>
  );
};

export default Link;
