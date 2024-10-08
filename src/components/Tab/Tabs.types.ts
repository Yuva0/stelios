export interface TabsProps {
  children: React.ReactNode | React.ReactNode[];
  variant?: "contained" | "outlined";
  color?: string;
  value?: string;
  style?: React.CSSProperties;
  className?: string;
  onChange?: (value: string) => void;
  "data-testid"?: string;
}