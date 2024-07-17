import React, { forwardRef } from "react";
import { IconButtonProps, IconButtonStyleProps } from "./IconButton.types";
import styled from "styled-components";
import colors from "../../tokens/colors.json";
import Text from "../Text/Text";

const getBackgroundColor = (variant?: string, color?: string) => {
  switch (variant) {
    case "contained":
      switch (color) {
        case "primary":
          return colors.primary[400];
        case "secondary":
          return colors.secondary[800];
        case "tertiary":
          return colors.tertiary[800];
        case "danger":
          return colors.danger[700];
        case "warning":
          return colors.warning[700];
        case "success":
          return colors.success[800];
        case "info":
          return colors.info[700];
        default:
          return color;
      }
    case "outlined":
      switch (color) {
        case "primary":
        case "secondary":
        case "tertiary":
        case "danger":
        case "warning":
        case "success":
        case "info":
          return "#ffffff";
        default:
          return color;
      }
    case "text":
      switch (color) {
        case "primary":
        case "secondary":
        case "tertiary":
        case "danger":
        case "warning":
        case "success":
        case "info":
          return "transparent";
        default:
          return color;
      }
  }
};
const getHoverBackgroundColor = (variant?: string, color?: string) => {
  switch (variant) {
    case "contained":
      switch (color) {
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
        default:
          return color;
      }
    case "outlined":
      switch (color) {
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
        default:
          return color;
      }
    case "text":
      switch (color) {
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
        default:
          return color;
      }
  }
};

const getColor = (variant?: string, color?: string) => {
  switch (variant) {
    case "contained":
      switch (color) {
        case "primary":
          return "#000";
        case "warning":
          return "#000";
      }
      return "#fff";
    case "outlined":
      switch (color) {
        case "primary":
          return colors.primary[600];
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
      switch (color) {
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
const getHoverColor = (variant?: string, color?: string) => {
  switch (variant) {
    case "contained":
      switch (color) {
        case "primary":
          return "#000";
        case "warning":
          return "#000";
      }
      return "#fff";
    case "outlined":
      switch (color) {
        case "primary":
          return colors.primary[600];
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
      switch (color) {
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

const getOutline = (variant?: string, color?: string) => {
  switch (variant) {
    case "contained":
      switch (color) {
        case "primary":
          return `1px solid ${colors.primary[600]}`;
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
      switch (color) {
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
const getHoverOutline = (variant?: string, color?: string) => {
  switch (variant) {
    case "contained":
      switch (color) {
        case "primary":
          return `1px solid ${colors.primary[700]}`;
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
      switch (color) {
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
      return "0.5rem 0.5rem";
    case "medium":
      return "0.5rem 0.5rem";
    case "large":
      return "1rem 1rem";
    default:
      return "0.5rem 0.5rem";
  }
};

const getIconSize = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return "1.25rem";
    case "medium":
      return "1.25rem";
    case "large":
      return "1.5rem";
  }
  return "1.5rem";
};

const StyledIconBtn = styled.button<IconButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    getBackgroundColor(props.variant, props.color)};
  color: ${(props) => getColor(props.variant, props.color)};
  outline: ${(props) => getOutline(props.variant, props.color)};
  border: 0;
  border-radius: 50%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  padding: ${(props) => getPadding(props.size)};
  svg {
    width: ${(props) => getIconSize(props.size)};
    height: ${(props) => getIconSize(props.size)};
  }
  &:hover {
    background-color: ${(props) =>
      getHoverBackgroundColor(props.variant, props.color)};
    color: ${(props) => getHoverColor(props.variant, props.color)};
    outline: ${(props) => getHoverOutline(props.variant, props.color)};
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const IconButton = forwardRef(
  (
    {
      icon,
      onClick,
      size,
      variant = "contained",
      color,
      disabled,
      className,
    }: IconButtonProps,
    ref
  ) => {
    return (
      <StyledIconBtn
        variant={variant}
        size={size}
        color={color}
        disabled={disabled}
        aria-disabled={disabled}
        onClick={onClick}
      >
        {typeof icon === "string" ? (
          <Text variant="span" size={size}>
            {icon}
          </Text>
        ) : (
          icon
        )}
      </StyledIconBtn>
    );
  }
);

export default IconButton;
