import React from "react";
import { LinkProps } from "./Link.types";
import Text from "../Text/Text";
import styled from "styled-components";
import colors from "../../tokens/colors.json";

const Link = ({
  href,
  children,
  variant = "default",
  size = "medium",
  className,
  target,
  style,
  onClick,
}: LinkProps) => {
  console.log(variant);
  const StyledLink = styled.a`
    text-decoration: ${variant === "underline" ? "underline" : "none"};
    color: ${colors.info["700"]};
    cursor: pointer;
    display: inline-block;
    &:hover {
      text-decoration: ${variant === "default" ? "none" : "underline"};
    }
  `;

  return (
    <StyledLink
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
