import React from "react";
import { SelectProps } from "./Select.types";
import Input from "../Input/Input";
import { IconArrowDown } from "@tabler/icons-react";
import Menu from "../Menu/Menu";
import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";

const Select = ({
  label,
  open,
  children,
  multiSelect,
  placeholder,

  //Events
  onClick,
}: SelectProps) => {
  const [anchorElement, setAnchorElement] =
    React.useState<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = React.useState(open ?? false);
  const [inputValue, setInputValue] = React.useState<string | string[]>("");
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
        placeholder={placeholder}
        value={inputValue}
        disableSearch
        ref={setAnchorElement}
        label={label}
        trailingIcon={<IconArrowDown />}
        cursor="pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Menu
        open={isOpen}
        anchorElement={anchorElement}
        minWidth={`${anchorElement?.offsetWidth}px`}
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
