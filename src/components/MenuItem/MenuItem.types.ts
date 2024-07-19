export interface MenuItemKeyProps {
  title: string;
  value: string;
}

export interface MenuItemProps extends MenuItemKeyProps {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode | React.ReactNode[];
  onClick?: (
    e: React.MouseEvent<HTMLLIElement>,
    { value, title }: MenuItemKeyProps
  ) => void;
}

export interface MenuItemStyleProps {
  $colorGradient: any
}
