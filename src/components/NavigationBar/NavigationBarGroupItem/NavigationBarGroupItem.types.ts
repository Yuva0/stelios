import { DefaultTheme } from "../../ThemeProvider/ThemeProvider.types";

export interface NavigationBarGroupItemProps {
  children: string | React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: "small" | "medium" | "large";
}

export interface NavigationBarGroupItemStyleProps {
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
}
