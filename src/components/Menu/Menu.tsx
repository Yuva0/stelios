import React, { forwardRef, useCallback, useEffect, useState } from "react";
import { MenuProps, MenuStyleProps } from "./Menu.types";
import { MenuItemKeyProps, MenuItemPrivateProps } from "../MenuItem/MenuItem.types";
import styled, { css } from "styled-components";
import { usePopper } from "react-popper";
import { MenuItemProps } from "../MenuItem/MenuItem.types";
import ClickAwayListener from "../ClickAwayListener/ClickAwayListener";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      children,
      popperStyles,
      variant = "contained",
      open = false,
      minWidth = "0",
      anchorElement,
      hideOnOutsideClick = true,
      color = colorTokens.default.primary.main,
      className,
      style,
      // Events
      onClick,
      onClose,
      "data-testid": dataTestId,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(open);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
      null
    );
    const [focusVisible, setFocusVisible] = useState<number>(0);
    const theme = useTheme().theme;
    const colorPalette = getColorPalette(theme, color);
    const { styles, attributes, update } = usePopper(anchorElement, popperElement, {
      placement: (popperStyles && popperStyles.placement) ?? "bottom-start",
      modifiers: (popperStyles && popperStyles.modifiers) ?? [
        {
          name: "offset",
          options: {
            offset: [0, 2.5],
          },
        },
      ],
    });

    // Update popper position when anchor element changes
    useEffect(() => {
      update && update();
    }, [anchorElement, update]);

    useEffect(() => {
      setIsOpen(open);
    }, [open]);
    useEffect(() => {
      setFocusVisible(0);
    },[isOpen]);

    const _onClick = useCallback((
      e: React.MouseEvent<HTMLLIElement>,
      { title, value }: MenuItemKeyProps
    ) => {
      onClick && onClick(e, { title, value });
    },[onClick]);

    const _onClose = useCallback((e: MouseEvent) => {
      setIsOpen(false);
      onClose && onClose(e);
    },[onClose]);

    const _onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
      if(e.key === "ArrowDown") {
        e.preventDefault();
        setFocusVisible((prev) => (prev + 1) % React.Children.count(children));
      }
      else if(e.key === "ArrowUp"){
        e.preventDefault();
        setFocusVisible((prev) => (prev - 1 + React.Children.count(children)) % React.Children.count(children));
      }
    },[children]);

    if (Array.isArray(children) && children.length === 0) return null;

    const MenuElement = (
      <StyledMenuContainer
        ref={setPopperElement}
        $open={isOpen}
        $minWidth={minWidth}
        $colorPalette={colorPalette}
        $color={color}
        $variant={variant}
        style={{ ...styles.popper, ...style }}
        onKeyDown={_onKeyDown}
        data-testid={dataTestId}
        className={className}
        {...attributes.popper}
        {...props}
      >
        <StyledMenu>
          {React.Children.map(children, (child, index) => {
            if (!child) return child;
            if (!React.isValidElement(child)) return child;
            return React.cloneElement(child, {
              key: index,
              ...(!child.props.color && { color: color }),
              ...(!child.props.variant && { variant: variant }),
              pvtHasFocus: focusVisible === index,
              pvtOnClick: _onClick,
            } as MenuItemProps & MenuItemPrivateProps);
          })}
        </StyledMenu>
      </StyledMenuContainer>
    );

    if (hideOnOutsideClick) {
      return (
        <ClickAwayListener onClickAway={_onClose}>
          {MenuElement}
        </ClickAwayListener>
      );
    }

    return MenuElement;
  }
);
export default Menu;

const variantStyleHandler = (
  variant: MenuStyleProps["$variant"],
  colorPalette: MenuStyleProps["$colorPalette"],
  color: MenuStyleProps["$color"]
) => {
  switch (variant) {
    case "contained":
      return css`
        background-color: ${colorPalette[color].accentScale[8]};
        color: ${colorPalette[color].accentContrast};
        border: 2px solid ${colorPalette[color].accentScale[8]};
      `;
    case "outlined":
      return css`
        background-color: ${colorPalette[color].appearance === "light" ? "#fff" : "#000"};
        color: ${colorPalette[color].accentScale[10]};
        border: 2px solid ${colorPalette[color].accentScale[5]};
      `;
    case "soft":
      return css`
        background-color: ${colorPalette[color].accentScale[2]};
        color: ${colorPalette[color].accentScale[10]};
        border: 2px solid ${colorPalette[color].accentScale[2]};
      `;
    case "neumorph":
      return css`
        background-color: ${colorPalette[color].appearance === "light" ? "#fff" : "#000"};
        color: ${colorPalette[color].accentScale[10]};
        box-shadow: 0 6px 6px rgba(0, 0, 0, .1), 6px -6px 12px rgba(0, 0, 0, 0.1);
      `;
  }
};

const StyledMenuContainer = styled.div<MenuStyleProps>`
  display: ${(props) => (props.$open ? "block" : "none")};
  min-width: ${(props) => props.$minWidth};
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  ${props => variantStyleHandler(props.$variant, props.$colorPalette, props.$color)}
  
`;
const StyledMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  list-style-type: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  user-select: none;
`;


