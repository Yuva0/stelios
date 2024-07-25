import { DefaultTheme } from "../ThemeProvider/ThemeProvider.types";

export interface CodeEditorProps {
  text: string;
  code: React.ReactNode | [React.ReactNode];
  width?: string;
}

export interface CodeEditorStyleProps {
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
  $width?: string;
}