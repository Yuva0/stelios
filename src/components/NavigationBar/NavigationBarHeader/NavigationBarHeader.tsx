import React from "react";
import { NavigationBarHeaderProps } from "./NavigationBarHeader.types";
import colors from "../../../tokens/colors.json";
import styled from "styled-components";
import Text from "../../Text/Text";

const StyledNavBarHeader = styled.li`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.25rem 0 0.25rem 2.25rem;
  color: ${colors.white[800]};
  &:before {
    content: "";
    position: absolute;
    width: 0.35rem;
    height: 0.35rem;
    left: 0;
    margin-left: 0.75rem;
    border-radius: 50%;
    border: 1px solid ${colors.white[300]};
  }
  &:after {
    content: "";
    position: absolute;
    height: 50%;
    margin-left: 0.93rem;
    border-left: 1px solid ${colors.white[300]};
    top: calc(50% + 0.175rem);
    left: 0;
  }
`;

const NavigationBarHeader = ({ children, style }: NavigationBarHeaderProps) => {
  return (
    <StyledNavBarHeader style={style}>
      {typeof children === "string" ? (
        <Text variant="span" size="small">
          {children}
        </Text>
      ) : (
        children
      )}
    </StyledNavBarHeader>
  );
};

export default NavigationBarHeader;
