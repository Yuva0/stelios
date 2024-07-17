import React from "react";
import { NavigationBarItemProps } from "./NavigationBarItem.types";
import colors from "../../../tokens/colors.json";
import styled from "styled-components";
import Text from "../../Text/Text";

const StyledNavBarItem = styled.li`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.4rem 0 0.4rem 1.75rem;
  margin: 0 0.5rem;
  &:hover {
    background-color: ${colors.white[100]};
  }
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    margin-left: 0.43rem;
    border-left: 1px solid ${colors.white[200]};
    top: 0;
    left: 0;
  }
`;

const StyledNavBarIcon = styled.span`
  margin-left: auto;
`;

const NavigationBarItem = ({
  children,
  leadingIcon,
  trailingIcon,
  className,
  style,
  size,
}: NavigationBarItemProps) => {
  return (
    <StyledNavBarItem className={className} style={style}>
      {leadingIcon && <StyledNavBarIcon>{leadingIcon}</StyledNavBarIcon>}
      {typeof children === "string" ? (
        <Text variant="span" size={size}>
          {children}
        </Text>
      ) : (
        children
      )}
      {trailingIcon && <StyledNavBarIcon>{trailingIcon}</StyledNavBarIcon>}
    </StyledNavBarItem>
  );
};

export default NavigationBarItem;
