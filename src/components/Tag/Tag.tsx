import React from "react";
import { TagProps } from "./Tag.types";
import Text from "../Text/Text";
import useTagStyles from "./Tag.styles";

const Tag = ({
  size = "medium",
  color = "primary",
  variant = "contained",
  children,
  leadingIcon,
  trailingIcon,
  className,
  disableClick,
  style,

  // Events
  onClick,
}: TagProps) => {
  const classNames = useTagStyles({
    size,
    color,
    variant,
    disableClick,
  });

  return (
    <div className={`${classNames["ste-tag"]} ${className}`} onClick={onClick}>
      {leadingIcon && (
        <span className={classNames["ste-tag-leading-icon"]}>
          {leadingIcon}
        </span>
      )}
      {typeof children === "string" ? (
        <Text variant="span" size={size}>
          {children}
        </Text>
      ) : (
        children
      )}
      {trailingIcon && (
        <span className={classNames["ste-tag-trailing-icon"]}>
          {trailingIcon}
        </span>
      )}
    </div>
  );
};

export default Tag;
