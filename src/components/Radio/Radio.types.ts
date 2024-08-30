export interface RadioProps {
  index?: number;
  value?: string;
  size?: "small" | "medium" | "large";
  color?: string;
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
  "data-testid"?: string;
}

export interface RadioStyleProps {
  $selected: NonNullable<RadioProps["selected"]>;
  $disabled?: NonNullable<RadioProps["disabled"]>;
  $size: NonNullable<RadioProps["size"]>;
  $color: NonNullable<RadioProps["color"]>;
  $colorPalette: any
}
