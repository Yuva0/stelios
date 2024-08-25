export interface ListProps {
  title?: React.ReactNode;
  size?: "small" | "medium" | "large";
  containerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  variant?: "ordered" | "unordered" | "none";
  color?: string;
}