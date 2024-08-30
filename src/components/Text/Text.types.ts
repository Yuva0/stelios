
export interface TextProps {
  id?: string;
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
  color?: string;
  preciseColor?: string;
  wrap?: boolean;
  className?: string;
  style?: React.CSSProperties;
  fontSize?: string;
  lineHeight?: string;
  disableColor?: boolean;
  fontFamily?: string;
  "data-testid"?: string;
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
  $disableColor?: boolean;
  $fontFamily?: string;
}
