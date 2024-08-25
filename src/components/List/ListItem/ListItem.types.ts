export interface ListItemProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  size?: "small" | "medium" | "large";
  color?: string;
}

export interface ListItemStyleProps {
  $color: string;
  $colorPalette: any;
}