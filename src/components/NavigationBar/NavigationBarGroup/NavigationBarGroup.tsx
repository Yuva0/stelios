import React, { useState } from "react";
import { NavigationBarGroupProps } from "./NavigationBarGroup.types";
import Text from "../../Text/Text";
import styled from "styled-components";
import colors from "../../../tokens/colors.json";
import { IconChevronRight } from "@tabler/icons-react";

interface StyledNavBarGroupProps {
  expand?: boolean;
}

const StyledNavBarGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  margin: 0.25rem 0 0 0;
  padding: 0;
`;
const StyledNavBarGroupHeader = styled.li`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  padding: 0.3rem 0.75rem;
  border-radius: 0.5rem;
  margin: 0 0.5rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: ${colors.white[100]};
  }
`;
const StyledNavBarGroupIcon = styled.span<StyledNavBarGroupProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: rotate 0.15s ease-in-out;
  rotate: ${(props) => (props.expand ? "90deg" : "")};
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const StyledNavBarGroupItemContainer = styled.ul<StyledNavBarGroupProps>`
  height: auto;
  max-height: ${(props) => (props.expand ? "100vh" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  gap: 0.25rem;
  padding: 0;
`;

const NavigationBarGroup = ({
  leadingIcon,
  children,
  title,
  isDefaultExpanded,
  className,
}: NavigationBarGroupProps) => {
  const navigationBarGrpItmContnrRef = React.useRef(null);
  const [expand, setExpand] = useState(isDefaultExpanded ?? false);

  const _toggleExpand = (e: React.MouseEvent) => {
    setExpand((expand) => !expand);
  };

  return (
    <StyledNavBarGroup className={className}>
      <StyledNavBarGroupHeader onClick={_toggleExpand}>
        {leadingIcon && (
          <StyledNavBarGroupIcon>{leadingIcon}</StyledNavBarGroupIcon>
        )}
        {title && typeof title === "string" ? (
          <Text variant="span">{title}</Text>
        ) : (
          title
        )}
        {
          <StyledNavBarGroupIcon expand={expand}>
            <IconChevronRight />
          </StyledNavBarGroupIcon>
        }
      </StyledNavBarGroupHeader>
      {
        <StyledNavBarGroupItemContainer
          ref={navigationBarGrpItmContnrRef}
          expand={expand}
        >
          {children}
        </StyledNavBarGroupItemContainer>
      }
    </StyledNavBarGroup>
  );
};

export default NavigationBarGroup;
