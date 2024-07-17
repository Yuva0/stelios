export interface InputProps {
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "success"
    | "info";
  size?: "small" | "medium" | "large";
  type?: "text" | "password" | "number" | "email" | "search";
  cursor?: "pointer" | "text";
  disableSearch?: boolean;
  width?: string;
  value?: string | string[];
  disabled?: boolean;
  fullWidth?: boolean;
  label?: React.ReactNode;
  labelPosition?: "top" | "bottom";
  placeholder?: string;
  ref?: React.Ref<HTMLInputElement>;
  forwardedRef?: React.ForwardedRef<HTMLInputElement>;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;

  inputBgColor?: string;

  //Events
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface InputStyleProps {
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "success"
    | "info";
  size?: "small" | "medium" | "large";
  cursor?: "pointer" | "text";
  disabled?: boolean;
  fullWidth?: boolean;
  width?: string;
  hasLeadingIcon?: boolean;
  hasTrailingIcon?: boolean;
  isFocused?: boolean;

  inputBgColor?: string;
}
