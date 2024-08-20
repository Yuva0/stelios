export interface AccordionProps {
  children: React.ReactNode | React.ReactNode[];
  title?: React.ReactNode;
  width?: string;
  variant?: "transparent";
}

export interface AccordionStyleProps {
  $width?: string;
  $colorPalette?: any;
}