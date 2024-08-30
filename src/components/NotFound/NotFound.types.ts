export interface NotFoundProps {
  name?: string;
  width?: string;
  iconWidth?: string;
  height?: string;
  iconHeight?: string;
  notFoundText?: React.ReactNode;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  "data-testid"?: string;
}

export interface NotFoundStyleProps {
  $colorPalette: any;
  $color: string;
  $width: string;
  $height: string;
}