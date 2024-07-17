import React from "react";
import { ButtonInternalProps, ButtonProps } from "./Button.types";
import { useButtonStyles } from "./Button.styles";
import Text from "../Text/Text";

const ButtonInternal = ({
  leadingIcon,
  trailingIcon,
  size = "medium",
  variant = "contained",
  color = "primary",
  disabled,
  children,
  fullWidth,

  // Events
  onClick,
  ...rest
}: ButtonProps & ButtonInternalProps) => {
  const classNames = useButtonStyles({
    size,
    variant,
    color,
    disabled,
    fullWidth,
  });

  return (
    <button
      aria-disabled={disabled}
      className={classNames["ste-button"]}
      onClick={onClick}
      {...rest}
    >
      {leadingIcon && (
        <span className={classNames["ste-button-leading-icon"]}>
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
        <span className={classNames["ste-button-trailing-icon"]}>
          {trailingIcon}
        </span>
      )}
    </button>
  );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <ButtonInternal ref={ref} {...props} />
);

export default Button;
