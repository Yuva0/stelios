export interface RadioProps {
  index?: number;
  value?: string;
  size?: "small" | "medium" | "large";
  checked?: boolean;
  selected?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;

  //Events
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioStyleProps {
  checked?: boolean;
  selected?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}
