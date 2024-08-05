import { DefaultTheme } from "../../ThemeProvider/ThemeProvider.types";

export interface SideBarGroupItemProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  size?: "small" | "medium" | "large";
}

export interface SideBarGroupItemStyleProps {
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
}