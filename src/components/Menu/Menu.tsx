import React, { forwardRef, useEffect } from "react";
import useMenuStyles from "./Menu.styles";
import { MenuProps } from "./Menu.types";
import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ children, style, open, minWidth, onClick }: MenuProps, ref) => {
    const [isOpen, setIsOpen] = React.useState(open ?? false);

    useEffect(() => {
      setIsOpen(open ?? false);
    }, [open]);
    const classes = useMenuStyles({
      open: isOpen,
      minWidth: minWidth,
    });

    const _onClick = (
      e: React.MouseEvent<HTMLLIElement>,
      { title, value }: MenuItemKeyProps
    ) => {
      onClick && onClick(e, { title, value });
    };

    if (!children) return;

    return (
      <div className={classes["ste-menu-container"]} ref={ref} style={style}>
        <ul className={classes["ste-menu"]}>
          {React.Children.map(children, (child, index) => {
            if (!child) return child;
            if (!React.isValidElement(child)) return child;

            // Remove any typescript later
            return React.cloneElement(child as any, {
              key: child.props.index ?? index,
              onClick: _onClick,
            });
          })}
        </ul>
      </div>
    );
  }
);

export default Menu;
