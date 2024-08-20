import { DefaultTheme } from "../../ThemeProvider/ThemeProvider.types";

export interface SideBarGroupItemProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  size?: "small" | "medium" | "large";
  selected?: boolean;
  // Events
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

export interface SideBarGroupItemStyleProps {
  $colorPalette: any;
  $selected?: boolean;
}