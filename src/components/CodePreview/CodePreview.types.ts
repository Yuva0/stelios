export interface CodePreviewProps {
  text: string;
  code: React.ReactNode | [React.ReactNode];
  width?: string;
  color?: string;
  "data-testid"?: string;
}

export interface CodePreviewStyleProps {
  $colorPalette: any;
  $width?: string;
  $color: string;
}