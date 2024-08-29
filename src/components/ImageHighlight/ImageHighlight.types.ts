export interface ImageHighlightProps {
  imgSrc: string;
  imgAlt: string;
  gradientColors?: Array<string>;
  color?: string;
  "data-testid"?: string;
}

export interface ImageStyleProps {
  $colorPalette?: any;
  $color: string;
}