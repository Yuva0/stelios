import { DefaultTheme } from "../ThemeProvider/ThemeProvider.types";

export interface HeaderProps {
  children?: React.ReactNode | [React.ReactNode];
  height?: string;
  style?: React.CSSProperties;
  className?: string;
  expandable?: boolean;

  // Icon Customization
  iconWidth?: string;
  iconHeight?: string;
  iconRight?: string;
  iconBottom?: string;
}

export interface HeaderStyleProps {
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
  //Expand Props
  $expanded?: boolean;
  $height?: string;
  $iconWidth?: string;
  $iconHeight?: string;
  $iconRight?: string;
  $iconBottom?: string;
}
