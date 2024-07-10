import React, { forwardRef, useState } from "react";
import { RadioProps } from "./Radio.types";
import useRadioStyles from "./Radio.styles";

const Radio = forwardRef(
  (
    {
      index = 0,
      value = "",
      checked,
      selected,
      disabled = false,
      name,
      id,
      className,
      style,
      size = "medium",
      color,

      //Events
      onChange,

      ...props
    }: RadioProps,
    ref
  ) => {
    const innerRef = React.useRef<HTMLInputElement>(null);
    const _ref = (ref ?? innerRef) as React.RefObject<HTMLInputElement>;
    const [isChecked, setIsChecked] = useState((checked || selected) ?? false);

    const classNames = useRadioStyles({ checked, selected, disabled, size });

    // Events
    const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
      onChange && onChange(event);
    };

    const _onClick = (event: React.MouseEvent<HTMLSpanElement>) => {
      if (disabled) return;

      _ref.current?.click();
    };

    return (
      <span
        className={`${classNames["ste-radio-content"]} ${className}`}
        onClick={_onClick}
      >
        <input
          ref={_ref}
          type="radio"
          checked={isChecked}
          name={name}
          onChange={_onChange}
        />
        <span></span>
      </span>
    );
  }
);

export default Radio;
