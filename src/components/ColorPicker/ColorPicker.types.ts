import React from "react";
// import { ColorChangeHandler } from "react-color";

export interface ColorPickerProps {
  open?: boolean;
  color?: string;
  onChange?: (color?: string) => void;
}

export interface ColorPickerStyleProps {
  $open?: boolean;
}