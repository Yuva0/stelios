import React from "react";
import {
  NavigationBarProps,
  NavigationBarStyleProps,
} from "./NavigationBar.types";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { NavigationBarGroupProps } from "./NavigationBarGroup/NavigationBarGroup.types";
import { NavigationBarGroupItemProps } from "./NavigationBarGroupItem/NavigationBarGroupItem.types";

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
    `1px solid ${props.$colorPalette.primary.grayScale[5]}`};
  background-color: ${(props) => props.$colorPalette.primary.grayScale[0]};
`;

const NavigationBar: React.FC<NavigationBarProps> = ({
  children,
  className,
  style,
  // Events
  onChange,
}) => {
  const colorPalette = useTheme().theme.colorPalette;
  const [selectedIndex, setSelectedIndex] = React.useState<
    number | undefined
  >();

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

    if (child.type.name === "NavigationBarItem") {
      index++;
      return React.cloneElement(child, {
        _index: index,
        selected: selectedIndex
          ? selectedIndex === index
          : child.props.selected,
        _getSelectedIndex: _handleSelectedIndex,
      } as Partial<NavigationBarGroupProps>);
    }

    if (child.type.name === "NavigationBarGroup") {
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
      $colorPalette={colorPalette}
      className={className}
      style={style}
    >
      <nav>{ChildrenEle}</nav>
    </StyledNavigationBarCtr>
  );
};

export default NavigationBar;
