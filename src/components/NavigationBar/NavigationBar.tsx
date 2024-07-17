import React from "react";
import { NavigationBarProps } from "./NavigationBar.types";
import styled from "styled-components";
import colors from "../../tokens/colors.json";

const StyledNavigationBar = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  min-height: 100vh;
  margintop: 4rem;
  width: 15rem;
  border-right: 1px solid ${colors.white[200]};
  gap:0.15rem
`;

const NavigationBar: React.FC<NavigationBarProps> = ({ children, style }) => {
  return <StyledNavigationBar style={style}>{children}</StyledNavigationBar>;
};

export default NavigationBar;
