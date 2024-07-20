import React from "react";
import {
  ToggleButtonGroupProps,
  ToggleButtonStyleGroupProps,
} from "./ToggleButtonGroup.types";
import styled from "styled-components";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const getBorder = (
  color: ToggleButtonStyleGroupProps["$color"],
  colorGradient: ToggleButtonStyleGroupProps["$colorGradient"]
) => {
  return {
    default: `1px solid ${colorGradient[color].accentScale[8]}`,
    hover: `1px solid ${colorGradient[color].accentScale[9]}`,
    active: `1px solid ${colorGradient[color].accentScale[9]}`,
  };
};

const StyledToggleBtnGroup = styled.div<ToggleButtonStyleGroupProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & > :first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  & > :not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  & > :not(:last-child) {
    border-left: ${(props) =>
      getBorder(props.$color, props.$colorGradient).default};
    border-top: ${(props) =>
      getBorder(props.$color, props.$colorGradient).default};
    border-bottom: ${(props) =>
      getBorder(props.$color, props.$colorGradient).default};
    border-right: 0;

    &:hover {
      border-left: ${(props) =>
        getBorder(props.$color, props.$colorGradient).hover};
      border-top: ${(props) =>
        getBorder(props.$color, props.$colorGradient).hover};
      border-bottom: ${(props) =>
        getBorder(props.$color, props.$colorGradient).hover};
    }

    &:active {
      border-left: ${(props) =>
        getBorder(props.$color, props.$colorGradient).active};
      border-top: ${(props) =>
        getBorder(props.$color, props.$colorGradient).active};
      border-bottom: ${(props) =>
        getBorder(props.$color, props.$colorGradient).active};
    }
  }
  & > :last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border: ${(props) => getBorder(props.$color, props.$colorGradient).default};

    &:hover {
      border: ${(props) => getBorder(props.$color, props.$colorGradient).hover};
    }
    &:active {
      border: ${(props) =>
        getBorder(props.$color, props.$colorGradient).active};
    }
  }
`;

const ToggleButtonGroup = ({
  children,
  value,
  color = "primary",
  className,
  size,
  style,
  onChange,
}: ToggleButtonGroupProps) => {
  const colorGradient = useTheme().colorGradient;
  return (
    <StyledToggleBtnGroup $color={color} $colorGradient={colorGradient}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...(!child.props.color && color && { color }),
          });
        }
        return child;
      })}
    </StyledToggleBtnGroup>
  );
};

export default ToggleButtonGroup;
