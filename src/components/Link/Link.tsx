import React from "react";
import { LinkProps } from "./Link.types";
import Text from "../Text/Text";
import styled from "styled-components";
import colors from "../../tokens/colors.json";

type LinkStyleProps = {
  variant?: "default" | "underline" | "hover";
  color?: string;
};

const StyledLink = styled.a<LinkStyleProps>`
  text-decoration: ${(props) =>
    props.variant === "underline" ? "underline" : "none"};
  color: ${(props) => props.color ?? colors.info["700"]};
  cursor: pointer;
  display: inline-block;
  &:hover {
    text-decoration: ${(props) =>
      props.variant === "default" ? "none" : "underline"};
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
  onClick,
}: LinkProps) => {
  return (
    <StyledLink
      color={color}
      variant={variant}
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
