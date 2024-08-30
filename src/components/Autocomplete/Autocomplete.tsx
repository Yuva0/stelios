import React, { useEffect } from "react";

import Menu from "../Menu/Menu";
import { IconArrowDown } from "@tabler/icons-react";
import Input from "../Input/Input";
import { AutocompleteProps } from "./Autocomplete.types";
import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";
import MenuItem from "../MenuItem/MenuItem";
// import { useTheme } from "../ThemeProvider/ThemeProvider";
import colorTokens from "../../tokens/colors.json";
// import { getColorPalette } from "../../helpers/helpers";

const Autocomplete: React.FC<AutocompleteProps> = ({
  id,
  options,
  placeholder,
  value,
  className,
  style,
  label,
  open,
  multiSelect,
  color = colorTokens.default.primary.main,
  width = "15rem",
  variant = "contained",
  size = "medium",
  // Events
  onChange,
  onClick,
  onInputChange,

  // Test Props
  "data-testid": dataTestId,
  "data-testid-input": dataTestIdInput,
  "data-testid-menu": dataTestIdMenu,

  ...props
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = React.useState(open ?? false);
  const [inputValue, setInputValue] = React.useState<string | string[]>(
    value
      ? multiSelect
        ? typeof value === "string"
          ? [value]
          : value
        : value
      : ""
  );
  // const theme = useTheme().theme;
  // const colorPalette = getColorPalette(theme,color);
  const [filteredOptions, setFilteredOptions] = React.useState(options);
  useEffect(() => {
    setInputValue(value ?? "");
  }, [value]);

  useEffect(() => {
    setFilteredOptions(() => {
      if (!inputValue) return options;
      if (!options) return;
      return options.filter(
        (option) =>
          option.title
            .toLowerCase()
            .includes(inputValue.toString().toLowerCase()) ||
          option.value
            .toLowerCase()
            .includes(inputValue.toString().toLowerCase())
      );
    });
  }, [options, inputValue]);

  const _handleMultiSelectOnClick = (
    e: React.MouseEvent,
    { title, value }: MenuItemKeyProps
  ) => {
    setInputValue(
      !inputValue
        ? title
        : Array.isArray(inputValue)
          ? [...inputValue, title]
          : [inputValue, title]
    );
  };
  const _handleSingleSelectOnClick = (
    e: React.MouseEvent,
    { title, value }: MenuItemKeyProps
  ) => {
    setIsOpen(false);
    setInputValue(title);

    onClick && onClick(e, { title, value });
    onChange && onChange(e, { title, value });
  };
  const _onMenuClick = (
    e: React.MouseEvent,
    { title, value }: MenuItemKeyProps
  ) => {
    if (multiSelect) return _handleMultiSelectOnClick(e, { title, value });
    else return _handleSingleSelectOnClick(e, { title, value });
  };
  const _onInputClick = (e: React.MouseEvent) => {
    setIsOpen(!isOpen);
  };
  const _onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true);
    setInputValue(e.target.value);
    onInputChange && onInputChange(e, e.target.value);
  };

  return (
    <div data-testid={dataTestId}>
      <Input
        size={size}
        variant={variant}
        color={color}
        width={width}
        placeholder={placeholder}
        value={inputValue}
        containerRef={inputRef}
        label={label}
        trailingIcon={<IconArrowDown />}
        className={className}
        style={style}
        onClick={_onInputClick}
        onChange={_onInputChange}
        // data-testid={dataTestIdInput}
        data-testid-input={dataTestIdInput}
        {...props}
      />
      <Menu
        color={color}
        variant={variant}
        open={isOpen}
        anchorElement={inputRef.current}
        minWidth={`${inputRef.current?.offsetWidth}px`}
        onClick={_onMenuClick}
        data-testid={dataTestIdMenu}
      >
        {filteredOptions && filteredOptions.map((option, index) => (
          <MenuItem
            {...option}
            title={option.title}
            value={option.value}
            key={index}
          />
        ))}
      </Menu>
    </div>
  );
};

export default Autocomplete;
