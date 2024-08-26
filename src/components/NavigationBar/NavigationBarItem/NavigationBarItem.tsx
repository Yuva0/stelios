import React from "react";
import {
  NavigationBarItemProps,
  NavigationBarItemStyleProps,
} from "./NavigationBarItem.types";
import styled from "styled-components";
import Text from "../../Text/Text";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import colorTokens from "../../../tokens/colors.json";
import { getColorPalette } from "../../../helpers/helpers";

const NavigationBarItem = ({
  _index,
  value,
  children,
  leadingIcon,
  trailingIcon,
  className,
  style,
  size,
  selected = false,
  color = colorTokens.default.primary.main,
  // Events
  _getSelectedIndex,
  onClick,
}: NavigationBarItemProps) => {
  const [_selected, setSelected] = React.useState(selected);

  React.useEffect(() => {
    setSelected(selected);
  }, [selected]);
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  const _onClick = (e: React.MouseEvent) => {
    setSelected(true);
    _getSelectedIndex && _getSelectedIndex(_index, value);
    onClick && onClick(e);
  };
  const _onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      setSelected(true);
      _getSelectedIndex && _getSelectedIndex(_index, value);
      onClick && onClick(e);
    }
  };

  return (
    <StyledNavBarItem
      tabIndex={0}
      $selected={_selected}
      $colorPalette={colorPalette}
      $color={color}
      className={className}
      style={style}
      onClick={_onClick}
      onKeyDown={_onKeyDown}
    >
      {leadingIcon && <StyledNavBarIcon>{leadingIcon}</StyledNavBarIcon>}
      {typeof children === "string" ? (
        <Text color={color} variant="span" size={size}>
          {children}
        </Text>
      ) : (
        children
      )}
      {trailingIcon && <StyledNavBarIcon>{trailingIcon}</StyledNavBarIcon>}
    </StyledNavBarItem>
  );
};
NavigationBarItem.displayName = "NavigationBarItem";
export default NavigationBarItem;

const StyledNavBarItem = styled.li<NavigationBarItemStyleProps>`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.3rem 0.75rem;
  margin: 0 0.5rem;
  color: ${(props) =>
    props.$selected
      ? props.$colorPalette[props.$color].accentScale[10]
      : props.$colorPalette[props.$color].grayScale[11]};
  background-color: ${(props) =>
    props.$selected
      ? props.$colorPalette[props.$color].accentScale[2]
      : "transparent"};
  &:hover {
    background-color: ${(props) =>
      props.$selected
        ? props.$colorPalette[props.$color].accentScale[3]
        : props.$colorPalette[props.$color].grayScale[1]};
  }
  &:active {
    background-color: ${(props) =>
      props.$selected
        ? props.$colorPalette[props.$color].accentScale[4]
        : props.$colorPalette[props.$color].grayScale[2]};
  }
  &:focus-visible {
    outline: 1px solid ${(props) => props.$colorPalette[props.$color].accentScale[6]};
  }
`;
const StyledNavBarIcon = styled.span`
  margin-left: auto;
`;
