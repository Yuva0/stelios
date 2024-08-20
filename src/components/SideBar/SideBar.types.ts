
export interface SideBarProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  top?: string;
  right?: string;
}

export interface SideBarStyleProps {
  $colorPalette: any;
  top?: string;
  right?: string;
}