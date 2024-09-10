export interface TabProps {
  label: string;
  value: string;
  selected?: boolean;
  color?: string;
  variant?: "contained" | "outlined";
}

export interface TabPvtProps {
  pvtOnClick?: (value: string) => void;
}

export interface TabStyleProps {
  $selected: boolean;
  $colorPalette: any;
  $color: string;
  $variant: "contained" | "outlined";
}