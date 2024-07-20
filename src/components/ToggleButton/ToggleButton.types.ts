export interface ToggleButtonProps {
  value?: string;
  children?: React.ReactNode;
  selected?: boolean;
  className?: string;
  style?: React.CSSProperties;
  color?: "primary" | "secondary" | "danger" | "warning" | "success" | "info";
  // Events:
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ToggleButtonStyleProps {
  $selected: NonNullable<ToggleButtonProps["selected"]>;
  $colorGradient: any;
  $color: NonNullable<ToggleButtonProps["color"]>;
}
