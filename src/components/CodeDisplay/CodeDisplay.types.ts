import { DefaultTheme } from "../ThemeProvider/ThemeProvider.types";

export interface CodeDisplayProps {
  text: string;
  language: string;
  width?: string;
  syntaxStyle?: any;
}

export interface CodeDisplayStyleProps {
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
  $width?: string;
}