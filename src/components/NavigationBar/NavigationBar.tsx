import React from "react";
import {
  NavigationBarProps,
  NavigationBarStyleProps,
} from "./NavigationBar.types";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const StyledNavigationBarCtr = styled.div<NavigationBarStyleProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 15rem;
  overflow: scroll;
  border-right: ${(props) => `1px solid ${props.$colorPalette.primary.grayScale[5]}`};
  background-color: ${(props) => props.$colorPalette.primary.background};
`;

const NavigationBar: React.FC<NavigationBarProps> = ({
  children,
  className,
  style,
}) => {
  const colorPalette = useTheme().theme.colorPalette;

  return (
    <StyledNavigationBarCtr
      $colorPalette={colorPalette}
      className={className}
      style={style}
    >
      <nav>{children}</nav>
    </StyledNavigationBarCtr>
  );
};

export default NavigationBar;
