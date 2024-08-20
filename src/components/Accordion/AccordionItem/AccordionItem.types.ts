import { DefaultTheme } from "../../ThemeProvider/ThemeProvider.types";

export interface AccordionItemProps {
  children: React.ReactNode | React.ReactNode[];
  expanded?: boolean;
  title?: React.ReactNode;
  variant?: "transparent";
}

export interface AccordionItemStyleProps {
  $expanded?: boolean;
  $colorPalette: any;
  $variant?: "transparent";
}