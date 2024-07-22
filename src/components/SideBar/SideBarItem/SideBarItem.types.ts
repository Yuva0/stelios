import { DefaultTheme } from "../../ThemeProvider/ThemeProvider.types";

export interface SideBarItemProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
}

export interface SideBarItemStyleProps {
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
}