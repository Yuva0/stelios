export interface CardProps {
  variant?: "contained" | "outlined" | "soft" | "outlined-soft" | "neumorph";
  color?: string;
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  width?: string;
  className?: string;
  style?: React.CSSProperties;
}
export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export interface CardFooterProps {
  children: React.ReactNode
  className?: string;
  style?: React.CSSProperties;
}
export interface ChildrenProps {
  children: React.ReactNode;
}

export interface CardStyledProps {
  $variant: "contained" | "outlined" | "soft" | "outlined-soft" | "neumorph";
  $colorPalette: any;
  $color: string;
  $width: string;
}