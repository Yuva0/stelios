import React, { forwardRef, useEffect, useState } from "react";
import { RadioProps } from "./Radio.types";
import useRadioStyles from "./Radio.styles";

const Radio = forwardRef(
  (
    {
      index = 0,
      value = "",
      selected,
      disabled = false,
      name,
      id,
      className,
      style,
      size = "medium",
      color,
      focused,

      //Events
      onChange,
      getSelectedIndex,
      ...props
    }: RadioProps,
    ref
  ) => {
    const innerRef = React.useRef<HTMLInputElement>(null);
    const _ref = (ref ?? innerRef) as React.RefObject<HTMLInputElement>;
    const [isSelected, setIsSelected] = useState(selected ?? false);

    useEffect(() => {
      setIsSelected(selected ?? false);
    }, [selected, focused]);

    const classNames = useRadioStyles({
      selected,
      disabled,
      size,
      color,
    });

    // Events
    const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isSelected) return;
      // setIsSelected(event.target.checked);
      getSelectedIndex && getSelectedIndex(index);
      onChange && onChange(event);
    };

    const _onClick = (event: React.MouseEvent<HTMLSpanElement>) => {
      if (disabled) return;
      _ref.current?.click();
    };

    return (
      <span
        role="radio"
        aria-checked={isSelected}
        className={`${classNames["ste-radio-content"]} ${className}`}
        onClick={_onClick}
        {...props}
      >
        <input ref={_ref} type="radio" name={name} onChange={_onChange} />
        <span></span>
      </span>
    );
  }
);

export default React.memo(Radio);
