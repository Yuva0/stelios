export interface SideBarItemProps {
  _index?: number;
  value?: string;
  children: React.ReactNode | React.ReactNode[];
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  size?: "small" | "medium" | "large";
  selected?: boolean;
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  _getSelectedIndex?: (index?: number, value?: string) => void;
  "data-testid"?: string;
}

export interface SideBarItemStyleProps {
  $colorPalette: any;
  $color: string;
  $selected?: boolean;
}