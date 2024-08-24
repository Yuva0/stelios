import React from "react";
import Text from "../Text/Text";
import { MenuItemProps, MenuItemStyleProps } from "./MenuItem.types";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const StyledMenuItem = styled.li<MenuItemStyleProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 1rem 0.5rem 1rem;
  gap: 0.25rem;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.$colorPalette[props.$color].grayScale[2]};
  }
  &:focus {
    background: ${(props) => props.$colorPalette[props.$color].grayScale[3]};
    outline: ${(props) =>
      `1px solid ${props.$colorPalette[props.$color].accentScale[5]}`};
    outline-offset: -1px;
    border-radius: 0.25rem;
  }
`;
const StyledMenuItemContent = styled.span<MenuItemStyleProps>`
  width: 100%;
`;
const StyledMenuItemIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  & svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const MenuItem = ({
  leadingIcon,
  trailingIcon,
  children,
  title,
  value,
  color = colorTokens.default.primary.main,
  onClick,
}: MenuItemProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme,color);

  const _onClick = (event: React.MouseEvent<HTMLLIElement>) => {
    onClick && onClick(event, { title, value });
  };

  return (
    <StyledMenuItem $colorPalette={colorPalette} $color={color} onClick={_onClick}>
      {leadingIcon && <StyledMenuItemIcon>{leadingIcon}</StyledMenuItemIcon>}
      {children ? (
        typeof children === "string" ? (
          <StyledMenuItemContent $color={color} $colorPalette={colorPalette}>
            <Text disableColor variant="paragraph">{children}</Text>
          </StyledMenuItemContent>
        ) : (
          <StyledMenuItemContent $color={color} $colorPalette={colorPalette}>
            {children}
          </StyledMenuItemContent>
        )
      ) : (
        <StyledMenuItemContent $color={color} $colorPalette={colorPalette}>
          <Text disableColor variant="paragraph">{title}</Text>
        </StyledMenuItemContent>
      )}
      {trailingIcon && (
        <StyledMenuItemContent $color={color} $colorPalette={colorPalette}>
          {trailingIcon}
        </StyledMenuItemContent>
      )}
    </StyledMenuItem>
  );
};

export default MenuItem;
