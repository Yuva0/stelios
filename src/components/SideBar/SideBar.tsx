import React from "react";
import styled from "styled-components";
import { SideBarProps } from "./SideBar.types";

interface SideBarStyleProps {
  top?: string;
  right?: string;
}

const StyledSideBar = styled.div<SideBarStyleProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 10rem;
  height: 100vh;
  overflow: scroll;
  right: ${(props) => props.right ?? 0};
  top: ${(props) => props.top ?? 0};
`;

const SideBar = ({ children, className, style, top, right }: SideBarProps) => {
  return (
    <StyledSideBar className={className} style={style} top={top} right={right}>
      {children}
    </StyledSideBar>
  );
};

export default SideBar;
