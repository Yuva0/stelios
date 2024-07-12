import React from "react";
import { SelectProps } from "./Select.types";
import Text from "../Text/Text";
import Input from "../Input/Input";
import { IconArrowDown } from "@tabler/icons-react";
import { usePopper } from "react-popper";
import Menu from "../Menu/Menu";
import MenuItem from "../MenuItem/MenuItem";

const Select = ({ label, open }: SelectProps) => {
  const inputRef = React.useRef<HTMLDivElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(open ?? false);

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

  return (
    <div>
      <Input
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
        {...attributes.poper}
      >
        <MenuItem>Test 1</MenuItem>
        <MenuItem>Test 2</MenuItem>
        <MenuItem>Test 3</MenuItem>
      </Menu>
    </div>
  );
};

export default Select;
