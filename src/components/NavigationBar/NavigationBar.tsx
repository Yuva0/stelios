import React from "react";
import {
  NavigationBarProps,
  NavigationBarStyleProps,
} from "./NavigationBar.types";
import styled from "styled-components";
import colors from "../../tokens/colors.json";
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
  border-right: ${(props) => `1px solid ${props.$paletteColors.primary.grayScale[5]}`};
  background-color: ${(props) => props.$paletteColors.primary.background};
`;

const NavigationBar: React.FC<NavigationBarProps> = ({
  children,
  className,
  style,
}) => {
  const paletteColors = useTheme().theme.paletteColors;

  return (
    <StyledNavigationBarCtr
      $paletteColors={paletteColors}
      className={className}
      style={style}
    >
      <nav>{children}</nav>
    </StyledNavigationBarCtr>
  );
};

export default NavigationBar;
