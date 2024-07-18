import React from "react";
import styled from "styled-components";
import { SideBarItemProps } from "./SideBarItem.types";
import Link from "../../Link/Link";
import colors from "../../../tokens/colors.json";

const StyledSideBarLink = styled(Link)`
  padding: 0.25rem 0.5rem 0.25rem 1rem;
  width: fit-content;
  position: relative;
`;

const StyledSideBarItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem 0.25rem 1rem;
  border-bottom: 1px solid #ffffff;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    margin-left: 0.43rem;
    border-left: 1px solid ${colors.white[200]};
    top: 0;
    left: 0;
  }
`;

const SideBarItem = ({ children, className, style }: SideBarItemProps) => {
  if (children && typeof children === "string")
    return (
      <StyledSideBarLink
        color={colors.black[0]}
        variant="hover"
        className={className}
        style={style}
      >
        {children}
      </StyledSideBarLink>
    );

  return <StyledSideBarItem>{children}</StyledSideBarItem>;
};

export default SideBarItem;
