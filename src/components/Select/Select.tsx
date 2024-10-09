import React from "react";
import { SelectProps } from "./Select.types";
import Input from "../Input/Input";
import { IconArrowDown } from "@tabler/icons-react";
import Menu from "../Menu/Menu";
import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";
import MenuItem from "../MenuItem/MenuItem";

const Select = ({
  label,
  open = false,
  options,
  // multiSelect,
  placeholder = "",
  variant = "contained",
  size = "medium",
  "data-testid": dataTestId,
  "data-testid-input": dataTestIdInput,
  "data-testid-menu": dataTestIdMenu,
  color,
  menuProps,
  //Events
  onClick,
}: SelectProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = React.useState(open);
  const [inputValue, setInputValue] = React.useState<string | string[]>("");

  const _handleSingleSelectOnClick = (
    e: React.MouseEvent,
    { title, value }: MenuItemKeyProps
  ) => {
    setIsOpen(false);
    setInputValue(title);
    onClick && onClick(e, { title, value });
  };
  const _onClick = (
    e: React.MouseEvent,
    { title, value }: MenuItemKeyProps
  ) => {
    // if (multiSelect) return _handleMultiSelectOnClick(e, { title, value });
    return _handleSingleSelectOnClick(e, { title, value });
  };

  return (
    <div data-testid={dataTestId}>
      <Input
        variant={variant}
        placeholder={placeholder}
        value={inputValue}
        disableSearch
        containerRef={inputRef}
        label={label}
        size={size}
        trailingIcon={<IconArrowDown />}
        cursor="pointer"
        color={color}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        data-testid-input={dataTestIdInput}
      />
      <Menu
        variant={variant}
        open={isOpen}
        anchorElement={inputRef.current}
        minWidth={`${inputRef.current?.offsetWidth}px`}
        onClick={_onClick}
        color={color}
        data-testid={dataTestIdMenu}
        style={menuProps?.style}
        {...menuProps}
      >
        {options && options.map((option, index) => (
          <MenuItem key={index} {...option} />
        ))}
      </Menu>
    </div>
  );
};

export default Select;
