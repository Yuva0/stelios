export interface AccordionProps {
  children: React.ReactNode | React.ReactNode[];
  width?: string;
  color?: string;
  variant?: "contained" | "outlined" | "soft" | "outlined-soft" | "transparent";
  isFullWidth?: boolean;
  style?: React.CSSProperties;
  className?: string;
  "data-testid"?: string;
}

export interface AccordionStyleProps {
  $variant: "contained" | "outlined" | "soft" | "outlined-soft" | "transparent";
  $color: string;
  $width?: string;
  $isFullWidth: boolean;
  $colorPalette: any;
}