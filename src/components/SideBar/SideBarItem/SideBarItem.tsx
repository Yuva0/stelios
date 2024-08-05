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
  color: ${(props) => props.$selected ? props.$colorPalette.primary.accentScale[11] : props.$colorPalette.primary.grayScale[11]};
`;

const SideBarItem = ({
  children,
  className,
  style,
  size,
  selected,
}: SideBarItemProps) => {
  const colorPalette = useTheme().theme.colorPalette;

  console.log(colorPalette.primary.accentScale[11]);

  if (typeof children === "string")
    return (
      <StyledSideBarLink
        color={selected ? "primary" : undefined}
        size={size}
        variant="hover"
        className={className}
        style={style}
      >
        {children}
      </StyledSideBarLink>
    );

  return (
    <StyledSideBarItem $colorPalette={colorPalette}>
      {children}
    </StyledSideBarItem>
  );
};

export default SideBarItem;
