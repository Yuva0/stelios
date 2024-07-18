import React from "react";
import {
  ButtonInternalProps,
  ButtonProps,
  ButtonStyleProps,
} from "./Button.types";
import { useButtonStyles } from "./Button.styles";
import Text from "../Text/Text";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import styled from "styled-components";
import colors from "../../tokens/colors.json";

const getBackgroundColor = (props: ButtonStyleProps) => {
  console.log(props.colorObj.accentScale[9], props.variant);
  switch (props.variant) {
    case "contained":
      return props.colorObj.accentScale[9];
    case "outlined":
      return props.colorObj.accentSurface;
    case "text":
      return "transparent";
  }
  return props.colorObj.accentScale[9];
};
const getHoverBackgroundColor = (props: ButtonStyleProps) => {
  switch (props.variant) {
    case "contained":
      switch (props.color) {
        case "primary":
          return colors.primary[500];
        case "secondary":
          return colors.secondary[900];
        case "tertiary":
          return colors.tertiary[900];
        case "danger":
          return colors.danger[800];
        case "warning":
          return colors.warning[800];
        case "success":
          return colors.success[900];
        case "info":
          return colors.info[900];
      }
      break;
    case "outlined":
      switch (props.color) {
        case "primary":
          return colors.primary[10];
        case "secondary":
          return colors.secondary[100];
        case "tertiary":
          return colors.tertiary[10];
        case "danger":
          return colors.danger[10];
        case "warning":
          return colors.warning[10];
        case "success":
          return colors.success[100];
        case "info":
          return colors.info[100];
      }
      return;
    case "text":
      switch (props.color) {
        case "primary":
          return colors.primary[10];
        case "secondary":
          return colors.secondary[100];
        case "tertiary":
          return colors.tertiary[10];
        case "danger":
          return colors.danger[10];
        case "warning":
          return colors.warning[10];
        case "success":
          return colors.success[100];
        case "info":
          return colors.info[100];
      }
  }
};

const getColor = (props: ButtonStyleProps) => {
  switch (props.variant) {
    case "contained":
      switch (props.color) {
        case "primary":
          return "#000";
        case "warning":
          return "#000";
      }
      return "#fff";
    case "outlined":
      switch (props.color) {
        case "primary":
          return colors.primary[900];
        case "secondary":
          return colors.secondary[800];
        case "tertiary":
          return colors.tertiary[900];
        case "danger":
          return colors.danger[700];
        case "warning":
          return colors.warning[900];
        case "success":
          return colors.success[900];
        case "info":
          return colors.info[800];
      }
      break;
    case "text":
      switch (props.color) {
        case "primary":
          return colors.primary[900];
        case "secondary":
          return colors.secondary[800];
        case "tertiary":
          return colors.tertiary[700];
        case "danger":
          return colors.danger[700];
        case "warning":
          return colors.warning[900];
        case "success":
          return colors.success[800];
        case "info":
          return colors.info[600];
      }
      break;
  }
};
const getHoverColor = (props: ButtonStyleProps) => {
  switch (props.variant) {
    case "contained":
      switch (props.color) {
        case "primary":
          return "#000";
        case "warning":
          return "#000";
      }
      return "#fff";
    case "outlined":
      switch (props.color) {
        case "primary":
          return colors.primary[900];
        case "secondary":
          return colors.secondary[800];
        case "tertiary":
          return colors.tertiary[900];
        case "danger":
          return colors.danger[700];
        case "warning":
          return colors.warning[900];
        case "success":
          return colors.success[900];
        case "info":
          return colors.info[800];
      }
      break;
    case "text":
      switch (props.color) {
        case "primary":
          return colors.primary[900];
        case "secondary":
          return colors.secondary[800];
        case "tertiary":
          return colors.tertiary[700];
        case "danger":
          return colors.danger[700];
        case "warning":
          return colors.warning[900];
        case "success":
          return colors.success[800];
        case "info":
          return colors.info[600];
      }
      break;
  }
};

