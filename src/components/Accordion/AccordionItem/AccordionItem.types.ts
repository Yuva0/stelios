export interface AccordionItemProps {
  children: React.ReactNode | React.ReactNode[];
  expanded?: boolean;
  title?: React.ReactNode;
  variant?: "contained" | "outlined" | "soft" | "outlined-soft";
  color?: string;
  "data-testid"?: string;
  "data-testid-title"?: string;
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
}