import React from "react";
import Input from "../Input/Input";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";

const Password = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const _onIconEyeClick = () => {
    setShowPassword(false);
  };

  const _onIconEyeClosedClick = () => {
    setShowPassword(true);
  };

  return (
    <Input
      type={showPassword ? "text" : "password"}
      label="Password"
      trailingIcon={
        showPassword ? (
          <IconEye onClick={_onIconEyeClick} />
        ) : (
          <IconEyeClosed onClick={_onIconEyeClosedClick} />
        )
      }
    />
  );
};

export default Password;
