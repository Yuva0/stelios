import React from "react";
import styled from "styled-components";
import { SideBarItemProps, SideBarItemStyleProps } from "./SideBarItem.types";
import Link from "../../Link/Link";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const StyledSideBarItem = styled.div<SideBarItemStyleProps>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem 0.25rem 1rem;
  width: fit-content;
  positon: relative;
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
  const theme = useTheme().theme;
  if(!theme) return;
  const colorPalette = theme.colorPalette;

  return (
    <StyledSideBarItem $colorPalette={colorPalette} onClick={onClick}>
      {typeof children === "string" ? (
        <Link
          tabIndex={onClick ? 0 : undefined}
          color={selected ? "primary" : undefined}
          size={size}
          variant="hover"
          className={className}
          style={style}
          onClick={onClick}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </StyledSideBarItem>
  );
};

export default SideBarItem;
