export interface AccordionProps {
  children: React.ReactNode | React.ReactNode[];
  width?: string;
  color?: string;
  variant?: "contained" | "outlined" | "soft" | "outlined-soft";
  isFullWidth?: boolean;
}

export interface AccordionStyleProps {
  $variant: "contained" | "outlined" | "soft" | "outlined-soft";
  $color: string;
  $width: string;
  $isFullWidth: boolean;
  $colorPalette: any;
}