import React from "react";
import {
  SideBarGroupProps,
  SideBarGroupStyleProps,
} from "./SideBarGroup.types";
import styled from "styled-components";
import Text from "../../Text/Text";
import Link from "../../Link/Link";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const StyledSideBarGroup = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const StyledSideBarGroupHeader = styled.li<SideBarGroupStyleProps>`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0.5rem 0.25rem 1rem;
  color: ${(props) => props.$colorPalette.primary.grayScale[11]};
`;

const SideBarGroup = ({
  children,
  className,
  style,
  title,
  leadingIcon,
  trailingIcon,
  size,
  selected,
  // Events
  onClick,
}: SideBarGroupProps) => {
  const theme = useTheme().theme;
  if(!theme) return;
  const colorPalette = theme.colorPalette;

  return (
    <StyledSideBarGroup className={className} style={style}>
      {(title || leadingIcon || trailingIcon) && (
        <StyledSideBarGroupHeader $colorPalette={colorPalette}>
          {leadingIcon && <span>{leadingIcon}</span>}
          {title && typeof title === "string" ? (
            onClick ? (
              <Link
                size={size}
                variant="hover"
                color={selected ? "primary" : undefined}
                onClick={onClick}
              >
                {title}
              </Link>
            ) : (
              <Text size={size} variant="span">
                {title}
              </Text>
            )
          ) : (
            title
          )}
          {trailingIcon && <span>{trailingIcon}</span>}
        </StyledSideBarGroupHeader>
      )}
      {children}
    </StyledSideBarGroup>
  );
};

export default SideBarGroup;
