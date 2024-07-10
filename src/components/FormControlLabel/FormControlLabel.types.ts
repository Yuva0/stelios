export interface FormControlLabelProps {
  labelPlacement?: "start" | "end" | "top" | "bottom";
  control: React.ReactElement;
  label?: React.ReactNode;
  size?: "small" | "medium" | "large";
  gap?: number;
  disabled?: boolean;
}

export interface FormControlLabelStyleProps {
  labelPlacement?: "start" | "end" | "top" | "bottom";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  gap?: number;
}