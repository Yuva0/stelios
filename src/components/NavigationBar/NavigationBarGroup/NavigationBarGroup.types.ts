import { DefaultTheme } from "../../ThemeProvider/ThemeProvider.types";

export interface NavigationBarGroupProps {
  _index?: number;
  selected?: boolean;
  children?: React.ReactNode | [React.ReactNode];
  title?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  expanded?: boolean;
  className?: string;
  _getSelectedIndex?: (index?: number) => void;
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

export interface NavigationBarGroupStyleProps {
  $selected?: boolean;
  $expand?: boolean;
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
}
