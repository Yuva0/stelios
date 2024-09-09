export interface CodePreviewProps {
  text: string;
  code: React.ReactNode | [React.ReactNode];
  width?: string;
  color?: string;
  "data-testid"?: string;
  style?: React.CSSProperties;
  className?: string;
}

export interface CodePreviewStyleProps {
  $colorPalette: any;
  $width?: string;
  $color: string;
}