import { MenuItemProps } from "@material-ui/core";
import React from "react";
import Text from "../Text/Text";
import useMenuItemStyles from "./MenuItem.styles";

const MenuItem = ({ children }: MenuItemProps) => {
  const classNames = useMenuItemStyles({});
  return (
    <li className={classNames["ste-menu-item"]}>
      {typeof children === "string" ? (
        <Text variant="paragraph">{children}</Text>
      ) : (
        children
      )}
    </li>
  );
};

export default MenuItem;
