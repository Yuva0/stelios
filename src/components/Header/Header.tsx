import React from "react";
import {
  IconChevronCompactDown,
  IconChevronCompactUp,
} from "@tabler/icons-react";
import { HeaderProps, HeaderStyleProps } from "./Header.types";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const Header = ({
  id,
  children,
  height,
  className,
  style,
  expandable = true,
  iconWidth = "3rem",
  iconHeight = "1.75rem",
  iconRight = "5rem",
  iconBottom = "-1.5rem",
  color = colorTokens.default.primary.main,
  "data-testid": dataTestId,
  "data-testid-icon": dataTestIdIcon,
  ...props
}: HeaderProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(true);
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  const ExpandIcon = () => {
    const _onExpandHandler = () => {
      setExpanded(!expanded);
    };
    return (
      <StyledExpandIcon
        $colorPalette={colorPalette}
        $color={color}
        $expanded={expanded}
        $iconWidth={iconWidth}
        $iconHeight={iconHeight}
        $iconRight={iconRight}
        $iconBottom={iconBottom}
        onClick={_onExpandHandler}
        data-testid={dataTestIdIcon}
      >
        {expanded ? <IconChevronCompactUp /> : <IconChevronCompactDown />}
      </StyledExpandIcon>
    );
  };

  return (
    <StyledHeader
      id={id}
      $height={height}
      $expanded={expanded}
      $colorPalette={colorPalette}
      $color={color}
      className={className}
      style={style}
      data-testid={dataTestId}
      {...props}
    >
      {expanded && children}
      {expandable && <ExpandIcon />}
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header<HeaderStyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  z-index: 100;
  transition: height 330ms ease-in-out;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  ${(props) => {
    return `
      background-color: ${props.$colorPalette[props.$color].background};
      height: ${props.$expanded ? props.$height : "0rem"};
      box-shadow: ${props.$expanded ? "none" : "0 0 10px 0 rgba(0, 0, 0, 0.35)"};
      outline: ${props.$expanded ? `1px solid ${props.$colorPalette[props.$color].grayScale[5]}` : "none"};
    `;
  }}
`;

const StyledExpandIcon = styled.div<HeaderStyleProps>`
  position: absolute;
  border-radius: 0 0 0.25rem 0.25rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    -4px 5px 5px 0 rgba(0, 0, 0, 0.15),
    4px 5px 5px 0 rgba(0, 0, 0, 0.15);
  svg {
    width: 100%;
    height: 100%;
  }
  ${(props) => {
    return `
      right: ${props.$iconRight};
      bottom: ${props.$iconBottom};
      width: ${props.$iconWidth};
      height: ${props.$iconHeight};
      background-color: ${props.$colorPalette[props.$color].background};
      color: ${props.$colorPalette[props.$color].grayScale[11]};
    `;
  }}
`;
