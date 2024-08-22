export interface AccordionItemProps {
  children: React.ReactNode | React.ReactNode[];
  expanded?: boolean;
  title?: React.ReactNode;
  variant?: "contained";
  color?: string;
}

export interface AccordionItemStyleProps {
  $expanded?: boolean;
  $colorPalette: any;
  $color: string;
  $variant: "contained";
}

export interface AccordionItemContentStyleProps {
  $variant: "contained";
  $expanded?: boolean;
  $colorPalette: any;
  $color: string;
}