export interface ListProps {
  title?: React.ReactNode;
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode | [React.ReactNode];
  variant?: "ordered" | "unordered" | "none";
}