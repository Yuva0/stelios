import { DefaultTheme } from "../ThemeProvider/ThemeProvider.types";

export interface TextProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "div"
    | "paragraph"
    | "label"
    | "span";
  strong?: number;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode | React.ReactNode[];
  align?: "left" | "center" | "right" | "justify";
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success"
    | "info"
  wrap?: boolean;
  className?: string;
  style?: React.CSSProperties;
  fontSize?: string;
  lineHeight?: string;
  noColor?: boolean;
}

export interface TextStyleProps {
  $variant?: TextProps["variant"];
  $strong?: number;
  $align?: TextProps["align"];
  $color?: string;
  $wrap?: boolean;
  $size?: TextProps["size"];
  $fontSize?: string;
  $lineHeight?: string;
  $noColor?: boolean;
}
