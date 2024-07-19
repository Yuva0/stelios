import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";

export interface MenuProps {
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
  minWidth?: string;
  open?: boolean;
  anchorElement: HTMLElement | null;

  // Events
  onClick?: (
    e: React.MouseEvent<HTMLLIElement>,
    { title, value }: MenuItemKeyProps
  ) => void;
}

export interface MenuStyleProps {
  $open: NonNullable<MenuProps["open"]>;
  $minWidth: NonNullable<MenuProps["minWidth"]>;
}
