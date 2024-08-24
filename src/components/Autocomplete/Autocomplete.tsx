import React, { useEffect } from "react";

import Menu from "../Menu/Menu";
import { IconArrowDown } from "@tabler/icons-react";
import Input from "../Input/Input";
import { AutocompleteProps } from "./Autocomplete.types";
import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";
import MenuItem from "../MenuItem/MenuItem";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import colorTokens from "../../tokens/colors.json";
import { getColorPalette } from "../../helpers/helpers";

const Autocomplete = ({
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
  // Events
  onChange,
  onClick,
  onInputChange,
}: AutocompleteProps) => {
  const [inputAnchor, setInputAnchor] = React.useState<HTMLDivElement | null>(
    null
  );
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
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme,color);
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
    onInputChange && onInputChange(e, title);
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
    <div>
      <Input
        variant={variant}
        color={color}
        width={width}
        placeholder={placeholder}
        value={inputValue}
        ref={setInputAnchor}
        label={label}
        trailingIcon={<IconArrowDown />}
        className={className}
        style={style}
        onClick={_onInputClick}
        onChange={_onInputChange}
      />
      <Menu
        open={isOpen}
        anchorElement={inputAnchor}
        minWidth={`${inputAnchor?.offsetWidth}px`}
        onClick={_onMenuClick}
        style={{ backgroundColor: colorPalette ? colorPalette[color].grayScale[1] : colorTokens.default.primary.grayScale[1] }}
      >
        {filteredOptions?.map((option, index) => (
          <MenuItem title={option.title} value={option.value} key={index} />
        ))}
      </Menu>
    </div>
  );
};

export default Autocomplete;
