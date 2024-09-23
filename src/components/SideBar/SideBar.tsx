import React from "react";
import styled from "styled-components";
import { SideBarProps, SideBarStyleProps } from "./SideBar.types";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";
import { SideBarItemProps } from "./SideBarItem/SideBarItem.types";

const SideBar = ({
  children,
  className,
  style,
  top = "0",
  right = "0",
  color = colorTokens.default.primary.main,
  "data-testid": dataTestId,
  onChange,
  ...props
}: SideBarProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);
  const [selectedIndex, setSelectedIndex] = React.useState<number | undefined>();

  const _handleSelectedIndex = (index?: number, value?: string) => {
    if (index === selectedIndex) return;
    setSelectedIndex(index);
    onChange && onChange(value);
  }

  let index=0;
  const childrenList = Array.isArray(children) ? children : [children];
  const ChildrenEle = React.Children.map(childrenList, (child) => {
    if (!React.isValidElement(child) || !child.type) return child;

    if ((child.type as any).displayName === "SideBarItem") {
      index++;
      return React.cloneElement(child, {
        _index: index,
        ...(color && !child.props.color && { color: color }),
        selected: selectedIndex ? selectedIndex === index : child.props.selected,
        _getSelectedIndex: _handleSelectedIndex
      } as Partial<SideBarItemProps>);
    }

    if((child.type as any).displayName === "SideBarGroup"){
      return React.cloneElement(child as any, {
        children: React.Children.map(child.props.children, (child) => {
          if(child.type.displayName === "SideBarGroupItem"){
            index++;
            return React.cloneElement(child, {
              _index: index,
              _getSelectedIndex: _handleSelectedIndex,
              ...(color && !child.props.color && {color: color}),
              selected: selectedIndex ? selectedIndex === index : (child.props as any).selected
            } as Partial<SideBarItemProps>);
          } else {
            return child;
          }
        }),
        ...(color && !child.props.color && {color: color})
      })
    }

  })

  return (
    <StyledSideBar
      $colorPalette={colorPalette}
      $color={color}
      className={className}
      style={style}
      $top={top}
      $right={right}
      data-testid={dataTestId}
      {...props}
    >
      {ChildrenEle}
    </StyledSideBar>
  );
};

export default SideBar;

const StyledSideBar = styled.div<SideBarStyleProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 10rem;
  height: 100vh;
  overflow: scroll;
  right: ${(props) => props.$right};
  top: ${(props) => props.$top};
  color: ${(props) => props.$colorPalette[props.$color].grayScale[11]};
`;
