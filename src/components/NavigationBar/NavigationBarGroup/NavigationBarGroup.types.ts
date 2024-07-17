export interface NavigationBarGroupProps {
  children?: React.ReactNode | [React.ReactNode];
  title?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  isDefaultExpanded?: boolean;
  className?: string;
}

export interface NavigationBarGroupStyleProps {
  expand?: boolean;
}
