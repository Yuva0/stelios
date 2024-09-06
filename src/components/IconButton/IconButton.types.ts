export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  alt: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "soft" | "outlined" | "outlined-soft" | "neumorph" | "neumorph-contained";
  color?: string;
  disabled?: boolean;
  className?: string;
  style?:React.CSSProperties;
  "data-testid"?: string;
}

export interface IconButtonStyleProps {
  $size: NonNullable<IconButtonProps["size"]>;
  $variant: NonNullable<IconButtonProps["variant"]>;
  $color: NonNullable<IconButtonProps["color"]>;
  $disabled: boolean;
  $colorPalette: any;
}
