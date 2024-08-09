import { DefaultTheme } from "../../ThemeProvider/ThemeProvider.types";

export interface SideBarGroupProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  selected?: boolean;
  // Events
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

export interface SideBarGroupStyleProps {
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
}
