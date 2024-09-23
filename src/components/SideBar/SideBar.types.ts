
export interface SideBarProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  top?: string;
  right?: string;
  color?: string;
  onChange?: (value?: string) => void;
  _getSelectedIndex?: (index?: number, value?: string) => void;
  "data-testid"?: string;
}

export interface SideBarStyleProps {
  $colorPalette: any;
  $color: string;
  $top?: string;
  $right?: string;
}