export interface CheckboxProps {
  id?: string;
  value?: string;
  size?: "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success"
    | "info"
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  className?: string;
  style?: React.CSSProperties;

  //Events
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxStyleProps {
  $checked?: boolean;
  $disabled?: boolean;
  $size: NonNullable<CheckboxProps["size"]>;
  $color: NonNullable<CheckboxProps["color"]>;
  $colorGradient: any;
}
