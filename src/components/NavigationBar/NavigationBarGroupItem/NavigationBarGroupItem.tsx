import React from "react";
import {
  NavigationBarGroupItemProps,
  NavigationBarGroupItemStyleProps,
} from "./NavigationBarGroupItem.types";
import colors from "../../../tokens/colors.json";
import styled from "styled-components";
import Text from "../../Text/Text";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const StyledNavBarGroupItem = styled.li<NavigationBarGroupItemStyleProps>`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.4rem 0 0.4rem 1.75rem;
  margin: 0 0.5rem;
  &:hover {
    background-color: ${(props) => props.$colorPalette.primary.grayScale[1]};
  }
  &:active {
    background-color: ${(props) => props.$colorPalette.primary.grayScale[2]};
  }
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    margin-left: 0.43rem;
    border-left: 1px solid ${(props) => props.$colorPalette.primary.grayScale[5]};
    top: 0;
    left: 0;
  }
`;

const StyledNavBarGrpItemIcon = styled.span`
  margin-left: auto;
`;

const NavigationBarGroupItem = ({
  children,
  leadingIcon,
  trailingIcon,
  className,
  style,
  size,
}: NavigationBarGroupItemProps) => {
  const colorPalette = useTheme().theme.colorPalette;

  return (
    <StyledNavBarGroupItem
      $colorPalette={colorPalette}
      className={className}
      style={style}
    >
      {leadingIcon && (
        <StyledNavBarGrpItemIcon>{leadingIcon}</StyledNavBarGrpItemIcon>
      )}
      {typeof children === "string" ? (
        <Text variant="span" size={size}>
          {children}
        </Text>
      ) : (
        children
      )}
      {trailingIcon && (
        <StyledNavBarGrpItemIcon>{trailingIcon}</StyledNavBarGrpItemIcon>
      )}
    </StyledNavBarGroupItem>
  );
};

export default NavigationBarGroupItem;
