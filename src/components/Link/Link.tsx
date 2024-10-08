import React, { forwardRef } from "react";
import { LinkProps, LinkStyleProps } from "./Link.types";
import Text from "../Text/Text";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";
import {Link as ReactRouterLink} from "react-router-dom";

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({
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
  onClick,
  "data-testid": dataTestId,
}, ref) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);
  const _color =
    preciseColor ?? colorPalette![color].accentScale[10];

  const isRelative = href && href.startsWith("/");

  const LinkText = () => {
    return typeof children === "string" ? (
      <Text preciseColor={_color} size={size} variant="span">
        {children}
      </Text>
    ) : (
      children
    );
  };

  return (isRelative ?
    <StyledReactRouterLink to={href} ref={ref} tabIndex={tabIndex} target={target} $color={_color} $variant={variant} data-testid={dataTestId} onClick={onClick} style={style} className={className}>
      {LinkText()}
    </StyledReactRouterLink> :
    <StyledLink
      ref={ref}
      tabIndex={tabIndex}
      $color={_color}
      $variant={variant}
      target={target}
      href={href}
      className={className}
      style={style}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {LinkText()}
    </StyledLink>
  );
});
export default Link;

const StyledLink = styled.a<LinkStyleProps>`
  color: ${(props) => props.$color};
  width: fit-content;
  text-decoration: ${(props) =>
    props.$variant === "underline" ? "underline" : "none"};
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
const StyledReactRouterLink = styled(ReactRouterLink)<LinkStyleProps>`
  color: ${(props) => props.$color};
  width: fit-content;
  text-decoration: ${(props) =>
    props.$variant === "underline" ? "underline" : "none"};
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
