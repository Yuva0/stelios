import React, { useEffect } from "react";
import Input from "../Input/Input";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { hasPropertyChain } from "../../helpers/helpers";
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
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;

  const inputElement = inputRef.current;
  const selectionEnd = inputElement.value.length;

  const scrollTop = inputElement.scrollTop;
  inputElement.setSelectionRange(selectionEnd, selectionEnd);
  inputElement.scrollTop = scrollTop;

  }, [showPassword, inputRef]);

  const _onIconEyeClick = () => {
    setShowPassword(false);
  };

  const _onIconEyeClosedClick = () => {
    setShowPassword(true);
  };

  return (
    <div>
      <Input
        ref={inputRef}
        type={showPassword ? "text" : "password"}
        label={label}
        placeholder={placeholder}
        variant={variant}
        size={size}
        trailingIcon={
          showPassword ? (
            <IconEye onClick={_onIconEyeClick} />
          ) : (
            <IconEyeClosed onClick={_onIconEyeClosedClick} />
          )
        }
        onChange={onChange}
      />
      {hasError && <Text>{errorMessage}</Text>}
    </div>
  );
};

export default Password;
