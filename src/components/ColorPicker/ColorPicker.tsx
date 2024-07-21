import React, { useState, useEffect } from "react";
import { ChromePicker, ColorResult } from "react-color";
import { ColorPickerProps, ColorPickerStyleProps } from "./ColorPicker.types";
import Input from "../Input/Input";
import styled from "styled-components";
import { usePopper } from "react-popper";
import ClickAwayListener from "../ClickAwayListener/ClickAwayListener";

const StyledChromePicker = styled.div<ColorPickerStyleProps>`
  display: ${(props) => (props.$open ? "block" : "none")};

  & .test {
    width: 500px;
  }
`;

const ColorPicker = ({
  color = "#ee9b00",
  open,
  onChange,
}: ColorPickerProps) => {
  const [isOpen, setIsOpen] = useState(open ?? false);
  const [innerColor, setInnerColor] = useState<string>(color);
  const [anchorElement, setAnchorElement] = useState<HTMLDivElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    setIsOpen(open ?? false);
  }, [open]);

  const { styles, attributes } = usePopper(
    anchorElement,
    popperElement as any,
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
    setIsOpen(true);
    setInnerColor(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <Input
        ref={setAnchorElement}
        value={innerColor}
        onChange={_onInputChange}
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
        ref={setPopperElement}
        $open={isOpen}
        style={{ ...styles.popper }}
        {...attributes.popper}
      >
        <ChromePicker
          disableAlpha={true}
          color={innerColor}
          onChange={_onChange}
          className="test"
        />
      </StyledChromePicker>
    </ClickAwayListener>
  );
};

export default ColorPicker;
