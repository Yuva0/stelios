export interface AccordionProps {
  children: React.ReactNode | React.ReactNode[];
  width?: string;
  color?: string;
  variant?: "contained" ;
  isFullWidth?: boolean;
}

export interface AccordionStyleProps {
  $variant: "contained" ;
  $color: string;
  $width: string;
  $isFullWidth: boolean;
  $colorPalette: any;
}