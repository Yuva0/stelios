export interface PasswordProps {
  label?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "soft";
  hasError?: boolean;
  errorMessage?: string;
}