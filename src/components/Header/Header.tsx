import React from "react";

import { HeaderProps, HeaderStyleProps } from "./Header.types";
import styled from "styled-components";
import {
  IconChevronCompactDown,
  IconChevronCompactUp,
} from "@tabler/icons-react";
import colors from "../../tokens/colors.json";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const StyledHeader = styled.header<HeaderStyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  transition: height 330ms ease-in-out;
  background-color: ${(props) => props.$colorPalette.primary.background};
  z-index: 1000;
  padding: 0 1rem;
  height: ${(props) => (props.$expanded ? props.$height ?? "5rem" : "0rem")};
  position: fixed;
  box-shadow: ${(props) =>
    props.$expanded ? "none" : "0 0 10px 0 rgba(0, 0, 0, 0.35)"};
  outline: ${(props) =>
    props.$expanded
      ? `1px solid ${props.$colorPalette.primary.grayScale[5]}`
      : "none"};
`;

const StyledExpandIcon = styled.div<HeaderStyleProps>`
  border-radius: 0 0 0.25rem 0.25rem;
  cursor: pointer;
  position: absolute;
  right: ${(props) => props.$iconRight ?? `5rem`};
  bottom: ${(props) => props.$iconBottom ?? `-1.75rem`};
  width: ${(props) => props.$iconWidth ?? `3rem`};
  height: ${(props) => props.$iconHeight ?? `1.75rem`};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$colorPalette.primary.background};
  color: ${(props) => props.$colorPalette.primary.grayScale[11]};
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
  height,
  className,
  style,
  expandable = true,
  iconWidth,
  iconHeight,
  iconRight,
  iconBottom,
}: HeaderProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(true);

  const colorPalette = useTheme().theme.colorPalette;
  console.log(colorPalette);

  const _onExpandHandler = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledHeader
      $height={height}
      $expanded={expanded}
      $colorPalette={colorPalette}
      className={className}
      style={style}
    >
      {expanded && children}
      {expandable && (
        <StyledExpandIcon
          $colorPalette={colorPalette}
          $expanded={expanded}
          $iconWidth={iconWidth}
          $iconHeight={iconHeight}
          $iconRight={iconRight}
          $iconBottom={iconBottom}
          onClick={_onExpandHandler}
        >
          {expanded ? <IconChevronCompactUp /> : <IconChevronCompactDown />}
        </StyledExpandIcon>
      )}
    </StyledHeader>
  );
};

export default Header;
