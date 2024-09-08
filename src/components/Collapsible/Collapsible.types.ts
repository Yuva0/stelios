export interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  open?: boolean;
  onToggle?: (isOpen: boolean) => void;
  variant?: "contained" | "outlined" | "soft" | "transparent";
  color?: string;
  width?: string;
}

export interface CollapsibleStyleProps {
  $variant: "contained" | "outlined" | "soft" | "transparent";
  $colorPalette: any;
  $color: string;
  $width?: string;
  $open?: boolean;
}