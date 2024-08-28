export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "soft" | "outlined-soft" | "neumorph";
  color?: string;
  children?: React.ReactNode | React.ReactNode[];
  rounded?: boolean;
  disabled?: boolean;
  isFullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;

  "data-testid"?: string;
  "data-leading-icon"?: string;
  "data-trailing-icon"?: string;
}

export interface ButtonStyleProps {
  $size: NonNullable<ButtonProps["size"]>;
  $variant: NonNullable<ButtonProps["variant"]>;
  $color: NonNullable<ButtonProps["color"]>;
  $rounded: NonNullable<ButtonProps["rounded"]>;
  $disabled?: NonNullable<ButtonProps["disabled"]>;
  $isFullWidth?: NonNullable<ButtonProps["isFullWidth"]>;
  $borderRadius: string;
  // Theme: To be fixed
  $colorPalette: any;
}

export interface ButtonIconStyleProps {
  $size: NonNullable<ButtonProps["size"]>;
}