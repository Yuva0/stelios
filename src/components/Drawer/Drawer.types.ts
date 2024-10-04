
export type DrawerProps = {
  open?: boolean;
  position?: "left" | "right";
  size?: "small" | "medium" | "large";
  className?: string;
  style?: React.CSSProperties;
  hideOnOutsideClick?: boolean;
  onClose?: (e: React.MouseEvent | KeyboardEvent) => void;
  children: React.ReactNode | React.ReactNode[];
  zIndex?: number;
  backdropStrength?: "weak" | "normal" | "strong";
  title?: React.ReactNode;
  hasCloseIcon?: boolean;
  color?: string;
  "data-testid"?: string;
  "data-testid-backdrop"?: string;
};

export type DrawerStyleProps = {
  $open?: boolean;
  $position?: "left" | "right";
  $size: "small" | "medium" | "large";
  $zIndex?: number;
  $backdropStrength: "weak" | "normal" | "strong";
  $colorPalette: any;
  $color: string;
  $isMobile: boolean;
};
