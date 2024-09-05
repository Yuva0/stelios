
export interface NavigationBarGroupItemProps {
  _index?: number;
  value: string;
  children: string | React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: "small" | "medium" | "large";
  color?: string;
  selected?: boolean;
  tabIndex?: number;
  // Events
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  _getSelectedIndex?: (index?: number, value?: string) => void;
  "data-testid"?: string;
}

export interface NavigationBarGroupItemStyleProps {
  $colorPalette: any;
  $selected?: boolean;
  $color: string;
}
