export interface CheckboxProps {
  id?: string;
  value?: string;
  size?: "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "success"
    | "info";
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  className?: string;
  style?: React.CSSProperties;

  //Events
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxStyleProps {
  checked?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "success"
    | "info";
}
