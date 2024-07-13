import React from "react";
import { SelectProps } from "./Select.types";
import Input from "../Input/Input";
import { IconArrowDown } from "@tabler/icons-react";
import { usePopper } from "react-popper";
import Menu from "../Menu/Menu";
import MenuItem from "../MenuItem/MenuItem";
import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";

const Select = ({ label, open, onClick }: SelectProps) => {
  const inputRef = React.useRef<HTMLDivElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(open ?? false);
  const [inputValue, setInputValue] = React.useState("");

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

  const _onClick = (
    e: React.MouseEvent,
    { title, value }: MenuItemKeyProps
  ) => {
    setIsOpen(false);
    setInputValue(title);

    onClick && onClick(e, { title, value });
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
        <MenuItem value="1" title="Test 1"></MenuItem>
        <MenuItem value="2" title="Test 2"></MenuItem>
        <MenuItem value="3" title="Test 3"></MenuItem>
      </Menu>
    </div>
  );
};

export default Select;
