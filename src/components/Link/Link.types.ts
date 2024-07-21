export interface LinkProps {
  rel?: string;
  href?: string;
  variant?: "default" | "underline" | "hover";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  color?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export type LinkStyleProps = {
  $variant: NonNullable<LinkProps["variant"]>;
  $color: NonNullable<LinkProps["color"]>;
  $colorGradient: any
};