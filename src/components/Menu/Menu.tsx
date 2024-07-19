import React, { forwardRef, useEffect } from "react";
import { MenuProps, MenuStyleProps } from "./Menu.types";
import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";
import styled from "styled-components";

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
      //Events
      onClick,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(open ?? false);

    useEffect(() => {
      setIsOpen(open ?? false);
    }, [open]);

    const _onClick = (
      e: React.MouseEvent<HTMLLIElement>,
      { title, value }: MenuItemKeyProps
    ) => {
      onClick && onClick(e, { title, value });
    };

    if (!children) return null;
    if (Array.isArray(children) && children.length === 0) return null;

    return (
      <StyledMenuContainer
        $open={isOpen}
        $minWidth={minWidth}
        ref={ref}
        style={style}
      >
        <StyledMenu>
          {React.Children.map(children, (child, index) => {
            if (!child) return child;
            if (!React.isValidElement(child)) return child;

            // Remove any typescript later
            return React.cloneElement(child as any, {
              key: child.props.index ?? index,
              onClick: _onClick,
            });
          })}
        </StyledMenu>
      </StyledMenuContainer>
    );
  }
);

export default Menu;
