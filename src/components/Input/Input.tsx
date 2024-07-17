import React, { forwardRef } from "react";
import { InputProps, InputStyleProps } from "./Input.types";
import Text from "../Text/Text";
import useInputStyles from "./Input.styles";

const Input = forwardRef<HTMLDivElement, InputProps>(
  (
    {
      placeholder,
      color = "secondary",
      label,
      type = "text",
      size = "medium",
      width = "15rem",
      value,
      leadingIcon,
      trailingIcon,
      labelPosition = "top",
      cursor = "text",
      disableSearch,
      inputBgColor,

      // Events
      onChange,
      onClick,
      onKeyDown,

      ...props
    }: InputProps,
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = React.useState(false);
    const [inputValue, setInputValue] = React.useState<string | string[]>(
      value ?? ""
    );

    React.useEffect(() => {
      setInputValue(value ?? "");
    }, [value]);

    const classNames = useInputStyles({
      color,
      width,
      size,
      hasLeadingIcon: !!leadingIcon,
      hasTrailingIcon: !!trailingIcon,
      isFocused,
      inputBgColor,
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
      onClick && onClick(e);
    };

    const _onFocus = () => {
      setIsFocused(true);
    };
    const _onBlur = () => {
      setIsFocused(false);
    };

    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onChange && onChange(e);
    };

    const _onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      onKeyDown && onKeyDown(e);
    };

    return (
      <div
        ref={ref}
        className={classNames["ste-input"]}
        {...props}
        onClick={_onClick}
        onKeyDown={_onKeyDown}
      >
        {labelPosition && labelPosition === "top" ? Label : null}
        <div className={classNames["ste-input-content"]}>
          {leadingIcon && (
            <span className={classNames["ste-input-icon"]}>{leadingIcon}</span>
          )}
          {!disableSearch ? (
            <input
              type={type}
              value={inputValue}
              onFocus={_onFocus}
              onBlur={_onBlur}
              ref={inputRef}
              placeholder={placeholder}
              onChange={_onChange}
            />
          ) : (
            <span className="ste-input-content">{value}</span>
          )}
          {trailingIcon && (
            <span className={classNames["ste-input-icon"]}>{trailingIcon}</span>
          )}
        </div>
        {labelPosition && labelPosition === "bottom" ? Label : null}
      </div>
    );
  }
);

export default React.memo(Input);
