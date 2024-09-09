import React from "react";
import {
  NavigationBarGroupItemProps,
  NavigationBarGroupItemStyleProps,
} from "./NavigationBarGroupItem.types";
import styled from "styled-components";
import Text from "../../Text/Text";
import colorTokens from "../../../tokens/colors.json";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../../helpers/helpers";

const NavigationBarGroupItem = ({
  _index,
  value,
  children,
  leadingIcon,
  trailingIcon,
  className,
  style,
  size,
  selected,
  tabIndex = 0,
  color = colorTokens.default.primary.main,
  // Events
  _getSelectedIndex,
  onClick,
  "data-testid": dataTestId,
}: NavigationBarGroupItemProps) => {
  const [_selected, setSelected] = React.useState(selected);

  React.useEffect(() => {
    setSelected(selected);
  }, [selected]);
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  const _onClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    setSelected(true);
    _getSelectedIndex && _getSelectedIndex(_index, value);
    onClick && onClick(e);
  };
  const _handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      _onClick(e);
    }
  };

  return (
    <StyledNavBarGroupItem
      tabIndex={tabIndex}
      $selected={_selected}
      $colorPalette={colorPalette}
      $color={color}
      className={className}
      style={style}
      onClick={_onClick}
      onKeyDown={_handleKeyDown}
      data-testid={dataTestId}
    >
      {leadingIcon && (
        <StyledNavBarGrpItemIcon>{leadingIcon}</StyledNavBarGrpItemIcon>
      )}
      {typeof children === "string" ? (
        <Text color={color} variant="span" size={size}>
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
NavigationBarGroupItem.displayName = "NavigationBarGroupItem";
export default NavigationBarGroupItem;

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
    outline: 1px solid ${(props) => props.$colorPalette[props.$color].accentScale[5]};
  }
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    margin-left: 0.43rem;
    border-left: 1px solid
      ${(props) => props.$selected
        ? props.$colorPalette[props.$color].accentScale[5] : props.$colorPalette[props.$color].grayScale[5]};
    top: 0;
    left: 0;
  }
`;
const StyledNavBarGrpItemIcon = styled.span`
  margin-left: auto;
`;