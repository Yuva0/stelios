
export interface LinkProps {
  children: React.ReactNode;
  rel?: string;
  href?: string;
  variant?: "default" | "underline" | "hover";
  size?: "small" | "medium" | "large";
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  color?: string;
  preciseColor?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  tabIndex?: number;
  "data-testid"?: string;
}

export type LinkStyleProps = {
  $variant: NonNullable<LinkProps["variant"]>;
  $color: string;
  $disableColor?: boolean;
};
