import React from "react";
import { SelectProps } from "./Select.types";
import Text from "../Text/Text";
import Input from "../Input/Input";
import { IconArrowDown } from "@tabler/icons-react";
import { usePopper } from "react-popper";

const Dropdown = ({ label }: SelectProps) => {
  const inputRef = React.useRef<HTMLDivElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);

  const { styles, attributes } = usePopper(inputRef.current, menuRef.current, {
    placement: "bottom-start",
  });

  return (
    <div>
      <Input
        ref={inputRef}
        label={label}
        trailingIcon={<IconArrowDown />}
        cursor="pointer"
        onClick={() => setOpen(!open)}
      />
      <div
        style={{ display: open ? "block" : "none", ...styles.popper }}
        ref={menuRef}
        {...attributes.popper}
      >
        <div>Test1</div>
        <div>Test2</div>
        <div>Test3</div>
        <div>Test4</div>
      </div>
    </div>
  );
};

export default Dropdown;
