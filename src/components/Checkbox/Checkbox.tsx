import React, { forwardRef, useEffect, useState } from "react";
import { CheckboxProps } from "./Checkbox.types";
import useCheckboxStyles from "./Checkbox.styles";
import { IconCheck } from "@tabler/icons-react";

const Checkbox = forwardRef(
  (
    {
      id,
      value,
      size,
      color,
      checked,
      disabled,
      label,
      name,
      className,
      style,

      //Events
      onChange,
      ...props
    }: CheckboxProps,
    ref
  ) => {
    const innerRef = React.useRef<HTMLInputElement>(null);
    const _ref = (ref ?? innerRef) as React.RefObject<HTMLInputElement>;
    const [isChecked, setIsChecked] = useState(checked ?? false);

    const classNames = useCheckboxStyles({
      checked,
      disabled,
      size,
      color,
    });

    useEffect(() => {
      setIsChecked(checked ?? false);
    }, [checked]);

    const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked((prev) => {
        console.log(prev);
        return !prev;
      });
      onChange && onChange(event);
    };

    return (
      <span
        role="checkbox"
        aria-checked={isChecked}
        className={`${classNames["ste-checkbox"]} ${className}`}
        {...props}
      >
        <input
          ref={_ref}
          checked={isChecked}
          type="checkbox"
          name={name}
          onChange={_onChange}
        />
        <span>{isChecked && <IconCheck />}</span>
      </span>
    );
  }
);

export default Checkbox;
