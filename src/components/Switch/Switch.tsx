import React, { forwardRef, useState, useEffect } from "react";
import { SwitchProps, SwitchStyleProps } from "./Switch.types";
import useSwitchStyles from "./Switch.styles";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import styled from "styled-components";

const getSize = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return {
        height: "0.6rem",
        width: "1rem",
        contentSize: "0.4rem",
        top: "0.1rem",
        unselectedLeft: "0.1rem",
        selectedLeft: "0.5rem",
        padding: "0.2rem",
      };
    case "medium":
      return {
        height: "0.8rem",
        width: "1.4rem",
        contentSize: "0.6rem",
        top: "0.1rem",
        unselectedLeft: "0.1rem",
        selectedLeft: "0.7rem",
        padding: "0.3rem",
      };
    case "large":
      return {
        height: "1rem",
        width: "1.8rem",
        contentSize: "0.8rem",
        top: "0.1rem",
        unselectedLeft: "0.1rem",
        selectedLeft: "0.9rem",
        padding: "0.5rem",
      };
  }
};

const StyledSwitch = styled.span<SwitchStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
  padding: ${(props) => getSize(props.$size).padding};
  border-radius: 1rem;
  & input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;

const StyledSwitchContent = styled.span<SwitchStyleProps>`
  position: relative;
  border-radius: 1rem;
  width: ${(props) => getSize(props.$size).width};
  height: ${(props) => getSize(props.$size).height};
  background-color: ${(props) =>
    props.$checked ? props.$colorGradient[props.$color].accentScale[8] : props.$colorGradient[props.$color].grayScale[8]};

  & span {
    top: ${(props) => getSize(props.$size).top};
    position: absolute;
    width: ${(props) => getSize(props.$size).contentSize};
    height: ${(props) => getSize(props.$size).contentSize};
    border-radius: 50%;
    background-color: ${(props) => "#ffffff"};
    transition: left 0.2s ease-in-out;
  }

  & .ste-switch-content-unselected {
    left: ${(props) => getSize(props.$size).unselectedLeft};
  }
  & .ste-switch-content-selected {
    left: ${(props) => getSize(props.$size).selectedLeft};
  }
`;

const Switch = forwardRef(
  (
    {
      id,
      value,
      size = "medium",
      color = "primary",
      checked = false,
      disabled = false,
      label,
      name,
      className,
      style,

      // Events
      onChange,
      ...props
    }: SwitchProps,
    ref
  ) => {
    const innerRef = React.useRef<HTMLInputElement>(null);
    const _ref = (ref ?? innerRef) as React.RefObject<HTMLInputElement>;
    const [isChecked, setIsChecked] = useState(checked ?? false);

    const colorGradient = useTheme().colorGradient;

    useEffect(() => {
      setIsChecked(checked ?? false);
    }, [checked]);

    const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked((prev) => {
        return !prev;
      });
      onChange && onChange(event);
    };

    return (
      <StyledSwitch
        role="switch"
        aria-checked={isChecked}
        className={className}
        $checked={isChecked}
        $disabled={disabled}
        $size={size}
        $color={color}
        $colorGradient={colorGradient}
        {...props}
      >
        <input
          ref={_ref}
          type="checkbox"
          checked={isChecked}
          name={name}
          onChange={_onChange}
        />
        <StyledSwitchContent
          $checked={isChecked}
          $disabled={disabled}
          $size={size}
          $color={color}
          $colorGradient={colorGradient}
        >
          <span
            className={`${isChecked ? "ste-switch-content-selected" : "ste-switch-content-unselected"}`}
          ></span>
        </StyledSwitchContent>
      </StyledSwitch>
    );
  }
);

export default Switch;
