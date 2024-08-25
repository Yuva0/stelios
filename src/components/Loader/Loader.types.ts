export interface LoaderProps {
  shape?: "circle" | "square" | "rectangle";
  height?: string;
  width?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
  className?: string;
  startTime?: number;
  color?: string;
}

export interface LoaderStyleProps {
  $shape: LoaderProps["shape"];
  $height: LoaderProps["height"];
  $width: LoaderProps["width"];
  $colorPalette: any;
  $color: string
  $borderRadius?: LoaderProps["borderRadius"];
  $startTime?: LoaderProps["startTime"];
}