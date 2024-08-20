export interface SideBarItemProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  size?: "small" | "medium" | "large";
  selected?: boolean;
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

export interface SideBarItemStyleProps {
  $colorPalette: any;
  $selected?: boolean;
}