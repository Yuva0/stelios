export interface CollapsibleProps {
  title: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
  onToggle?: (isOpen: boolean) => void;
  variant?: "contained" | "outlined" | "soft" | "transparent";
  color?: string;
  width?: string;
  "data-testid"?: string;
  "data-testid-title"?: string;
  style?: React.CSSProperties;
  className?: string;
}

export interface CollapsibleStyleProps {
  $variant: "contained" | "outlined" | "soft" | "transparent";
  $colorPalette: any;
  $color: string;
  $width?: string;
  $open?: boolean;
}