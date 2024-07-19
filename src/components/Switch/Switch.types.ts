export interface SwitchProps {
  id?: string;
  value?: string;
  size?: "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "success"
    | "info";
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  className?: string;
  style?: React.CSSProperties;

  //Events
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SwitchStyleProps {
  $checked: NonNullable<SwitchProps["checked"]>;
  $disabled: NonNullable<SwitchProps["disabled"]>;
  $size: NonNullable<SwitchProps["size"]>;
  $color: NonNullable<SwitchProps["color"]>;
  $colorGradient: any;
}
