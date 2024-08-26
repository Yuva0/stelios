import { DefaultTheme } from "../ThemeProvider/ThemeProvider.types";

export interface NavigationBarProps {
  children?: React.ReactNode | [React.ReactNode];
  color?: string;
  style?: React.CSSProperties;
  className?: string;
  onChange?: (value?: string) => void;
}

export interface NavigationBarStyleProps {
  $colorPalette: any;
  $color: string;
}