import React from "react";
import {
  NavigationBarProps,
  NavigationBarStyleProps,
} from "./NavigationBar.types";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { NavigationBarGroupProps } from "./NavigationBarGroup/NavigationBarGroup.types";
import { NavigationBarGroupItemProps } from "./NavigationBarGroupItem/NavigationBarGroupItem.types";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const StyledNavigationBarCtr = styled.div<NavigationBarStyleProps>`
  display: flex;
  flex-direction: column;
  position: sticky;
  left: 0;
  top: 0;
  height: 100vh;
  width: 15rem;
  overflow: scroll;
  border-right: ${(props) =>
    `1px solid ${props.$colorPalette[props.$color].grayScale[5]}`};
  background-color: ${(props) => props.$colorPalette[props.$color].grayScale[0]};
`;

const NavigationBar: React.FC<NavigationBarProps> = ({
  children,
  className,
  style,
  color = colorTokens.default.primary.main,
  // Events
  onChange,
  "data-testid": dataTestId,
  ...props
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState<
    number | undefined
  >();
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  const childrenList = Array.isArray(children) ? children : [children];

  const _handleSelectedIndex = (index?: number, value?: string) => {
    if (!index || !value) return;
    if (index === selectedIndex) return;
    setSelectedIndex(index);
    onChange && onChange(value);
  };

  let index = 0;

  const ChildrenEle = React.Children.map(childrenList, (child) => {
    if (!React.isValidElement(child) || !child.type) return child;
    if (typeof child.type === "string") return child;

    if ((child.type as any).displayName === "NavigationBarItem") {
      index++;
      return React.cloneElement(child, {
        _index: index,
        selected: selectedIndex
          ? selectedIndex === index
          : child.props.selected,
        _getSelectedIndex: _handleSelectedIndex,
      } as Partial<NavigationBarGroupProps>);
    }

    if ((child.type as any).displayName === "NavigationBarGroup") {
      return React.cloneElement(child, {
        children: React.Children.map(
          child.props.children,
          (child: NavigationBarGroupItemProps) => {
            if (!React.isValidElement(child)) return child;
            index++;
            return React.cloneElement(child, {
              _index: index,
              _getSelectedIndex: _handleSelectedIndex,
              // todo
              selected: selectedIndex
                ? selectedIndex === index
                : (child.props as any).selected,
            } as Partial<NavigationBarGroupItemProps>);
          }
        ),
      } as Partial<NavigationBarGroupProps>);
    }

    return child;
  });

  return (
    <StyledNavigationBarCtr
      $color={color}
      $colorPalette={colorPalette}
      className={className}
      style={style}
      data-testid={dataTestId}
      {...props}
    >
      <nav>{ChildrenEle}</nav>
    </StyledNavigationBarCtr>
  );
};
NavigationBar.displayName = "NavigationBar";

export default NavigationBar;
