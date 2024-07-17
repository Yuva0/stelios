import React from "react";

import { HeaderProps } from "./Header.types";
import styled from "styled-components";
import {
  IconChevronCompactDown,
  IconChevronCompactUp,
} from "@tabler/icons-react";
import colors from "../../tokens/colors.json";

interface ExpandProps {
  expanded?: boolean;
}

const StyledHeader = styled.header<ExpandProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: height 330ms ease-in-out;
  background-color: ${colors.white[0]};
  z-index: 1000;
  height: ${(props) => (props.expanded ? "5rem" : "0rem")};
  position: fixed;
  box-shadow: ${(props) =>
    props.expanded ? "none" : "0 0 10px 0 rgba(0, 0, 0, 0.35)"};
  outline: ${(props) =>
    props.expanded ? `1px solid ${colors.white[200]}` : "none"};
`;

const StyledExpandIcon = styled.div<ExpandProps>`
  border-radius: 0 0 0.25rem 0.25rem;
  cursor: pointer;
  position: absolute;
  right: 5rem;
  bottom: -1.75rem;
  width: 3rem;
  height: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white[0]};
  color: ${colors.black[100]};
  box-shadow:
    -4px 5px 5px 0 rgba(0, 0, 0, 0.15),
    4px 5px 5px 0 rgba(0, 0, 0, 0.15);
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Header = ({
  children,
  className,
  style,
  expandable = true,
}: HeaderProps) => {
  const [expanded, setExpanded] = React.useState(true);

  const _onExpandHandler = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledHeader expanded={expanded} className={className} style={style}>
      {children}
      {expandable && (
        <StyledExpandIcon expanded={expanded} onClick={_onExpandHandler}>
          {expanded ? <IconChevronCompactUp /> : <IconChevronCompactDown />}
        </StyledExpandIcon>
      )}
    </StyledHeader>
  );
};

export default Header;
