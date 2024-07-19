export interface ButtonInternalProps {
  // Accessibility Props
  ariaLabel?: string;
  ariaHidden?: boolean;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "danger" | "warning" | "success" | "info";
  children?: React.ReactNode | React.ReactNode[];
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
}

export interface ButtonStyleProps {
  $size: NonNullable<ButtonProps["size"]>;
  $variant: NonNullable<ButtonProps["variant"]>;
  $color: NonNullable<ButtonProps["color"]>;
  $disabled?: NonNullable<ButtonProps["disabled"]>;
  $fullWidth?: NonNullable<ButtonProps["fullWidth"]>;
  $colorGradient: any;
}
