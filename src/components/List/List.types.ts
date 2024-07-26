export interface ListProps {
  title?: React.ReactNode;
  size?: "small" | "medium" | "large";
  children: React.ReactNode | [React.ReactNode];
  variant?: "ordered" | "unordered" | "none";
}