import React from "react";
// import { ColorChangeHandler } from "react-color";

export interface ColorPickerProps {
  open?: boolean;
  color?: string;
  label?: React.ReactNode;
  size?: "small" | "medium" | "large";
  onChange?: (color?: string) => void;
}

export interface ColorPickerStyleProps {
  $open?: boolean;
}