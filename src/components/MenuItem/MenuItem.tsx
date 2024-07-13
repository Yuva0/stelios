import React from "react";
import Text from "../Text/Text";
import useMenuItemStyles from "./MenuItem.styles";
import { MenuItemProps } from "./MenuItem.types";

const MenuItem = ({ children, title, value, onClick }: MenuItemProps) => {
  const classNames = useMenuItemStyles({});

  const _onClick = (event: React.MouseEvent<HTMLLIElement>) => {
    onClick && onClick(event, { title, value });
  };

  return (
    <li className={classNames["ste-menu-item"]} onClick={_onClick}>
      {children ? (
        typeof children === "string" ? (
          <Text variant="paragraph">{children}</Text>
        ) : (
          children
        )
      ) : (
        <Text variant="paragraph">{title}</Text>
      )}
    </li>
  );
};

export default MenuItem;
