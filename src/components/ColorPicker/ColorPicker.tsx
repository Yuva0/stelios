import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChromePicker, ColorResult } from "react-color";
import { ColorPickerProps, ColorPickerStyleProps } from "./ColorPicker.types";
import Input from "../Input/Input";
import styled from "styled-components";
import { usePopper } from "react-popper";
import ClickAwayListener from "../ClickAwayListener/ClickAwayListener";

const StyledChromePicker = styled.div<ColorPickerStyleProps>`
  display: ${(props) => (props.$open ? "block" : "none")};
`;

const ColorPicker = ({
  label,
  color = "#ee9b00",
  open,
  size,
  width,
  onChange,
}: ColorPickerProps) => {
  const [isOpen, setIsOpen] = useState(open ?? false);
  const [innerColor, setInnerColor] = useState<string>(color);
  const anchorElement = useRef<HTMLDivElement | null>(null);
  const popperElement = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setInnerColor(color);
  }, [color]);

  useEffect(() => {
    setIsOpen(open ?? false);
  }, [open]);

  const { styles, attributes, update } = usePopper(
    anchorElement.current,
    popperElement.current,
    {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 2.5],
          },
        },
      ],
    }
  );

  const _onChange = (color: ColorResult) => {
    setInnerColor(color.hex);
    onChange && onChange(color.hex);
  };

  const _onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInnerColor(e.target.value);
    onChange && onChange(e.target.value);
  };

  const _onInputClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickAway = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen && update) {
      update();
    }
  }, [isOpen, update]);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Input
        width={width}
        size={size}
        label={label}
        ref={anchorElement}
        value={innerColor}
        onChange={_onInputChange}
        onClick={_onInputClick}
        leadingIcon={
          <div
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: innerColor,
              borderRadius: "4px",
            }}
          />
        }
      />
      <StyledChromePicker
        ref={popperElement}
        $open={isOpen}
        style={{ ...styles.popper }}
        {...attributes.popper}
      >
        <ChromePicker disableAlpha color={innerColor} onChange={_onChange} />
      </StyledChromePicker>
    </ClickAwayListener>
  );
};

export default ColorPicker;
