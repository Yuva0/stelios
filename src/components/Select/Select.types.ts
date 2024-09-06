import { MenuItemKeyProps, MenuItemProps } from "../MenuItem/MenuItem.types";

export interface SelectProps {
  label?: React.ReactNode;
  open?: boolean;
  multiSelect?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
  variant?: "contained" | "outlined" | "soft";
  size?: "small" | "medium" | "large";
  options?: MenuItemProps[];
  color?: string;
  "data-testid"?: string;
  "data-testid-input"?: string;
  "data-testid-menu"?: string;

  // Events
  onClick?: (
    e: React.MouseEvent,
    { title, value }: MenuItemKeyProps
  ) => void;
}
