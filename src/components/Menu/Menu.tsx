import React, { forwardRef, useEffect, useRef, useState } from "react";
import { MenuProps, MenuStyleProps } from "./Menu.types";
import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";
import styled from "styled-components";
import { usePopper } from "react-popper";

const StyledMenuContainer = styled.div<MenuStyleProps>`
  display: ${(props) => (props.$open ? "block" : "none")};
  min-width: ${(props) => props.$minWidth};
  border: 1px solid #c4c4c4;
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  background-color: #fff;
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
      open = false,
      minWidth = "none",
      anchorElement,
      // Events
      onClick,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(open ?? false);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
      setIsOpen(open ?? false);
    }, [open]);

    const { styles, attributes } = usePopper(
      anchorElement,
      popperElement,
      {
        placement: "bottom-start",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 2.5],
            },
          },
        ],
      }
    );

    // const _onClick = (
    //   e: React.MouseEvent<HTMLLIElement>,
    //   { title, value }: MenuItemKeyProps
    // ) => {
    //   onClick && onClick(e, { title, value });
    // };

    if (!children) return null;
    if (Array.isArray(children) && children.length === 0) return null;

    return (
      <StyledMenuContainer
        ref={setPopperElement}
        $open={isOpen}
        $minWidth={minWidth}
        style={{ ...styles.popper }}
        {...attributes.popper}
      >
        <StyledMenu>
          {React.Children.map(children, (child, index) => {
            if (!child) return child;
            if (!React.isValidElement(child)) return child;

            return React.cloneElement(child, {
              key: child.props.index ?? index,
              // onClick: _onClick as React.MouseEventHandler<HTMLLIElement>,
            });
          })}
        </StyledMenu>
      </StyledMenuContainer>
    );
  }
);

export default Menu;
