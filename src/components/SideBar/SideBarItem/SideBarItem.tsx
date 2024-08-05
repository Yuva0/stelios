import React from "react";
import styled from "styled-components";
import { SideBarItemProps, SideBarItemStyleProps } from "./SideBarItem.types";
import Link from "../../Link/Link";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const StyledSideBarLink = styled(Link)`
  padding: 0.25rem 0.5rem 0.25rem 1rem;
  width: fit-content;
  position: relative;
`;

const StyledSideBarItem = styled.div<SideBarItemStyleProps>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem 0.25rem 1rem;
  color: ${(props) =>
    props.$selected
      ? props.$colorPalette.primary.accentScale[11]
      : props.$colorPalette.primary.grayScale[11]};
`;

const SideBarItem = ({
  children,
  className,
  style,
  size,
  selected,
  //Events
  onClick,
}: SideBarItemProps) => {
  const colorPalette = useTheme().theme.colorPalette;

  if (typeof children === "string")
    return (
      <StyledSideBarLink
        color={selected ? "primary" : undefined}
        size={size}
        variant="hover"
        className={className}
        style={style}
        onClick={onClick}
      >
        {children}
      </StyledSideBarLink>
    );

  return (
    <StyledSideBarItem $colorPalette={colorPalette} onClick={onClick}>
      {children}
    </StyledSideBarItem>
  );
};

export default SideBarItem;
