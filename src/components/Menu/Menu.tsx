import React, { forwardRef, useEffect, useState } from "react";
import { MenuProps, MenuStyleProps } from "./Menu.types";
import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";
import styled from "styled-components";
import { usePopper } from "react-popper";
import { MenuItemProps } from "../MenuItem/MenuItem.types";
import ClickAwayListener from "../ClickAwayListener/ClickAwayListener";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const StyledMenuContainer = styled.div<MenuStyleProps>`
  display: ${(props) => (props.$open ? "block" : "none")};
  min-width: ${(props) => props.$minWidth};
  border: 1px solid #c4c4c4;
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  background-color: ${(props) => props.$colorPalette?.primary.grayScale[1]}
  color: ${(props) => props.$colorPalette?.primary.grayScale[11]};
  border:${(props) => `1px solid ${props.$colorPalette?.primary.grayScale[6]}`};
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

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      children,
      style,
      popperStyles,
      open = false,
      minWidth = "none",
      anchorElement,
      hideOnOutsideClick = true,
      // Events
      onClick,
      onClose,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(open ?? false);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
      null
    );
    useEffect(() => {
      setIsOpen(open ?? false);
    }, [open]);

    const { styles, attributes } = usePopper(anchorElement, popperElement, {
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
    const theme = useTheme().theme;
    if(!theme) return null;
    // const colorPalette = theme.colorPalette;


    const _onClick = (
      e: React.MouseEvent<HTMLLIElement>,
      { title, value }: MenuItemKeyProps
    ) => {
      onClick && onClick(e, { title, value });
    };
    const _onClose = (e: MouseEvent) => {
      setIsOpen(false);
      onClose && onClose(e);
    };

    if (!children) return null;
    if (Array.isArray(children) && children.length === 0) return null;

    const MenuElement = (
      <StyledMenuContainer
        ref={setPopperElement}
        $open={isOpen}
        $minWidth={minWidth}
        style={{ ...styles.popper, ...style }}
        {...attributes.popper}
      >
        <StyledMenu>
          {React.Children.map(children, (child, index) => {
            if (!child) return child;
            if (!React.isValidElement(child)) return child;

            return React.cloneElement(child, {
              key: child.props.index ?? index,
              onClick: _onClick,
            } as MenuItemProps);
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
