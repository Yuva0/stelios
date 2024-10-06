import React, { useEffect, useRef } from "react";
import Text from "../Text/Text";
import {
  MenuItemPrivateProps,
  MenuItemProps,
  MenuItemStyleProps,
} from "./MenuItem.types";
import styled, { css } from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const MenuItem: React.FC<MenuItemProps> = ({
  leadingIcon,
  trailingIcon,
  children,
  title,
  value,
  variant = "contained",
  color = colorTokens.default.primary.main,
  onClick,
  // Test Props
  "data-testid": dataTestId,

  pvtHasFocus,
  pvtOnClick,
}: MenuItemProps & MenuItemPrivateProps) => {
  const menuItemRef = useRef<HTMLLIElement>(null);
  const theme = useTheme().theme;
  useEffect(() => {
    if (pvtHasFocus && menuItemRef.current) {
      menuItemRef.current.focus();
    }
  }, [menuItemRef, pvtHasFocus]);

  const colorPalette = getColorPalette(theme, color);

  const _onClick = (event: React.MouseEvent<HTMLLIElement>) => {
    pvtOnClick && pvtOnClick(event, { title, value });
    onClick && onClick(event, { title, value });
  };
  const _onKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      pvtOnClick && pvtOnClick(event, { title, value });
      onClick && onClick(event, { title, value });
    }
  };

  return (
    <StyledMenuItem
      ref={menuItemRef}
      tabIndex={pvtHasFocus ? 0 : -1}
      $variant={variant}
      $colorPalette={colorPalette}
      $color={color}
      onClick={_onClick}
      onKeyDown={_onKeyDown}
      data-testid={dataTestId}
    >
      {leadingIcon && <StyledMenuItemIcon>{leadingIcon}</StyledMenuItemIcon>}
      <StyledMenuItemContent
        $variant={variant}
        $color={color}
        $colorPalette={colorPalette}
      >
        {children ? (
          typeof children === "string" ? (
            <Text disableColor variant="paragraph">
              {children}
            </Text>
          ) : (
            children
          )
        ) : (
          <Text disableColor variant="paragraph">
            {title}
          </Text>
        )}
      </StyledMenuItemContent>
      {trailingIcon && (
        <StyledMenuItemContent
          $variant={variant}
          $color={color}
          $colorPalette={colorPalette}
        >
          {trailingIcon}
        </StyledMenuItemContent>
      )}
    </StyledMenuItem>
  );
};
export default MenuItem;

const StyledMenuItem = styled.li<MenuItemStyleProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 1rem 0.5rem 1rem;
  gap: 0.25rem;
  cursor: pointer;
  ${(props) =>
    variantStyleHandler(props.$variant, props.$colorPalette, props.$color)}
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

const variantStyleHandler = (
  variant: MenuItemStyleProps["$variant"],
  colorPalette: MenuItemStyleProps["$colorPalette"],
  color: MenuItemStyleProps["$color"]
) => {
  switch (variant) {
    case "contained":
      return css`
        background-color: ${colorPalette[color].accentScale[8]};
        color: ${colorPalette[color].accentContrast};

        &:hover {
          background-color: ${colorPalette[color].accentScale[9]};
          color: ${colorPalette[color].accentContrast};
        }

        &:active {
          background-color: ${colorPalette[color].accentScale[9]};
          color: ${colorPalette[color].accentContrast};
        }

        &:focus-visible {
          outline: 2px solid ${colorPalette[color].accentScale[10]};
          border-radius: 0.25rem;
          outline-offset: -0.125rem;
        }
      `;
    case "outlined":
      return css`
        background-color: transparent;
        color: ${colorPalette[color].accentScale[10]};

        &:hover {
          background-color: ${colorPalette[color].grayScale[1]};
          color: ${colorPalette[color].accentScale[10]};
        }

        &:active {
          background-color: transparent;
          color: ${colorPalette[color].accentScale[10]};
        }

        &:focus-visible {
          outline: 2px solid ${colorPalette[color].accentScale[10]};
          border-radius: 0.25rem;
          outline-offset: -0.125rem;
        }
      `;
    case "soft":
      return css`
        background-color: ${colorPalette[color].accentScale[2]};
        color: ${colorPalette[color].accentScale[10]};

        &:hover {
          background-color: ${colorPalette[color].accentScale[3]};
          color: ${colorPalette[color].accentScale[10]};
        }

        &:active {
          background-color: ${colorPalette[color].accentScale[3]};
          color: ${colorPalette[color].accentScale[10]};
        }

        &:focus-visible {
          outline: 2px solid ${colorPalette[color].accentScale[10]};
          border-radius: 0.25rem;
          outline-offset: -0.125rem;
        }
      `;
    case "neumorph":
      return css`
        background-color: transparent;
        color: ${colorPalette[color].accentScale[10]};

        &:hover {
          background-color: ${colorPalette[color].grayScale[0]};
          color: ${colorPalette[color].accentScale[10]};
        }
        
        &:active {
          background-color: ${colorPalette[color].grayScale[1]};
          color: ${colorPalette[color].accentScale[10]};
        }
        
        &:focus-visible {
          background-color: ${colorPalette[color].accentScale[0]};
          outline: none;
          border-radius: 0.25rem;
          outline-offset: -0.125rem;
        }
      `
  }
};
