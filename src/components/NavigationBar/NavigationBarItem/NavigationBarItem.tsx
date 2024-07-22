import React from "react";
import { NavigationBarItemProps, NavigationBarItemStyleProps } from "./NavigationBarItem.types";
import colors from "../../../tokens/colors.json";
import styled from "styled-components";
import Text from "../../Text/Text";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const StyledNavBarItem = styled.li<NavigationBarItemStyleProps>`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.3rem 0.75rem;
  margin: 0 0.5rem;
  &:hover {
    background-color: ${(props) => props.$paletteColors.primary.grayScale[1]};
  }
  &:active {
    background-color: ${(props) => props.$paletteColors.primary.grayScale[2]};
  
  }
`;

const StyledNavBarIcon = styled.span`
  margin-left: auto;
`;

const NavigationBarItem = ({
  children,
  leadingIcon,
  trailingIcon,
  className,
  style,
  size,
}: NavigationBarItemProps) => {

  const paletteColors = useTheme().theme.paletteColors;

  return (
    <StyledNavBarItem $paletteColors={paletteColors} className={className} style={style}>
      {leadingIcon && <StyledNavBarIcon>{leadingIcon}</StyledNavBarIcon>}
      {typeof children === "string" ? (
        <Text variant="span" size={size}>
          {children}
        </Text>
      ) : (
        children
      )}
      {trailingIcon && <StyledNavBarIcon>{trailingIcon}</StyledNavBarIcon>}
    </StyledNavBarItem>
  );
};

export default NavigationBarItem;
