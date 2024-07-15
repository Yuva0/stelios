import React from "react";
import { SelectProps } from "./Select.types";
import Input from "../Input/Input";
import { IconArrowDown } from "@tabler/icons-react";
import { usePopper } from "react-popper";
import Menu from "../Menu/Menu";
import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";

const Select = ({
  label,
  open,
  children,
  multiSelect,
  onClick,
}: SelectProps) => {
  const inputRef = React.useRef<HTMLDivElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(open ?? false);
  const [inputValue, setInputValue] = React.useState<string | string[]>("");

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
        value={inputValue}
        disableSearch
        ref={inputRef}
        label={label}
        trailingIcon={<IconArrowDown />}
        cursor="pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Menu
        open={isOpen}
        ref={menuRef}
        minWidth={`${inputRef.current?.offsetWidth}px`}
        style={{
          ...styles.popper,
        }}
        onClick={_onClick}
        {...attributes.poper}
      >
        {React.Children.map(children, (child) => {
          return child;
        })}
      </Menu>
    </div>
  );
};

export default Select;
