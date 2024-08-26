export interface ToggleButtonProps {
  index?: number;
  value?: string;
  children?: React.ReactNode;
  defaultSelected?: boolean;
  selected?: boolean;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  size?: "small" | "medium" | "large";
  // Events:
  onClick?: (e: React.MouseEvent, value?: string, index?: number) => void;
}

export interface ToggleButtonStyleProps {
  $selected: NonNullable<ToggleButtonProps["selected"]>;
  $colorPalette: any;
  $color: NonNullable<ToggleButtonProps["color"]>;
  $size: NonNullable<ToggleButtonProps["size"]>;
}
