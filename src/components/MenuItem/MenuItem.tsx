import React from "react";
import Text from "../Text/Text";
import { MenuItemProps, MenuItemStyleProps } from "./MenuItem.types";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const StyledMenuItem = styled.li<MenuItemStyleProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 1rem 0.5rem 1rem;
  gap: 0.25rem;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.$colorGradient["primary"].grayScale[1]};
  }
  &:focus {
    background: ${(props) => props.$colorGradient["primary"].grayScale[1]};
    outline: ${(props) =>
      `1px solid ${props.$colorGradient["primary"].accentScale[5]}`};
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
  onClick,
}: MenuItemProps) => {
  const paletteColors = useTheme().theme.paletteColors;

  const _onClick = (event: React.MouseEvent<HTMLLIElement>) => {
    onClick && onClick(event, { title, value });
  };

  return (
    <StyledMenuItem $colorGradient={paletteColors} onClick={_onClick}>
      {leadingIcon && <StyledMenuItemIcon>{leadingIcon}</StyledMenuItemIcon>}
      {children ? (
        typeof children === "string" ? (
          <StyledMenuItemContent $colorGradient={paletteColors}>
            <Text variant="paragraph">{children}</Text>
          </StyledMenuItemContent>
        ) : (
          <StyledMenuItemContent $colorGradient={paletteColors}>
            {children}
          </StyledMenuItemContent>
        )
      ) : (
        <StyledMenuItemContent $colorGradient={paletteColors}>
          <Text variant="paragraph">{title}</Text>
        </StyledMenuItemContent>
      )}
      {trailingIcon && (
        <StyledMenuItemContent $colorGradient={paletteColors}>
          {trailingIcon}
        </StyledMenuItemContent>
      )}
    </StyledMenuItem>
  );
};

export default MenuItem;
