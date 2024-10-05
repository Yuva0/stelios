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
  variant?: "contained" | "outlined" | "soft" | "neumorph";
  onClick?: (
    e: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,
    { value, title }: MenuItemKeyProps
  ) => void;

  // Test Props
  "data-testid"?: string;
}

export interface MenuItemPrivateProps {
  pvtOnClick?: (
    e: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,
    { value, title }: MenuItemKeyProps
  ) => void;
  pvtHasFocus?: boolean;
}

export interface MenuItemStyleProps {
  $colorPalette: any;
  $color: string;
  $variant: NonNullable<MenuItemProps["variant"]>;
}
