import React from "react";
import { ListItemProps, ListItemStyleProps } from "./ListItem.types";
import styled from "styled-components";
import Text from "../../Text/Text";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../../helpers/helpers";
import colorTokens from "../../../tokens/colors.json";

const ListItem = ({
  children,
  style,
  className,
  size,
  color = colorTokens.default.primary.main,
}: ListItemProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  return (
    <StyledListItem
      style={style}
      className={className}
      $colorPalette={colorPalette}
      $color={color}
    >
      {typeof children === "string" ? (
        <Text color={color} size={size} variant="paragraph">
          {children}
        </Text>
      ) : (
        children
      )}
    </StyledListItem>
  );
};
export default ListItem;

const StyledListItem = styled.li<ListItemStyleProps>`
  ${(props) => {
    return `
      color: ${props.$color};
    `;
  }}
`;
