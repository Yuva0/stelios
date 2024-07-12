export interface MenuProps {
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
  minWidth?: string;
  open?: boolean;
}

export interface MenuStyleProps {
  open?: boolean;
  minWidth?: string;
}
