export interface FormControlLabelProps {
  labelPlacement?: "start" | "end" | "top" | "bottom";
  control: React.ReactElement;
  label?: React.ReactNode;
  size?: "small" | "medium" | "large";
  gap?: number;
  disabled?: boolean;
}

export interface FormControlLabelStyleProps {
  $labelPlacement: NonNullable<FormControlLabelProps["labelPlacement"]>;
  $size: NonNullable<FormControlLabelProps["size"]>;
  $disabled: NonNullable<FormControlLabelProps["disabled"]>;
  $gap: NonNullable<FormControlLabelProps["gap"]>;
}
