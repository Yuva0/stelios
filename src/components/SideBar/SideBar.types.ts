
export interface SideBarProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  top?: string;
  right?: string;
  color?: string;
}

export interface SideBarStyleProps {
  $colorPalette: any;
  $color: string;
  $top?: string;
  $right?: string;
}