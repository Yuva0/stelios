export interface PasswordProps {
  label?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "soft";
  hasError?: boolean;
  errorMessage?: string;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  "data-testid"?: string;
  "data-testid-eye-icon"?: string;
}