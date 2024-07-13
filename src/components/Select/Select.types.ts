import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";

export interface SelectProps {
  label?: React.ReactNode;
  open?: boolean;
  multiple?: boolean;

  // Events
  onClick?: (
    e: React.MouseEvent,
    { title, value }: MenuItemKeyProps
  ) => void;
}
