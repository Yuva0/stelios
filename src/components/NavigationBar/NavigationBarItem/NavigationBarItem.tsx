import React from "react";
import {
  NavigationBarItemProps,
  NavigationBarItemStyleProps,
} from "./NavigationBarItem.types";
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
  color: ${(props) =>
    props.$selected
      ? props.$colorPalette.primary.accentScale[10]
      : props.$colorPalette.primary.grayScale[11]};
  background-color: ${(props) =>
    props.$selected
      ? props.$colorPalette.primary.accentScale[2]
      : props.$colorPalette.primary.grayScale[0]};
  &:hover {
    background-color: ${(props) =>
      props.$selected
        ? props.$colorPalette.primary.accentScale[3]
        : props.$colorPalette.primary.grayScale[1]};
  }
  &:active {
    background-color: ${(props) =>
      props.$selected
        ? props.$colorPalette.primary.accentScale[4]
        : props.$colorPalette.primary.grayScale[2]};
  }
`;

const StyledNavBarIcon = styled.span`
  margin-left: auto;
`;

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
  // Events
  _getSelectedIndex,
  onClick,
}: NavigationBarItemProps) => {
  const colorPalette = useTheme().theme.colorPalette;
  const [_selected, setSelected] = React.useState(selected);

  React.useEffect(() => {
    setSelected(selected);
  }, [selected]);

  const _onClick = (e: React.MouseEvent) => {
    setSelected(true);
    _getSelectedIndex && _getSelectedIndex(_index, value);
    onClick && onClick(e);
  };

  return (
    <StyledNavBarItem
      $selected={_selected}
      $colorPalette={colorPalette}
      className={className}
      style={style}
      onClick={_onClick}
    >
      {leadingIcon && <StyledNavBarIcon>{leadingIcon}</StyledNavBarIcon>}
      {typeof children === "string" ? (
        <Text noColor variant="span" size={size}>
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
