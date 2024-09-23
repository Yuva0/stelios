import React from "react";
import styled from "styled-components";
import { SideBarItemProps, SideBarItemStyleProps } from "./SideBarItem.types";
import Link from "../../Link/Link";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../../helpers/helpers";
import colorTokens from "../../../tokens/colors.json";

const SideBarItem = ({
  _index,
  value,
  children,
  className,
  style,
  size,
  selected,
  color = colorTokens.default.primary.main,
  //Events
  onClick,
  _getSelectedIndex,
  "data-testid": dataTestId,
  ...props
}: SideBarItemProps) => {
  const [_selected, setSelected] = React.useState(selected);
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  React.useEffect(() => {
    setSelected(selected)
  },[selected]);

  const _onClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    setSelected(true);
    _getSelectedIndex && _getSelectedIndex(_index, value);
    onClick && onClick(e);
  }

  return (
    <StyledSideBarItem
      $colorPalette={colorPalette}
      $color={color}
      onClick={_onClick}
      $selected={_selected}
      className={className}
      style={style}
      data-testid={dataTestId}
      {...props}
    >
      {typeof children === "string" ? (
        <Link
          tabIndex={onClick ? 0 : undefined}
          preciseColor={_selected ? colorPalette![color].accentScale[10] : colorPalette![color].grayScale[11]}
          size={size}
          variant="hover"
          className={className}
          style={style}
          onClick={_onClick}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </StyledSideBarItem>
  );
};
export default SideBarItem;
SideBarItem.displayName = "SideBarItem";

const StyledSideBarItem = styled.div<SideBarItemStyleProps>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem 0.25rem 1rem;
  width: fit-content;
  positon: relative;
  color: ${(props) =>
    props.$selected
      ? props.$colorPalette[props.$color].accentScale[11]
      : props.$colorPalette[props.$color].grayScale[11]};
`;