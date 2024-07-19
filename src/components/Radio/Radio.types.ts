export interface RadioProps {
  index?: number;
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
  selected?: boolean;
  focused?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;

  //Events
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getSelectedIndex?: (index?: number) => void;
}

export interface RadioStyleProps {
  $selected: NonNullable<RadioProps["selected"]>;
  $disabled?: NonNullable<RadioProps["disabled"]>;
  $size: NonNullable<RadioProps["size"]>;
  $color: NonNullable<RadioProps["color"]>;
  $colorGradient: any
}
