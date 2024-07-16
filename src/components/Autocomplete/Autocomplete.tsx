import React, { useEffect } from "react";
import { usePopper } from "react-popper";
import Menu from "../Menu/Menu";
import { IconArrowDown } from "@tabler/icons-react";
import Input from "../Input/Input";
import { AutocompleteProps } from "./Autocomplete.types";
import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";
import MenuItem from "../MenuItem/MenuItem";

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

  // Events
  onChange,
  onClick,
  onInputChange,
}: AutocompleteProps) => {
  const inputRef = React.useRef<HTMLDivElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
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

  const { styles, attributes } = usePopper(inputRef.current, menuRef.current, {
    placement: "bottom-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 2.5],
        },
      },
    ],
  });

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
        placeholder={placeholder}
        value={inputValue}
        ref={inputRef}
        label={label}
        trailingIcon={<IconArrowDown />}
        onClick={_onInputClick}
        onChange={_onInputChange}
      />
      <Menu
        open={isOpen}
        ref={menuRef}
        minWidth={`${inputRef.current?.offsetWidth}px`}
        style={{
          ...styles.popper,
        }}
        onClick={_onMenuClick}
        {...attributes.poper}
      >
        {filteredOptions?.map((option, index) => (
          <MenuItem title={option.title} value={option.value} key={index} />
        ))}
      </Menu>
    </div>
  );
};

export default Autocomplete;
