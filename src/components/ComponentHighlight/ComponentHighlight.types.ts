export interface ComponentHighlightProps {
  width?: string;
  height?: string;
  gradientColors?: Array<string>;
  outerBorderRadius?: string;
  innerBorderRadius?: string;
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
  className?: string;
  color?: string;
  "data-testid"?: string;
}
export interface ComponentHighlightStyleProps {
  $width: string;
  $height: string;
  $colorPalette: any;
  $color: string;
  $gradientColors?: Array<string>;
  $outerBorderRadius?: string;
  $innerBorderRadius?: string;
}
