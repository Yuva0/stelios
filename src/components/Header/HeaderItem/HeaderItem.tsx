import React from "react";
import { HeaderItemProps } from "./HeaderItem.types";

const HeaderItem = ({
  children,
  className,
  style,
}: HeaderItemProps) => {
  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
};

export default HeaderItem;
