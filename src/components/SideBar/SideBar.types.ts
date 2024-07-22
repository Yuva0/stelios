import { DefaultTheme } from "../ThemeProvider/ThemeProvider.types";

export interface SideBarProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  top?: string;
  right?: string;
}

export interface SideBarStyleProps {
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
  top?: string;
  right?: string;
}