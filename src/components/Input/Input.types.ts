export interface InputProps {
  color?: string;
  variant?: "contained" | "outlined" | "soft";
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
  containerRef?: React.RefObject<HTMLDivElement | null>;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  className?: string;

  //Events
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  // Test Props
  "data-testid"?: string;
  "data-testid-input"?: string;
}


export interface InputStyleProps {
  $width: string;
}
export interface InputStyleContentProps {
  $color: NonNullable<InputProps["color"]>;
  $size: NonNullable<InputProps["size"]>;
  $cursor: NonNullable<InputProps["cursor"]>;
  $disabled?: NonNullable<InputProps["disabled"]>;
  $fullWidth?: InputProps["fullWidth"];
  $isFocused?: boolean;
  $variant: NonNullable<InputProps["variant"]>;
  $width: NonNullable<InputProps["width"]>;
  $hasLeadingIcon: boolean;
  $hasTrailingIcon: boolean;
  $colorPalette: any;
}

export interface InputStyleIconProps {
  $size: NonNullable<InputProps["size"]>;
  $disabled?: NonNullable<InputProps["disabled"]>;
  $cursor?: NonNullable<InputProps["cursor"]>;
  $colorPalette: any;
  $color: NonNullable<InputProps["color"]>;
  $hasLeadingIcon: boolean;
  $hasTrailingIcon: boolean;
  $width: NonNullable<InputProps["width"]>;
  $variant: NonNullable<InputProps["variant"]>;
}
