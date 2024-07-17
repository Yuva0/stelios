export interface HeaderProps {
  children?: React.ReactNode | [React.ReactNode];
  height?: string;
  style?: React.CSSProperties;
  className?: string;
  expandable?: boolean;

  // Icon Customization
  iconWidth?: string;
  iconHeight?: string;
  iconRight?: string;
  iconBottom?: string;
}
