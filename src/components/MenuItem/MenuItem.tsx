import React from "react";
import Text from "../Text/Text";
import { MenuItemProps, MenuItemStyleProps } from "./MenuItem.types";
import styled, { css } from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const MenuItem = ({
  leadingIcon,
  trailingIcon,
  children,
  title,
  value,
  variant = "contained",
  color = colorTokens.default.primary.main,
  onClick,
}: MenuItemProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  const _onClick = (event: React.MouseEvent<HTMLLIElement>) => {
    onClick && onClick(event, { title, value });
  };

  return (
    <StyledMenuItem
      $variant={variant}
      $colorPalette={colorPalette}
      $color={color}
      onClick={_onClick}
    >
      {leadingIcon && <StyledMenuItemIcon>{leadingIcon}</StyledMenuItemIcon>}
      {children ? (
        typeof children === "string" ? (
          <StyledMenuItemContent
            $variant={variant}
            $color={color}
            $colorPalette={colorPalette}
          >
            <Text disableColor variant="paragraph">
              {children}
            </Text>
          </StyledMenuItemContent>
        ) : (
          <StyledMenuItemContent
            $variant={variant}
            $color={color}
            $colorPalette={colorPalette}
          >
            {children}
          </StyledMenuItemContent>
        )
      ) : (
        <StyledMenuItemContent
          $variant={variant}
          $color={color}
          $colorPalette={colorPalette}
        >
          <Text disableColor variant="paragraph">
            {title}
          </Text>
        </StyledMenuItemContent>
      )}
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
          background-color: "transparent";
          color: ${colorPalette[color].accentScale[10]};
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
      `;
  }
};
