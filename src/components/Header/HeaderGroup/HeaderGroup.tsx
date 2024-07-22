import React from "react";
import { HeaderGroupProps } from "./HeaderGroup.types";
import styled from "styled-components";

const StyledHeaderGroup = styled.span`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const HeaderItem = ({ children, className, style }: HeaderGroupProps) => {
  return (
    <StyledHeaderGroup className={className} style={style}>
      {children}
    </StyledHeaderGroup>
  );
};

export default HeaderItem;
