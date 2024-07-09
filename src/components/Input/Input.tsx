import React, { forwardRef } from "react";
import { InputProps } from "./Input.types";
import Text from "../Text/Text";
import useInputStyles from "./Input.styles";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      color = "secondary",
      label,
      size = "medium",
      width = "15rem",
      leadingIcon,
      trailingIcon,
      labelPosition = "top",

      // Events
      onChange,

      ...props
    }: InputProps,
    ref
  ) => {
    const innerRef = React.useRef<HTMLInputElement>(null);
    const _ref = (ref ?? innerRef) as React.RefObject<HTMLInputElement>;
    const [isFocused, setIsFocused] = React.useState(false);

    const classNames = useInputStyles({
      color,
      width,
      size,
      hasLeadingIcon: !!leadingIcon,
      hasTrailingIcon: !!trailingIcon,
      isFocused,
    });

    const Label = label ? (
      typeof label === "string" ? (
        <span className={classNames["ste-input-label"]}>
          <Text variant="label" size={size}>
            {label}
          </Text>
        </span>
      ) : (
        label
      )
    ) : null;

    // Events
    const _onClick = () => {
      _ref.current?.focus();
      setIsFocused(true);
    };

    const _onBlur = () => {
      setIsFocused(false);
    };

    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
    };

    return (
      <div
        className={classNames["ste-input"]}
        {...props}
        onClick={_onClick}
        onBlur={_onBlur}
      >
        {labelPosition && labelPosition === "top" ? Label : null}
        <div className={classNames["ste-input-content"]}>
          {leadingIcon && (
            <span className={classNames["ste-input-icon"]}>{leadingIcon}</span>
          )}
          <input ref={_ref} placeholder={placeholder} onChange={_onChange} />
          {trailingIcon && (
            <span className={classNames["ste-input-icon"]}>{trailingIcon}</span>
          )}
        </div>
        {labelPosition && labelPosition === "bottom" ? Label : null}
      </div>
    );
  }
);

export default Input;
