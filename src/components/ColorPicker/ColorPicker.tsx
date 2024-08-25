import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChromePicker, ColorResult } from "react-color";
import { ColorPickerProps, ColorPickerStyleProps } from "./ColorPicker.types";
import Input from "../Input/Input";
import styled from "styled-components";
import { usePopper } from "react-popper";
import ClickAwayListener from "../ClickAwayListener/ClickAwayListener";
import colorTokens from "../../tokens/colors.json";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";

const StyledChromePicker = styled.div<ColorPickerStyleProps>`
  display: ${(props) => (props.$open ? "block" : "none")};
`;

const ColorPicker = ({
  label,
  color = colorTokens.default.primary.main,
  open,
  size,
  width,
  variant = "outlined",
  onChange,
}: ColorPickerProps) => {
  const [isOpen, setIsOpen] = useState(open ?? false);
  const anchorElement = useRef<HTMLDivElement | null>(null);
  const popperElement = useRef<HTMLDivElement | null>(null);
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme,color);
  const [innerColor, setInnerColor] = useState<string>(colorPalette ? colorPalette[color].main : color);

  React.useEffect(() => {
    const colorPalette = getColorPalette(theme,color);
    setInnerColor(colorPalette ? colorPalette[color].main : color);
  }, [color, theme]);

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
        variant={variant}
        width={width}
        size={size}
        label={label}
        ref={anchorElement}
        value={innerColor}
        onChange={_onInputChange}
        onClick={_onInputClick}
        color={color}
        leadingIcon={
          <div
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: "100%",
              height: "100%",
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
