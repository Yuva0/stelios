export interface BreadcrumbsItemProps {
  link?: string;
  title?: React.ReactNode;
  color?: string;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "soft" | "text";
}

export interface BreadcrumbsItemStyledProps {
  $variant: "contained" | "outlined" | "soft" | "text";
  $color: string;
  $colorPalette: any;
  $size: "small" | "medium" | "large";
  $isSelectable: boolean;
}