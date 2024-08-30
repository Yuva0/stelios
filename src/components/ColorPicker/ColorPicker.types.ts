import React from "react";
// import { ColorChangeHandler } from "react-color";

export interface ColorPickerProps {
  open?: boolean;
  color?: string;
  label?: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "soft";
  width?: string;
  onChange?: (color?: string) => void;
  "data-testid"?: string;
  errorMessage?: React.ReactNode;
}

export interface ColorPickerStyleProps {
  $open?: boolean;
}