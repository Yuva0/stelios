export interface TagProps {
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "success"
    | "info";
  children?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disableClick?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface TagStyleProps {
  $size: NonNullable<TagProps["size"]>;
  $variant: NonNullable<TagProps["variant"]>;
  $color: NonNullable<TagProps["color"]>;
  $disableClick?: boolean;
  $colorGradient: any;
}
