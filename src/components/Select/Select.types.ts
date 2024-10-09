import { MenuProps } from "../Menu/Menu.types";
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
  width?: string;
  options?: MenuItemProps[];
  color?: string;
  menuProps?: MenuProps;
  "data-testid"?: string;
  "data-testid-input"?: string;
  "data-testid-menu"?: string;

  // Events
  onClick?: (e: React.MouseEvent, { title, value }: MenuItemKeyProps) => void;
}
