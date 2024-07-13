import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";

export interface MenuProps {
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
  minWidth?: string;
  open?: boolean;

  // Events
  onClick?: (
    e: React.MouseEvent<HTMLLIElement>,
    { title, value }: MenuItemKeyProps
  ) => void;
}

export interface MenuStyleProps {
  open?: boolean;
  minWidth?: string;
}
