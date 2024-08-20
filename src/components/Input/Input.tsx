import React, { forwardRef } from "react";
import { InputProps, InputStyleProps } from "./Input.types";
import Text from "../Text/Text";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const getIconSize = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return "1rem";
    case "medium":
      return "1.25rem";
    case "large":
      return "1.5rem";
  }
  return "1.5rem";
};

const getFontSize = (props: InputStyleProps) => {
  switch (props.$size) {
    case "small":
      return { fontSize: "0.875rem", lineHeight: "2rem" };
    case "medium":
      return { fontSize: "1rem", lineHeight: "2.5rem" };
    case "large":
      return { fontSize: "1rem", lineHeight: "3rem" };
  }
  return { fontSize: "1rem", lineHeight: "2.5rem" };
};

const getPadding = (
  size?: InputProps["size"],
  hasLeadingIcon?: boolean,
  hasTrailingIcon?: boolean
) => {
  switch (size) {
    case "small":
      if (hasLeadingIcon && hasTrailingIcon) return "0 8px";
      if (hasLeadingIcon) return "0 12px 0 8px";
      if (hasTrailingIcon) return "0 8px 0 12px";
      return "0 12px";
    case "medium":
      if (hasLeadingIcon && hasTrailingIcon) return "0 8px";
      if (hasLeadingIcon) return "0 12px 0 8px";
      if (hasTrailingIcon) return "0 8px 0 12px";
      return "0 16px";

    case "large":
      if (hasLeadingIcon && hasTrailingIcon) return "0 12px";
      if (hasLeadingIcon) return "0 16px 0 12px";
      if (hasTrailingIcon) return "0 12px 0 16px";
      return "0 20px";
  }
  return "0 16px";
};

const StyledLabel = styled.span`
  margin-left: 4px;
`;

const StyledInput = styled.div<InputStyleProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.$width};
  gap: 4px;
  user-select: none;
`;

const StyledInputIcon = styled.div<InputStyleProps>`
  color: ${(props) => props.$colorGradient[props.$color].grayScale[8]};
  cursor: pointer;
  width: ${(props) => getIconSize(props.$size)};
  height: ${(props) => getIconSize(props.$size)};
  &:hover {
    background-color: ${(props) =>
      props.$colorGradient[props.$color].grayScale[2]};
    border-radius: 50%;
  }
  & svg {
    width: ${(props) => getIconSize(props.$size)};
    height: ${(props) => getIconSize(props.$size)};
  }
`;

const StyledInputContent = styled.div<InputStyleProps>`
  border-radius: 8px;
  border:${(props) => `1px solid ${props.$colorGradient[props.$color].grayScale[6]}`};
  outline: ${(props) => (props.$isFocused ? `2px solid ${props.$colorGradient[props.$color].accentScale[6]}` : "none")};
  outline-offset:-1px;
  padding: ${(props) => getPadding(props.$size, props.$hasLeadingIcon, props.$hasTrailingIcon)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: ${(props) => props.$cursor ?? "text"};
  user-select: none;
  background-color: ${(props) => props.$inputBgColor ?? props.$colorGradient[props.$color].grayScale[1]};
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  & input {
      font-family: 'Varela Round', sans-serif;
      padding: 0;
      margin: 0;
      border: 0;
      width: 100%;
      cursor: ${(props) => props.$cursor ?? "text"};
      font-size: ${(props) => getFontSize(props).fontSize};
      line-height: ${(props) => getFontSize(props).lineHeight};
      outline-offset: -1px;
      background-color: ${(props) => props.$inputBgColor ?? props.$colorGradient[props.$color].grayScale[1]};
      color: ${(props) => props.$colorGradient[props.$color].grayScale[11]};
      &::placeholder {
        color: ${(props) => props.$colorGradient[props.$color].grayScale[8]};
      },
      &:focus-visible {
          outline: none;
      },
  };
  & span.ste-input-content {
      font-family: 'Varela Round', sans-serif;
      height: ${(props) => getFontSize(props).lineHeight};
      width: 100%;
      font-size: ${(props) => getFontSize(props).fontSize};
      line-height: ${(props) => getFontSize(props).lineHeight};
      outline-offset: -1px;
  }
  &:hover {
      outline: ${(props) => (props.$isFocused ? `2px solid ${props.$colorGradient[props.$color].accentScale[6]}` : `1px solid ${props.$colorGradient[props.$color].accentScale[7]}`)};
  }
  &:focus {
      outline: "1px solid ${(props) => props.$colorGradient[props.$color].accentScale[9]}";
  }
`;

const Input = forwardRef<HTMLDivElement, InputProps>(
  (
    {
      placeholder,
      color = "primary",
      label,
      type = "text",
      size = "medium",
      width = "15rem",
      fullWidth,
      value,
      leadingIcon,
      trailingIcon,
      labelPosition = "top",
      cursor = "text",
      disableSearch,
      inputBgColor,
      style,
      className,
      disabled = false,

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

    const theme = useTheme().theme;
    if(!theme) return null;
    const colorPalette = theme.colorPalette;

    const Label = label ? (
      typeof label === "string" ? (
        <StyledLabel>
          <Text variant="label" size={size}>
            {label}
          </Text>
        </StyledLabel>
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
      <StyledInput
        ref={ref}
        onClick={_onClick}
        onKeyDown={_onKeyDown}
        $colorGradient={colorPalette}
        $color={color}
        $size={size}
        $width={width}
        $cursor={cursor}
        $hasLeadingIcon={!!leadingIcon}
        $hasTrailingIcon={!!trailingIcon}
        $isFocused={isFocused}
        $inputBgColor={inputBgColor}
        style={style}
        className={className}
        {...props}
      >
        {labelPosition && labelPosition === "top" ? Label : null}
        <StyledInputContent
          $colorGradient={colorPalette}
          $color={color}
          $size={size}
          $isFocused={isFocused}
          $width={width}
          $hasLeadingIcon={!!leadingIcon}
          $hasTrailingIcon={!!trailingIcon}
          $cursor={cursor}
          $inputBgColor={inputBgColor}
          $disabled={disabled}
        >
          {leadingIcon && (
            <StyledInputIcon
              $colorGradient={colorPalette}
              $color={color}
              $size={size}
              $hasLeadingIcon={!!leadingIcon}
              $hasTrailingIcon={!!trailingIcon}
              $width={width}
            >
              {leadingIcon}
            </StyledInputIcon>
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
            <StyledInputIcon
              $colorGradient={colorPalette}
              $color={color}
              $size={size}
              $hasLeadingIcon={!!leadingIcon}
              $hasTrailingIcon={!!trailingIcon}
              $width={width}
            >
              {trailingIcon}
            </StyledInputIcon>
          )}
        </StyledInputContent>
        {labelPosition && labelPosition === "bottom" ? Label : null}
      </StyledInput>
    );
  }
);

export default React.memo(Input);