const getOutline = (props: ButtonStyleProps) => {
  switch (props.variant) {
    case "contained":
      switch (props.color) {
        case "primary":
          return `1px solid ${colors.primary[400]}`;
        case "secondary":
          return `1px solid ${colors.secondary[800]}`;
        case "tertiary":
          return `1px solid ${colors.tertiary[800]}`;
        case "danger":
          return `1px solid ${colors.danger[700]}`;
        case "warning":
          return `1px solid ${colors.warning[700]}`;
        case "success":
          return `1px solid ${colors.success[800]}`;
        case "info":
          return `1px solid ${colors.info[700]}`;
      }
      break;
    case "outlined":
      switch (props.color) {
        case "primary":
          return `1px solid ${colors.primary[400]}`;
        case "secondary":
          return `1px solid ${colors.secondary[800]}`;
        case "tertiary":
          return `1px solid ${colors.tertiary[900]}`;
        case "danger":
          return `1px solid ${colors.danger[700]}`;
        case "warning":
          return `1px solid ${colors.warning[700]}`;
        case "success":
          return `1px solid ${colors.success[800]}`;
        case "info":
          return `1px solid ${colors.info[700]}`;
      }
      break;
  }

  return;
};
const getHoverOutline = (props: ButtonStyleProps) => {
  switch (props.variant) {
    case "contained":
      switch (props.color) {
        case "primary":
          return `1px solid ${colors.primary[500]}`;
        case "secondary":
          return `1px solid ${colors.secondary[900]}`;
        case "tertiary":
          return `1px solid ${colors.tertiary[1000]}`;
        case "danger":
          return `1px solid ${colors.danger[800]}`;
        case "warning":
          return `1px solid ${colors.warning[800]}`;
        case "success":
          return `1px solid ${colors.success[900]}`;
        case "info":
          return `1px solid ${colors.info[800]}`;
      }
      break;
    case "outlined":
      switch (props.color) {
        case "primary":
          return `1px solid ${colors.primary[600]}`;
        case "secondary":
          return `1px solid ${colors.secondary[900]}`;
        case "tertiary":
          return `1px solid ${colors.tertiary[1000]}`;
        case "danger":
          return `1px solid ${colors.danger[800]}`;
        case "warning":
          return `1px solid ${colors.warning[800]}`;
        case "success":
          return `1px solid ${colors.success[900]}`;
        case "info":
          return `1px solid ${colors.info[800]}`;
      }
      break;
  }

  return;
};

const getPadding = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return "0.25rem 0.5rem";
    case "medium":
      return "0.5rem 1rem";
    case "large":
      return "0.75rem 1.5rem";
    default:
      return "0.75rem 1.5rem";
  }
};

const StyledButton = styled.button<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  background-color: ${(props) => getBackgroundColor(props)};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: ${(props) => getPadding(props.size)};
  outline: ${(props) => getOutline(props)};
  border-radius: 0.25rem;
  &:hover {
    background-color: ${(props) => getHoverBackgroundColor(props)};
    color: ${(props) => getHoverColor(props)};
    outline: ${(props) => getHoverOutline(props)};
  }
`;

const StyledButtonIcon = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ButtonInternal = ({
  leadingIcon,
  trailingIcon,
  size = "medium",
  variant = "contained",
  color = "primary",
  disabled,
  children,
  fullWidth,

  // Events
  onClick,
  ...rest
}: ButtonProps & ButtonInternalProps) => {
  const classNames = useButtonStyles({
    size,
    variant,
    color,
    disabled,
    fullWidth,
  });

  console.log(useTheme());

  const theme = useTheme();
  const colorObj = theme.colorObj;

  return (
    <StyledButton
      colorObj={colorObj}
      aria-disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {leadingIcon && (
        <StyledButtonIcon className={classNames["ste-button-leading-icon"]}>
          {leadingIcon}
        </StyledButtonIcon>
      )}
      {typeof children === "string" ? (
        <Text variant="span" size={size}>
          {children}
        </Text>
      ) : (
        children
      )}
      {trailingIcon && (
        <StyledButtonIcon className={classNames["ste-button-trailing-icon"]}>
          {trailingIcon}
        </StyledButtonIcon>
      )}
    </StyledButton>
  );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <ButtonInternal ref={ref} {...props} />
);

export default Button;
