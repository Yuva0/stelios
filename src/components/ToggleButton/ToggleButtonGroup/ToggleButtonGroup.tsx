import React from "react";
import {
  ToggleButtonGroupProps,
  ToggleButtonStyleGroupProps,
} from "./ToggleButtonGroup.types";
import styled from "styled-components";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import colorTokens from "../../../tokens/colors.json";
import { getColorPalette } from "../../../helpers/helpers";

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
  width: ${(props) => props.$width};
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

const getIndexFromValue = (value: string, children: React.ReactNode) => {
  const childrenArray = React.Children.toArray(children);
  return childrenArray.findIndex((child: any) => child.props.value === value);
};

const ToggleButtonGroup = ({
  children,
  value,
  color = colorTokens.default.primary.main,
  className,
  size,
  style,
  width = "fit-content",
  //Events
  onClick,
}: ToggleButtonGroupProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(
    value ? getIndexFromValue(value, children) : null
  );

  React.useEffect(() => {
    setSelectedIndex(value ? getIndexFromValue(value, children) : null);
  }, [value, children]);

  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme,color);

  const _onClick = (e: React.MouseEvent, value?: string, index?: number) => {
    setSelectedIndex(index ?? null);
    onClick && onClick(e, value);
  };

  return (
    <StyledToggleBtnGroup
      $width={width}
      $color={color}
      $colorGradient={colorPalette}
      className={className}
      style={style}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type) {
          const childElement = child as React.ReactElement;
          const childType = childElement.type;

          if (typeof childType === "string") return child;
          /* causing an issue in production build as they define a custom name for the component */
          if ((childType as any).displayName === "ToggleButton") {
          return React.cloneElement(childElement, {
            index: index,
            selected: selectedIndex === index,
            ...(!childElement.props.size && size && { size }),
            onClick: _onClick,
          });
          }
        }
        return child;
      })}
    </StyledToggleBtnGroup>
  );
};

export default ToggleButtonGroup;
