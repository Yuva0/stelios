import React from "react";
import { NavigationBarProps } from "./NavigationBar.types";
import styled from "styled-components";
import colors from "../../tokens/colors.json";

const StyledNavigationBarCtr = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 15rem;
  overflow: scroll;
  border-right: 1px solid ${colors.white[200]};
`;

const NavigationBar: React.FC<NavigationBarProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <StyledNavigationBarCtr className={className} style={style}>
      <nav>{children}</nav>
    </StyledNavigationBarCtr>
  );
};

export default NavigationBar;
