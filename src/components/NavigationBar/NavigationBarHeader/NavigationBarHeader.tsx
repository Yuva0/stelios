import React from "react";
import {
  NavigationBarHeaderProps,
  NavigationBarHeaderStyleProps,
} from "./NavigationBarHeader.types";
import colors from "../../../tokens/colors.json";
import styled from "styled-components";
import Text from "../../Text/Text";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const StyledNavBarHeader = styled.li<NavigationBarHeaderStyleProps>`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.25rem 0 0.25rem 2.25rem;
  color: ${(props) => props.$colorPalette.primary.grayScale[11]};
  &:before {
    content: "";
    position: absolute;
    width: 0.35rem;
    height: 0.35rem;
    left: 0;
    margin-left: 0.75rem;
    border-radius: 50%;
    border: 1px solid ${(props) => props.$colorPalette.primary.grayScale[5]};
  }
  &:after {
    content: "";
    position: absolute;
    height: 50%;
    margin-left: 0.93rem;
    border-left: 1px solid
      ${(props) => props.$colorPalette.primary.grayScale[5]};
    top: calc(50% + 0.175rem);
    left: 0;
  }
`;

const NavigationBarHeader = ({
  children,
  style,
  className,
  leadingIcon,
  trailingIcon,
  size,
}: NavigationBarHeaderProps) => {
  const colorPalette = useTheme().theme.colorPalette;
  return (
    <StyledNavBarHeader
      $colorPalette={colorPalette}
      style={style}
      className={className}
    >
      {leadingIcon && <span>{leadingIcon}</span>}
      {typeof children === "string" ? (
        <Text variant="span" size={size ?? "small"}>
          {children}
        </Text>
      ) : (
        children
      )}
      {trailingIcon && <span>{trailingIcon}</span>}
    </StyledNavBarHeader>
  );
};

export default NavigationBarHeader;
