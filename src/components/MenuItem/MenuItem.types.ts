export interface MenuItemKeyProps {
  title: string;
  value: string;
}

export interface MenuItemProps extends MenuItemKeyProps {
  children?: React.ReactNode | React.ReactNode[];
  onClick?: (
    e: React.MouseEvent<HTMLLIElement>,
    { value, title }: MenuItemKeyProps
  ) => void;
}

export interface MenuItemStyleProps {}
