export interface AlertProps {
  title: React.ReactNode;
  titleIcon?: React.ReactNode;
  description: React.ReactNode;
  leadingIcon?: React.ReactNode;
  variant?: "contained" | "outlined" | "soft";
  color?: string;
  width?: string;
  style?: React.CSSProperties;
  className?: string;
}

export interface AlertStyleProps {
  $width: string;
  $color: string;
  $colorPalette: any;
  $variant: "contained" | "outlined" | "soft";
}