export interface NumberInputProps {
  id?: string;
  placeholder?: string;
  value?: number;
  className?: string;
  style?: React.CSSProperties;
  label?: React.ReactNode;
  min?: number;
  max?: number;
  step?: number;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent, value?: number) => void;
  onIncrement?: (e: React.MouseEvent, value?: number) => void;
  onDecrement?: (e: React.MouseEvent, value?: number) => void;
}
