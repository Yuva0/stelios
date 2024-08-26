import React from "react";
import { SelectProps } from "./Select.types";
import Input from "../Input/Input";
import { IconArrowDown } from "@tabler/icons-react";
import Menu from "../Menu/Menu";
import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";

const Select = ({
  label,
  open = false,
  children,
  multiSelect,
  placeholder,
  variant = "contained",
  size = "medium",

  //Events
  onClick,
}: SelectProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = React.useState(open);
  const [inputValue, setInputValue] = React.useState<string | string[]>("");

  // FIX: To be worked on
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
  };
  const _onClick = (
    e: React.MouseEvent,
    { title, value }: MenuItemKeyProps
  ) => {
    if (multiSelect) return _handleMultiSelectOnClick(e, { title, value });
    else return _handleSingleSelectOnClick(e, { title, value });
  };

  return (
    <div>
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
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Menu
        variant={variant}
        open={isOpen}
        anchorElement={inputRef.current}
        minWidth={`${inputRef.current?.offsetWidth}px`}
        onClick={_onClick}
      >
        {React.Children.map(children, (child) => {
          return child;
        })}
      </Menu>
    </div>
  );
};

export default Select;
