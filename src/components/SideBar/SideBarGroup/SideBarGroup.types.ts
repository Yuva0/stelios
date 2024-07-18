export interface SideBarGroupProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;

  // Events
  onClick?: (e: React.MouseEvent) => void;
}