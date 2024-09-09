import React from "react";
import {
  NavigationBarHeaderProps,
  NavigationBarHeaderStyleProps,
} from "./NavigationBarHeader.types";
// import colors from "../../../tokens/colors.json";
import styled from "styled-components";
import Text from "../../Text/Text";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../../helpers/helpers";
import colorTokens from "../../../tokens/colors.json";

const NavigationBarHeader = ({
  children,
  style,
  className,
  leadingIcon,
  trailingIcon,
  size = "small",
  color = colorTokens.default.primary.main,
}: NavigationBarHeaderProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  return (
    <StyledNavBarHeader
      $colorPalette={colorPalette}
      $color={color}
      style={style}
      className={className}
    >
      {leadingIcon && <span>{leadingIcon}</span>}
      {typeof children === "string" ? (
        <Text color={color} variant="span" size={size}>
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
NavigationBarHeader.displayName = "NavigationBarHeader";

const StyledNavBarHeader = styled.li<NavigationBarHeaderStyleProps>`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.25rem 0 0.25rem 2.25rem;
  &:before {
    content: "";
    position: absolute;
    width: 0.35rem;
    height: 0.35rem;
    left: 0;
    margin-left: 0.75rem;
    border-radius: 50%;
    border: 1px solid ${(props) => props.$colorPalette[props.$color].grayScale[5]};
  }
  &:after {
    content: "";
    position: absolute;
    height: 50%;
    margin-left: 0.93rem;
    border-left: 1px solid
      ${(props) => props.$colorPalette[props.$color].grayScale[5]};
    top: calc(50% + 0.175rem);
    left: 0;
  }
`;