export interface MenuItemKeyProps {
  title: string;
  value: string;
}

export interface MenuItemProps extends MenuItemKeyProps {
  key?: number;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode | React.ReactNode[];
  color?: string;
  onClick?: (
    e: React.MouseEvent<HTMLLIElement>,
    { value, title }: MenuItemKeyProps
  ) => void;
}

export interface MenuItemStyleProps {
  $colorPalette: any;
  $color: string;
}
