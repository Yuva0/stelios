export interface TabsProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  variant?: 'contained' | 'outlined';
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
  className?: string;
}