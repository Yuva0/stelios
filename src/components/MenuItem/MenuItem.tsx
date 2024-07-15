import React from "react";
import Text from "../Text/Text";
import useMenuItemStyles from "./MenuItem.styles";
import { MenuItemProps } from "./MenuItem.types";

const MenuItem = ({
  leadingIcon,
  trailingIcon,
  children,
  title,
  value,
  onClick,
}: MenuItemProps) => {
  const classNames = useMenuItemStyles({});

  const _onClick = (event: React.MouseEvent<HTMLLIElement>) => {
    onClick && onClick(event, { title, value });
  };

  return (
    <li className={classNames["ste-menu-item"]} onClick={_onClick}>
      {leadingIcon && (
        <span className={classNames["ste-menu-item-icon"]}>{leadingIcon}</span>
      )}
      {children ? (
        typeof children === "string" ? (
          <span className={classNames["ste-menu-item-content"]}>
            <Text variant="paragraph">{children}</Text>
          </span>
        ) : (
          <span className={classNames["ste-menu-item-content"]}>
            {children}
          </span>
        )
      ) : (
        <span className={classNames["ste-menu-item-content"]}>
          <Text variant="paragraph">{title}</Text>
        </span>
      )}
      {trailingIcon && (
        <span className={classNames["ste-menu-item-icon"]}>{trailingIcon}</span>
      )}
    </li>
  );
};

export default MenuItem;
