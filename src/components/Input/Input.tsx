import React, { forwardRef } from "react";
import { InputProps } from "./Input.types";
import Text from "../Text/Text";
import useInputStyles from "./Input.styles";

const Input = forwardRef<HTMLDivElement, InputProps>(
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
      cursor = "text",

      // Events
      onChange,
      onClick,

      ...props
    }: InputProps,
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = React.useState(false);

    const classNames = useInputStyles({
      color,
      width,
      size,
      hasLeadingIcon: !!leadingIcon,
      hasTrailingIcon: !!trailingIcon,
      isFocused,
      cursor,
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

    const _onClick = (e: React.MouseEvent<HTMLDivElement>) => {
      inputRef.current?.focus();
      setIsFocused(true);
      onClick && onClick(e);
    };

    const _onFocus = () => {
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
        ref={ref}
        className={classNames["ste-input"]}
        {...props}
        onClick={_onClick}
        onFocus={_onFocus}
        onBlur={_onBlur}
      >
        {labelPosition && labelPosition === "top" ? Label : null}
        <div className={classNames["ste-input-content"]}>
          {leadingIcon && (
            <span className={classNames["ste-input-icon"]}>{leadingIcon}</span>
          )}
          <input
            ref={inputRef}
            placeholder={placeholder}
            onChange={_onChange}
          />
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
