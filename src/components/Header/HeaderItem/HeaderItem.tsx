import React from "react";
import { HeaderItemProps } from "./HeaderItem.types";
import Text from "../../Text/Text";

const HeaderItem = ({ children, className, style }: HeaderItemProps) => {
  return (
    <span className={className} style={style}>
      {typeof children === "string" ? (
        <Text variant="span">{children}</Text>
      ) : (
        children
      )}
    </span>
  );
};

export default HeaderItem;
