export interface NotificationDialogProps {
  open?: boolean;
  children?: React.ReactNode;
  variant?: "contained" | "outlined" | "soft";
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  title?: React.ReactNode;
  width?: string;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
  "data-testid"?: string;
}

export interface NotificationDialogStyleProps {
  $open: boolean;
  $height?: string;
  $width: string;
  $colorPalette?: any;
  $color: string;
  $variant: "contained" | "outlined" | "soft";
}