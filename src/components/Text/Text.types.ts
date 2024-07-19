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
    | "tertiary"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | string;
  wrap?: boolean;
  className?: string;
  style?: React.CSSProperties;
  fontSize?: string;
  lineHeight?: string;
}

export interface TextStyleProps {
  $variant: NonNullable<TextProps["variant"]>;
  $strong?: number;
  $align?: NonNullable<TextProps["align"]>;
  $color?: NonNullable<TextProps["color"]>;
  $wrap?: boolean;
  $size?: NonNullable<TextProps["size"]>;
  $fontSize?: string;
  $lineHeight?: string;
}
