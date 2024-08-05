import { DefaultTheme } from "../../ThemeProvider/ThemeProvider.types";

export interface SideBarItemProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  size?: "small" | "medium" | "large";
  selected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export interface SideBarItemStyleProps {
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
  $selected?: boolean;
}