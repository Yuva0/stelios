export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "danger" | "warning" | "success" | "info";
  disabled?: boolean;
  className?: string;
}

export interface IconButtonStyleProps {
  $size: NonNullable<IconButtonProps["size"]>;
  $variant: NonNullable<IconButtonProps["variant"]>;
  $color: NonNullable<IconButtonProps["color"]>;
  $disabled: boolean;
  $colorGradient: any;
}
