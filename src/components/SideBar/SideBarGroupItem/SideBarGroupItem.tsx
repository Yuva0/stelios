import React from "react";
import {
  SideBarGroupItemProps,
  SideBarGroupItemStyleProps,
} from "./SideBarGroupItem.types";
import styled from "styled-components";
import Link from "../../Link/Link";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const StyledSideBarGroupItem = styled(Link)<SideBarGroupItemStyleProps>`
  display: flex;
  padding: 0.25rem 0.5rem 0.25rem 1.75rem;
`;

const SideBarGroupItem = ({
  children,
  className,
  style,
  size,
  selected,
  // Events
  onClick,
}: SideBarGroupItemProps) => {
  const colorPalette = useTheme().theme.colorPalette;

  return (
    <StyledSideBarGroupItem
      variant="hover"
      $colorPalette={colorPalette}
      className={className}
      style={style}
      onClick={onClick}
    >
      {typeof children === "string" ? (
        <Link
          tabIndex={onClick ? 0 : undefined}
          size={size}
          variant="hover"
          color={selected ? "primary" : undefined}
          className={className}
          style={style}
          onClick={onClick}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </StyledSideBarGroupItem>
  );
};

export default SideBarGroupItem;
