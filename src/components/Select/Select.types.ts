import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";

export interface SelectProps {
  label?: React.ReactNode;
  open?: boolean;
  multiSelect?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
  variant?: "contained" | "outlined" | "soft";
  size?: "small" | "medium" | "large";
  children? : React.ReactNode | React.ReactNode[];

  // Events
  onClick?: (
    e: React.MouseEvent,
    { title, value }: MenuItemKeyProps
  ) => void;
}
