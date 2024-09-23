import React from "react";
import {
  SideBarGroupItemProps,
  SideBarGroupItemStyleProps,
} from "./SideBarGroupItem.types";
import styled from "styled-components";
import Link from "../../Link/Link";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../../helpers/helpers";
import colorTokens from "../../../tokens/colors.json";

const StyledSideBarGroupItem = styled.div<SideBarGroupItemStyleProps>`
  display: flex;
  padding: 0.25rem 0.5rem 0.25rem 1.75rem;
`;

const SideBarGroupItem = ({
  _index,
  value,
  children,
  className,
  style,
  size,
  selected,
  color = colorTokens.default.primary.main,
  // Events
  onClick,
  _getSelectedIndex,
  "data-testid": dataTestId,
  ...props
}: SideBarGroupItemProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);
  const [_selected, setSelected] = React.useState(selected);

  React.useEffect(() => {
    setSelected(selected)
  },[selected]);

  const _onClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    setSelected(true);
    _getSelectedIndex && _getSelectedIndex(_index, value);
    onClick && onClick(e);
  };

  return (
    <StyledSideBarGroupItem
      $colorPalette={colorPalette}
      $color={color}
      className={className}
      style={style}
      onClick={_onClick}
      data-testid={dataTestId}
      {...props}
    >
      {typeof children === "string" ? (
        <Link
          tabIndex={onClick ? 0 : undefined}
          size={size}
          variant="hover"
          preciseColor={_selected ? colorPalette![color].accentScale[10] : colorPalette![color].grayScale[11]}
          className={className}
          style={style}
          onClick={_onClick}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </StyledSideBarGroupItem>
  );
};
SideBarGroupItem.displayName = "SideBarGroupItem";

export default SideBarGroupItem;
