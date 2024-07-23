import React from "react";
import {
  NavigationBarGroupItemProps,
  NavigationBarGroupItemStyleProps,
} from "./NavigationBarGroupItem.types";
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
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    margin-left: 0.43rem;
    border-left: 1px solid
      ${(props) => props.$selected
        ? props.$colorPalette.primary.accentScale[5] : props.$colorPalette.primary.grayScale[5]};
    top: 0;
    left: 0;
  }
`;

const StyledNavBarGrpItemIcon = styled.span`
  margin-left: auto;
`;

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
  // Events
  _getSelectedIndex,
  onClick,
}: NavigationBarGroupItemProps) => {
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
    <StyledNavBarGroupItem
      $selected={_selected}
      $colorPalette={colorPalette}
      className={className}
      style={style}
      onClick={_onClick}
    >
      {leadingIcon && (
        <StyledNavBarGrpItemIcon>{leadingIcon}</StyledNavBarGrpItemIcon>
      )}
      {typeof children === "string" ? (
        <Text noColor variant="span" size={size}>
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
