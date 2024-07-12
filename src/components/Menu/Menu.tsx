import React, { forwardRef, useEffect } from "react";
import useMenuStyles from "./Menu.styles";
import { MenuProps } from "./Menu.types";

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ children, style, open, minWidth }: MenuProps, ref) => {
    const [isOpen, setIsOpen] = React.useState(open ?? false);

    useEffect(() => {
      console.log("open", isOpen);
      setIsOpen(open ?? false);
    }, [open]);

    const classes = useMenuStyles({
      open: isOpen,
      minWidth: minWidth,
    });

    return (
      <div className={classes["ste-menu-container"]} ref={ref} style={style}>
        <ul className={classes["ste-menu"]}>{children}</ul>
      </div>
    );
  }
);

export default Menu;
