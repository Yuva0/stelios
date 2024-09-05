import React, { useState } from "react";
import {
  NavigationBarGroupProps,
  NavigationBarGroupStyleProps,
} from "./NavigationBarGroup.types";
import Text from "../../Text/Text";
import styled from "styled-components";
import { IconChevronRight } from "@tabler/icons-react";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../../helpers/helpers";
import colorTokens from "../../../tokens/colors.json";

const NavigationBarGroup = ({
  leadingIcon,
  children,
  title,
  expanded = false,
  className,
  color = colorTokens.default.primary.main,
  onClick,
  "data-testid": dataTestId,
  "data-testid-header": dataTestIdHeader,
}: NavigationBarGroupProps) => {
  const navigationBarGrpItmContnrRef = React.useRef(null);
  const [expand, setExpand] = useState(expanded);
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  const _toggleExpand = (e: React.MouseEvent | React.KeyboardEvent) => {
    setExpand((expand) => !expand);
    onClick && onClick(e);
  };
  const _handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      _toggleExpand(e);
      onClick && onClick(e);
    }
  };

  return (
    <StyledNavBarGroup className={className} data-testid={dataTestId}>
      <StyledNavBarGroupHeader
        tabIndex={0}
        $color={color}
        $colorPalette={colorPalette}
        onClick={_toggleExpand}
        onKeyDown={_handleKeyDown}
        data-testid={dataTestIdHeader}
      >
        <span>
          {leadingIcon && (
            <StyledNavBarGroupIcon $colorPalette={colorPalette} $color={color}>
              {leadingIcon}
            </StyledNavBarGroupIcon>
          )}
          {title && typeof title === "string" ? (
            <Text color={color} variant="span">{title}</Text>
          ) : (
            title
          )}
        </span>
        {
          <StyledNavBarGroupIcon $colorPalette={colorPalette} $color={color} $expand={expand}>
            <IconChevronRight />
          </StyledNavBarGroupIcon>
        }
      </StyledNavBarGroupHeader>
      {
        <StyledNavBarGroupItemContainer
          ref={navigationBarGrpItmContnrRef}
          $colorPalette={colorPalette}
          $color={color}
          $expand={expand}
        >
          {React.Children.map(children, (child, index) => 
            child && React.cloneElement(child as React.ReactElement, {
              tabIndex: expand ? 0 : -1,
              key: index,
            } as Partial<NavigationBarGroupProps>)
          )}
        </StyledNavBarGroupItemContainer>
      }
    </StyledNavBarGroup>
  );
};
NavigationBarGroup.displayName = "NavigationBarGroup";
export default NavigationBarGroup;

const StyledNavBarGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  margin: 0.25rem 0 0 0;
  padding: 0;
`;
const StyledNavBarGroupHeader = styled.li<NavigationBarGroupStyleProps>`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.75rem;
  border-radius: 0.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.$colorPalette[props.$color].grayScale[1]};
  }
  &:active {
    background-color: ${(props) => props.$colorPalette[props.$color].grayScale[2]};
  }
  &:focus-visible {
    outline: 1px solid ${(props) => props.$colorPalette[props.$color].accentScale[6]};
  }
`;
const StyledNavBarGroupIcon = styled.span<NavigationBarGroupStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: rotate 0.15s ease-in-out;
  rotate: ${(props) => (props.$expand ? "90deg" : "")};
  svg {
    width: 1rem;
    height: 1rem;
  }
  color: ${(props) => props.$colorPalette[props.$color].grayScale[11]};
`;
const StyledNavBarGroupItemContainer = styled.ul<NavigationBarGroupStyleProps>`
  height: auto;
  max-height: ${(props) => (props.$expand ? "100vh" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  gap: 0.25rem;
  padding: 0;

  li:first-child {
    margin-top: 0.1rem;
  }
  li:last-child {
    margin-bottom: 0.1rem;
  }
`;