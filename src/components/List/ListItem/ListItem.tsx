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
  size = "medium",
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
      $size={size}
    >
      {typeof children === "string" ? (
        <Text disableColor size={size} variant="paragraph">
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
      font-size: ${props.$size === "large" ? "1.25rem" : props.$size === "medium" ? "1rem" : "0.875rem"};
      color: ${props.$colorPalette[props.$color].accentScale[10]};
    `;
  }}
`;
