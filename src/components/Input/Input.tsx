import React, { forwardRef, useImperativeHandle } from "react";
import {
  InputProps,
  InputStyleIconProps,
  InputStyleContentProps,
  InputStyleProps,
} from "./Input.types";
import Text from "../Text/Text";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import colorTokens from "../../tokens/colors.json";
import { getColorPalette } from "../../helpers/helpers";

const Input = forwardRef<HTMLDivElement, InputProps>(
  (
    {
      placeholder,
      color = colorTokens.default.primary.main,
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
      style,
      className,
      inputStyle,
      disabled = false,
      variant = "contained",
      containerRef,

      // Events
      onChange,
      onClick,
      onKeyDown,

      ...props
    }: InputProps,
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);
    const _containerRef = React.useRef<HTMLDivElement>(null);
    useImperativeHandle(containerRef, () => _containerRef.current!, [
      _containerRef,
    ]);
    const [isFocused, setIsFocused] = React.useState(false);
    const [inputValue, setInputValue] = React.useState<string | string[]>(
      value ?? ""
    );
    React.useEffect(() => {
      setInputValue(value ?? "");
    }, [value]);

    const theme = useTheme().theme;
    const colorPalette = getColorPalette(theme, color);

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
        ref={_containerRef}
        onClick={_onClick}
        onKeyDown={_onKeyDown}
        $width={width}
        style={style}
        className={className}
        {...props}
      >
        {labelPosition && labelPosition === "top" ? Label : null}
        <StyledInputContent
          $colorPalette={colorPalette}
          $color={color}
          $size={size}
          $isFocused={isFocused}
          $width={width}
          $hasLeadingIcon={!!leadingIcon}
          $hasTrailingIcon={!!trailingIcon}
          $cursor={cursor}
          $disabled={disabled}
          $variant={variant}
          style={inputStyle}
        >
          {leadingIcon && (
            <StyledInputIcon
              $variant={variant}
              $colorPalette={colorPalette}
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
              style={inputStyle}
            />
          ) : (
            <span className="ste-input-content" style={inputStyle}>{value}</span>
          )}
          {trailingIcon && (
            <StyledInputIcon
              $variant={variant}
              $colorPalette={colorPalette}
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
const StyledInputIcon = styled.div<InputStyleIconProps>`
  cursor: pointer;
  flex: 1 0 auto;
  width: ${(props) => sizeHandler(props.$size).iconSize};
  height: ${(props) => sizeHandler(props.$size).iconSize};
  padding: 0.25rem;
  &:hover {
    background-color: ${(props) =>
      props.$colorPalette[props.$color].grayScale[2]};
    border-radius: 50%;
  }
  & svg {
    width: 100%;
    height: 100%;
  }
  ${(props) => {
    const properties = styledIconHandler(props.$variant, props.$colorPalette, props.$color, props.$size);
    return `
      color: ${properties.color.default};
      &:hover {
        background-color: ${properties.iconHover};
      }
    `;
  }}
`;
const StyledInputContent = styled.div<InputStyleContentProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;

  ${(props) => {
    const properties = styledHandler(
      props.$variant,
      props.$colorPalette,
      props.$color,
      props.$size
    );
    return `
      cursor: ${props.$cursor};
      background-color: ${properties.backgroundColor.default};
      border: ${properties.border.default};
      padding: ${properties.padding};

      &:hover {
        background-color: ${properties.backgroundColor.hover};
        color: ${properties.color.hover};
        border: ${properties.border.hover};
        & input{
          color: ${properties.color.hover};
          background-color: ${properties.backgroundColor.hover};
        }

        & span.ste-input-content {
          color: ${properties.color.hover};
          background-color: ${properties.backgroundColor.hover};
        }
      }
      &:active {
        background-color: ${properties.backgroundColor.active};
        color: ${properties.color.active};
        border: ${properties.border.active};
        & input{
          color: ${properties.color.active};
          background-color: ${properties.backgroundColor.active};
        }

        & span.ste-input-content {
          color: ${properties.color.active};
          background-color: ${properties.backgroundColor.active};
        }
      }

      & input{
        padding: 0;
        margin: 0;
        border: 0;
        width: 100%;
        cursor: ${props.$cursor};
        line-height: ${properties.lineHeight};
        font-size: ${properties.fontSize};
        font-family: 'Varela Round', sans-serif;
        background-color: ${properties.backgroundColor.default};
        color: ${properties.color.default};

        &:focus-visible {
          outline: none;
        }
        &::placeholder {
          color: ${properties.placeholder.default};
          font-style: italic;
        }
      }

      & span.ste-input-content {
        height: ${properties.lineHeight};
        font-size: ${properties.fontSize};
        line-height: ${properties.lineHeight};
        width: 100%;
        font-size: ${properties.fontSize};
        font-family: 'Varela Round', sans-serif;
        background-color: ${properties.backgroundColor.default};
        color: ${properties.color.default};
      }
    `;
  }}
`;

const styledHandler = (
  variant: InputStyleContentProps["$variant"],
  colorPalette: InputStyleContentProps["$colorPalette"],
  color: InputStyleContentProps["$color"],
  size: InputStyleContentProps["$size"],
  hasLeadingIcon?: boolean,
  hasTrailingIcon?: boolean
) => {
  return { ...variantHandler(variant, colorPalette, color), ...sizeHandler(size), ...paddingHandler(size, hasLeadingIcon, hasTrailingIcon), };
};
const styledIconHandler = (
  variant: InputStyleIconProps["$variant"],
  colorPalette: InputStyleContentProps["$colorPalette"],
  color: InputStyleContentProps["$color"],
  size: InputStyleContentProps["$size"]
) => {
  return { ...variantHandler(variant, colorPalette, color), ...sizeHandler(size) };
};
const variantHandler = (
  variant: InputStyleContentProps["$variant"],
  colorPalette: InputStyleContentProps["$colorPalette"],
  color: InputStyleContentProps["$color"]
) => {
  switch (variant) {
    case "contained":
      return {
        backgroundColor: {
          default: colorPalette[color].accentScale[8],
          hover: colorPalette[color].accentScale[9],
          active: colorPalette[color].accentScale[9],
        },
        color: {
          default: colorPalette[color].accentContrast,
          hover: colorPalette[color].accentContrast,
          active: colorPalette[color].accentContrast,
        },
        border: {
          default: `2px solid ${colorPalette[color].accentScale[8]}`,
          hover: `2px solid ${colorPalette[color].accentScale[8]}`,
          active: `2px solid ${colorPalette[color].accentScale[8]}`,
        },
        placeholder: {
          default: colorPalette[color].grayScale[3],
        },
        iconHover: colorPalette[color].accentScale[8]
      };
    case "outlined":
      return {
        backgroundColor: {
          default: "transparent",
          hover: "transparent",
          active: "transparent",
        },
        color: {
          default: colorPalette[color].accentScale[10],
          hover: colorPalette[color].accentScale[11],
          active: colorPalette[color].accentScale[11],
        },
        border: {
          default: `2px solid ${colorPalette[color].accentScale[8]}`,
          hover: `2px solid ${colorPalette[color].accentScale[9]}`,
          active: `2px solid ${colorPalette[color].accentScale[9]}`,
        },
        placeholder: {
          default: colorPalette[color].accentScale[6],
        },
        iconHover: colorPalette[color].grayScale[2]
      };
    case "soft":
      return {
        backgroundColor: {
          default: colorPalette[color].accentScale[3],
          hover: colorPalette[color].accentScale[4],
          active: colorPalette[color].accentScale[4],
        },
        color: {
          default: colorPalette[color].accentScale[10],
          hover: colorPalette[color].accentScale[11],
          active: colorPalette[color].accentScale[11],
        },
        border: {
          default: `2px solid ${colorPalette[color].accentScale[7]}`,
          hover: `2px solid ${colorPalette[color].accentScale[8]}`,
          active: `2px solid ${colorPalette[color].accentScale[8]}`,
        },
        placeholder: {
          default: colorPalette[color].grayScale[10],
        },
        iconHover: colorPalette[color].accentScale[5]
      }
  }
};
const sizeHandler = (size: InputStyleContentProps["$size"]) => {
  switch (size) {
    case "small":
      return {
        fontSize: "0.875rem",
        lineHeight: "2rem",
        iconSize: "1rem",
      };
    case "medium":
      return {
        fontSize: "1rem",
        lineHeight: "2.5rem",
        iconSize: "1.25rem",
      };
    case "large":
      return {
        fontSize: "1rem",
        lineHeight: "3rem",
        iconSize: "1.5rem",
      };
  }
};
const paddingHandler = (
  size?: InputProps["size"],
  hasLeadingIcon?: boolean,
  hasTrailingIcon?: boolean
) => {
  switch (size) {
    case "small":
      if (hasLeadingIcon && hasTrailingIcon) return { padding: "0 8px" };
      if (hasLeadingIcon) return { padding: "0 12px 0 8px" };
      if (hasTrailingIcon) return { padding: "0 8px 0 12px" };
      return { padding: "0 12px" };
    case "medium":
      if (hasLeadingIcon && hasTrailingIcon) return { padding: "0 8px" };
      if (hasLeadingIcon) return { padding: "0 12px 0 8px" };
      if (hasTrailingIcon) return { padding: "0 8px 0 12px" };
      return { padding: "0 16px" };

    case "large":
      if (hasLeadingIcon && hasTrailingIcon) return { padding: "0 12px" };
      if (hasLeadingIcon) return { padding: "0 16px 0 12px" };
      if (hasTrailingIcon) return { padding: "0 12px 0 16px" };
      return { padding: "0 16px" };
  }
};
