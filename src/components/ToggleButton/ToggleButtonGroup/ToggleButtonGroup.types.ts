export interface ToggleButtonGroupProps {
  children?: React.ReactNode | React.ReactNode[];
  value?: string;
  width?: string;
  color?: "primary" | "secondary" | "danger" | "warning" | "success" | "info";
  size?: "small" | "medium" | "large";
  className?: string;
  style?: React.CSSProperties;
  // Events
  onClick?: (e: React.MouseEvent, value?: string) => void;
}

export interface ToggleButtonStyleGroupProps {
  $width: string;
  $color: NonNullable<ToggleButtonGroupProps["color"]>;
  $colorGradient: any;
}
