export interface AlertProps {
  title: React.ReactNode;
  titleIcon?: React.ReactNode;
  description: React.ReactNode;
  leadingIcon?: React.ReactNode;
  variant?: "contained" | "outlined" | "soft" | "outlined-soft";
  color?: string;
  width?: string;
  style?: React.CSSProperties;
  className?: string;
  "data-testid"?: string;
  "data-leading-icon"?: string;
}

export interface AlertStyleProps {
  $width: string;
  $color: string;
  $colorPalette: any;
  $variant: "contained" | "outlined" | "soft" | "outlined-soft";
}