import React, { forwardRef, useEffect, useState } from "react";
import { RadioProps, RadioStyleProps } from "./Radio.types";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import styled from "styled-components";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const Radio = forwardRef(
  (
    {
      index = 0,
      value = "",
      selected = false,
      disabled = false,
      name,
      id,
      className,
      style,
      size = "medium",
      color = colorTokens.default.primary.main,
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
    const [isSelected, setIsSelected] = useState(selected);

    useEffect(() => {
      setIsSelected(selected);
    }, [selected, focused]);

    const theme = useTheme().theme;
    const colorPalette = getColorPalette(theme,color);

    // Events
    const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isSelected) return;
      getSelectedIndex && getSelectedIndex(index);
      onChange && onChange(event);
    };

    return (
      <StyledRadio
        role="radio"
        $selected={isSelected}
        $disabled={disabled}
        $size={size}
        $color={color}
        $colorPalette={colorPalette}
        aria-checked={isSelected}
        className={`${className}`}
        {...props}
      >
        <input
          ref={_ref}
          type="radio"
          checked={isSelected}
          name={name}
          onChange={_onChange}
        />
        <span></span>
      </StyledRadio>
    );
  }
);
export default React.memo(Radio);


const StyledRadio = styled.span<RadioStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  & input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  & input[type="radio"] + span {
    position: relative;
    width: ${(props) => getSize(props.$size)}rem;
    height: ${(props) => getSize(props.$size)}rem;
    border-radius: 50%;
    border: ${(props) =>
      `1.5px solid ${props.$colorPalette[props.$color].accentScale[8]}`};
  }
  & input[type="radio"]:checked + span {
    width: ${(props) => getSize(props.$size)}rem;
    height: ${(props) => getSize(props.$size)}rem;
    border-radius: 50%;
    position: relative;
    border: ${(props) =>
      `1.5px solid ${props.$colorPalette[props.$color].accentScale[8]}`};
  }
  & input[type="radio"]:checked + span:after {
    content: "";
    position: absolute;
    width: 75%;
    height: 75%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: ${(props) =>
      props.$colorPalette[props.$color].accentScale[8]};
  }
`;
const getSize = (size: RadioStyleProps["$size"]) => {
  switch (size) {
    case "small":
      return 0.875;
    case "medium":
      return 1;
    case "large":
      return 1.5;
  }
  return 1;
};