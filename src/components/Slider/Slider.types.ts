export interface SliderProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  minDisplay?: string;
  max?: number;
  maxDisplay?: string;
  disableLabels?: boolean;
  step?: number;
  width?: string;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  variant?: "contained" | "outlined";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  // Events
  onChange?: (value: number) => void;
  "data-testid"?: string;
}
export interface SliderTrackStyleProps {
  $disabled?: boolean;
  $colorPalette: any
  $color: string;
  $variant: "contained" | "outlined";
  $size: "small" | "medium" | "large";
}
export interface SliderLabelProps {
  $color: string;
  $colorPalette?: any;
}