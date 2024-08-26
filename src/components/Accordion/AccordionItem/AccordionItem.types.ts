export interface AccordionItemProps {
  children: React.ReactNode | React.ReactNode[];
  expanded?: boolean;
  title?: React.ReactNode;
  variant?: "contained" | "outlined" | "soft" | "outlined-soft";
  color?: string;
}

export interface AccordionItemStyleProps {
  $expanded?: boolean;
  $colorPalette: any;
  $color: string;
  $variant: "contained" | "outlined" | "soft" | "outlined-soft";
}

export interface AccordionItemContentStyleProps {
  $expanded?: boolean;
  $colorPalette: any;
  $color: string;
  $variant: "contained" | "outlined" | "soft" | "outlined-soft";
  $height: number;
}