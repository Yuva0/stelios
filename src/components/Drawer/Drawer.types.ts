import { DefaultTheme } from "../ThemeProvider/ThemeProvider.types";

export type DrawerProps = {
  open?: boolean;
  position?: "left" | "right";
  size?: "small" | "medium" | "large";
  className?: string;
  style?: React.CSSProperties;
  hideOnOutsideClick?: boolean;
  onClose?: (e: React.MouseEvent) => void;
  children: React.ReactNode | React.ReactNode[];
  zIndex?: number;
  backdropStrength?: "light" | "medium" | "strong";
  title?: React.ReactNode;
  hasCloseIcon?: boolean;
};

export type DrawerStyleProps = {
  $open?: boolean;
  $position?: "left" | "right";
  $size?: "small" | "medium" | "large";
  $zIndex?: number;
  $backdropStrength?: "light" | "medium" | "strong";
  $colorPalette: DefaultTheme["theme"]["colorPalette"];
};
