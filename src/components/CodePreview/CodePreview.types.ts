export interface CodePreviewProps {
  text: string;
  textStyle?: React.CSSProperties;
  code: React.ReactNode | [React.ReactNode];
  width?: string;
  color?: string;
  "data-testid"?: string;
  codeStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  className?: string;
  language?: string;
}

export interface CodePreviewStyleProps {
  $colorPalette: any;
  $width?: string;
  $color: string;
}