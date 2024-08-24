
export interface LinkProps {
  rel?: string;
  href?: string;
  variant?: "default" | "underline" | "hover";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  color?: string;
  preciseColor?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  tabIndex?: number;
}

export type LinkStyleProps = {
  $variant: NonNullable<LinkProps["variant"]>;
  $color?: string;
  $disableColor?: boolean;
};
