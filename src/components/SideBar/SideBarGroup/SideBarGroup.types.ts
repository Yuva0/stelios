import { DefaultTheme } from "../../ThemeProvider/ThemeProvider.types";

export interface SideBarGroupProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  // Events
  onClick?: (e: React.MouseEvent) => void;
}

export interface SideBarGroupStyleProps {
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
}
