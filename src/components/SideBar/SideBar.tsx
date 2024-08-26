import React from "react";
import styled from "styled-components";
import { SideBarProps, SideBarStyleProps } from "./SideBar.types";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const SideBar = ({
  children,
  className,
  style,
  top = "0",
  right = "0",
  color = colorTokens.default.primary.main,
}: SideBarProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);
  return (
    <StyledSideBar
      $colorPalette={colorPalette}
      $color={color}
      className={className}
      style={style}
      $top={top}
      $right={right}
    >
      {children}
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
