export interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  variant?: "contained" | "outlined" | "soft";
  color?: string;
  width?: string;
}

export interface CollapsibleStyleProps {
  $variant: "contained" | "outlined" | "soft";
  $colorPalette: any;
  $color: string;
  $width?: string;
}