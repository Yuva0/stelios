import { DefaultTheme } from "../ThemeProvider/ThemeProvider.types";

export interface NavigationBarProps {
  children?: React.ReactNode | [React.ReactNode];
  style?: React.CSSProperties;
  className?: string;
  onChange?: (value?: string) => void;
}

export interface NavigationBarStyleProps {
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
}