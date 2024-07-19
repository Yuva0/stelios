export interface InputProps {
  color?: "primary" | "secondary" | "danger" | "warning" | "success" | "info";
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
  style?: React.CSSProperties;
  className?: string;

  // <input> props
  inputBgColor?: string;

  //Events
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface InputStyleProps {
  $color: NonNullable<InputProps["color"]>;
  $size: NonNullable<InputProps["size"]>;
  $cursor?: NonNullable<InputProps["cursor"]>;
  $disabled?: NonNullable<InputProps["disabled"]>;
  $fullWidth?: InputProps["fullWidth"];
  $width: NonNullable<InputProps["width"]>;
  $hasLeadingIcon: boolean;
  $hasTrailingIcon: boolean;
  $isFocused?: boolean;
  $colorGradient: any;
  $inputBgColor?: InputProps["inputBgColor"];
}
