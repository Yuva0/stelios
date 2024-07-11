export interface RadioProps {
  index?: number;
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
  selected?: boolean;
  focused?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;

  //Events
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getSelectedIndex?: (index?: number) => void;
}

export interface RadioStyleProps {
  selected?: boolean;
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
