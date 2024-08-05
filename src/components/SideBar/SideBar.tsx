import React from "react";
import styled from "styled-components";
import { SideBarProps, SideBarStyleProps } from "./SideBar.types";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const StyledSideBar = styled.div<SideBarStyleProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 10rem;
  height: 100vh;
  overflow: scroll;
  right: ${(props) => props.right ?? 0};
  top: ${(props) => props.top ?? 0};
  color: ${(props) => props.$colorPalette.primary.grayScale[11]};
`;

const SideBar = ({ children, className, style, top, right }: SideBarProps) => {
  const colorPalette = useTheme().theme.colorPalette;
  return (
    <StyledSideBar
      $colorPalette={colorPalette}
      className={className}
      style={style}
      top={top}
      right={right}
    >
      {children}
    </StyledSideBar>
  );
};

export default SideBar;
