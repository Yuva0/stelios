import { DefaultTheme } from "../ThemeProvider/ThemeProvider.types";

export interface LinkProps {
  rel?: string;
  href?: string;
  variant?: "default" | "underline" | "hover";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export type LinkStyleProps = {
  $variant: NonNullable<LinkProps["variant"]>;
  $color?: string;
};
