import React, { useEffect } from "react";
import Input from "../Input/Input";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { PasswordProps } from "./Password.types";
import Text from "../Text/Text";

const Password: React.FC<PasswordProps> = ({
  label,
  placeholder,
  value,
  onChange,
  size,
  variant,
  hasError,
  errorMessage,
  className,
  style,
  color,
  "data-testid": dataTestId,
  "data-testid-eye-icon": dataTestIdEyeIcon,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    // if (!inputRef.current) return;

    const inputElement = inputRef.current!;
    const selectionEnd = inputElement.value.length;

    const scrollTop = inputElement.scrollTop;
    inputElement.setSelectionRange(selectionEnd, selectionEnd);
    inputElement.scrollTop = scrollTop;
  }, [showPassword, inputRef]);

  const _onIconEyeClick = () => {
    setShowPassword((togglePassword) => !togglePassword);
  };

  return (
    <div
      data-testid={dataTestId}
      className={className}
      style={style}
      {...props}
    >
      <Input
        color={color}
        ref={inputRef}
        type={showPassword ? "text" : "password"}
        label={label}
        placeholder={placeholder}
        value={value}
        variant={variant}
        size={size}
        trailingIcon={
          <div data-testid={dataTestIdEyeIcon}  onClick={_onIconEyeClick}>
            {showPassword ? (
              <IconEye />
            ) : (
              <IconEyeClosed />
            )}
          </div>
        }
        onChange={onChange}
      />
      {hasError && <Text color={color} size="small" style={{marginTop:"0.25rem"}}>{errorMessage}</Text>}
    </div>
  );
};

export default Password;
