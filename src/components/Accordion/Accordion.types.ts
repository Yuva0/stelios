import { DefaultTheme } from "../ThemeProvider/ThemeProvider.types";

export interface AccordionProps {
  children: React.ReactNode | React.ReactNode[];
  title?: React.ReactNode;
  width?: string;
  variant?: "transparent";
}

export interface AccordionStyleProps {
  $width?: string;
  $colorPalette?: DefaultTheme["theme"]["colorPalette"];
}