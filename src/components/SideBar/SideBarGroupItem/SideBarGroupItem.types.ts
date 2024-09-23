export interface SideBarGroupItemProps {
  _index?: number;
  value?: string
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  size?: "small" | "medium" | "large";
  color?: string;
  selected?: boolean;
  // Events
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  _getSelectedIndex?: (index?: number, value?: string) => void;
  "data-testid"?: string;
}

export interface SideBarGroupItemStyleProps {
  $colorPalette: any;
  $selected?: boolean;
  $color: string;
}