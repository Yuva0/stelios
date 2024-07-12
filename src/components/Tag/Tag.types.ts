export interface TagProps {
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "success"
    | "info";
  children?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface TagStyleProps {
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "success"
    | "info";
}
