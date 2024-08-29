export interface HeaderProps {
  id?: string;
  children?: React.ReactNode | [React.ReactNode];
  height?: string;
  style?: React.CSSProperties;
  className?: string;
  expandable?: boolean;
  color?: string;

  // Icon Customization
  iconWidth?: string;
  iconHeight?: string;
  iconRight?: string;
  iconBottom?: string;

  "data-testid"?: string;
  "data-testid-icon"?: string;
}

export interface HeaderStyleProps {
  $colorPalette: any;
  $color: string;
  //Expand Props
  $expanded?: boolean;
  $height?: string;
  $iconWidth?: string;
  $iconHeight?: string;
  $iconRight?: string;
  $iconBottom?: string;
}
