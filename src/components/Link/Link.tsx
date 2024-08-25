import React from "react";
import { LinkProps, LinkStyleProps } from "./Link.types";
import Text from "../Text/Text";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const Link = ({
  href,
  children,
  variant = "default",
  size = "medium",
  className,
  target,
  style,
  color = colorTokens.default.primary.main,
  preciseColor,
  tabIndex,
  // Events
  onClick,
}: LinkProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);
  const _color =  preciseColor ?? (colorPalette ? colorPalette[color].accentScale[10] : color);

  const _handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick && onClick(e);
    }
  };

  const LinkText = () => {
    if (!children) return null;
    return typeof children === "string" ? (
      <Text disableColor size={size} variant="span">
        {children}
      </Text>
    ) : (
      children
    );
  };
  return (
    <StyledLink
      tabIndex={tabIndex}
      $color={_color}
      $variant={variant}
      target={target}
      href={href}
      className={className}
      style={style}
      onClick={onClick}
      onKeyDown={_handleKeyDown}
    >
      <LinkText />
    </StyledLink>
  );
};
export default Link;

const StyledLink = styled.a<LinkStyleProps>`
  width: fit-content;
  text-decoration: ${(props) =>
    props.$variant === "underline" ? "underline" : "none"};
  color: ${(props) => props.$color};
  cursor: pointer;
  display: inline-block;
  &:hover {
    text-decoration: ${(props) =>
      props.$variant === "default" ? "none" : "underline"};
  }
  &:focus-visible {
    outline: 1px solid ${(props) => props.$color};
    outline-offset: 2px;
    border-radius: 0.25rem;
  }
`;
