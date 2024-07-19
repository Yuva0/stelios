import React from "react";
import { NavigationBarItemProps } from "./NavigationBarItem.types";
import colors from "../../../tokens/colors.json";
import styled from "styled-components";
import Text from "../../Text/Text";

const StyledNavBarItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.3rem 0.75rem;
  margin: 0 0.5rem;
  &:hover {
    background-color: ${colors.white[100]};
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
