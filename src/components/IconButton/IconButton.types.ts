export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "soft" | "outlined" | "outlined-soft" | "neumorph";
  color?: string;
  disabled?: boolean;
  className?: string;
  style?:React.CSSProperties;
}

export interface IconButtonStyleProps {
  $size: NonNullable<IconButtonProps["size"]>;
  $variant: NonNullable<IconButtonProps["variant"]>;
  $color: NonNullable<IconButtonProps["color"]>;
  $disabled: boolean;
  $colorPalette: any;
}
