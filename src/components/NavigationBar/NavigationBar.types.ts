export interface NavigationBarProps {
  children?: React.ReactNode | [React.ReactNode];
  color?: string;
  style?: React.CSSProperties;
  className?: string;
  onChange?: (value?: string) => void;
  "data-testid"?: string;
}

export interface NavigationBarStyleProps {
  $colorPalette: any;
  $color: string;
}