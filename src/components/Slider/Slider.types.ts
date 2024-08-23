export interface SliderProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  minDisplay?: string;
  max?: number;
  maxDisplay?: string;
  step?: number;
  width?: string;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  variant?: "contained" | "outlined";
  size?: "small" | "medium" | "large";
  // Events
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface SliderTrackStyleProps {
  $colorPalette: any
  $color: string;
  $variant: "contained" | "outlined";
  $size: "small" | "medium" | "large";
}
export interface SliderLabelProps {
  $color: string;
  $colorPalette?: any;
}