export interface PasswordProps {
  label?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  size?: "small" | "medium" | "large";
  hasError?: boolean;
  errorMessage?: string;
}