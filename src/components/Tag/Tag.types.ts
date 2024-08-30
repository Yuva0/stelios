export interface TagProps {
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined";
  color?: string;
  children?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disableClick?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  "data-testid"?: string;
}

export interface TagStyleProps {
  $size: NonNullable<TagProps["size"]>;
  $variant: NonNullable<TagProps["variant"]>;
  $color: NonNullable<TagProps["color"]>;
  $colorPalette: any;
  $disableClick?: boolean;
}
