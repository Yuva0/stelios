import { MenuItemKeyProps } from "../MenuItem/MenuItem.types";

export interface MenuProps {
  children: React.ReactNode | React.ReactNode[];
  minWidth?: string;
  open?: boolean;
  anchorElement: HTMLElement | null;
  hideOnOutsideClick?: boolean;
  color?: string;
  variant?: "contained" | "outlined" | "soft" | "neumorph";
  // Popper Styles
  popperStyles?: {
    placement?:
      | "top"
      | "top-start"
      | "top-end"
      | "right"
      | "right-start"
      | "right-end"
      | "bottom"
      | "bottom-start"
      | "bottom-end"
      | "left"
      | "left-start"
      | "left-end";
    modifiers?: {
      name: string;
      options: {
        offset: [number, number];
      };
    }[];
  };
  className?: string;
  style?: React.CSSProperties;
  "data-testid"?: string;
  // Events
  onClick?: (
    e: React.MouseEvent<HTMLLIElement>,
    { title, value }: MenuItemKeyProps
  ) => void;
  onClose?: (e: MouseEvent) => void;
}

export interface MenuStyleProps {
  $open: NonNullable<MenuProps["open"]>;
  $minWidth: NonNullable<MenuProps["minWidth"]>;
  $colorPalette: any;
  $color: string;
  $variant: NonNullable<MenuProps["variant"]>;
}
