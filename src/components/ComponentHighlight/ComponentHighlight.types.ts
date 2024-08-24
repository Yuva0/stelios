
export interface ComponentHighlightProps {
  width?: string;
  height?: string;
  gradientColors?: Array<string>;
  borderRadius?: string;
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
  className?: string;
  color?: string;
}
export interface ComponentHighlightStyleProps {
  $width: string;
  $height: string;
  $borderRadius: string;
  $colorPalette: any;
  $color: string;
  $gradientColors?: Array<string>;
}