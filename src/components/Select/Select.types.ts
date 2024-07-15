import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";

export interface SelectProps {
  label?: React.ReactNode;
  open?: boolean;
  multiSelect?: boolean;

  children? : React.ReactNode | React.ReactNode[];

  // Events
  onClick?: (
    e: React.MouseEvent,
    { title, value }: MenuItemKeyProps
  ) => void;
}
