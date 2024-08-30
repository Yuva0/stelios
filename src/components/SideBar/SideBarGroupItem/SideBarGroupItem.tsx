import React from "react";
import {
  SideBarGroupItemProps,
  SideBarGroupItemStyleProps,
} from "./SideBarGroupItem.types";
import styled from "styled-components";
import Link from "../../Link/Link";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../../helpers/helpers";
import colorTokens from "../../../tokens/colors.json";

const StyledSideBarGroupItem = styled.div<SideBarGroupItemStyleProps>`
  display: flex;
  padding: 0.25rem 0.5rem 0.25rem 1.75rem;
`;

const SideBarGroupItem = ({
  children,
  className,
  style,
  size,
  selected,
  color = colorTokens.default.primary.main,
  // Events
  onClick,
  "data-testid": dataTestId,
  ...props
}: SideBarGroupItemProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  return (
    <StyledSideBarGroupItem
      $colorPalette={colorPalette}
      $color={color}
      className={className}
      style={style}
      onClick={onClick}
      data-testid={dataTestId}
      {...props}
    >
      {typeof children === "string" ? (
        <Link
          tabIndex={onClick ? 0 : undefined}
          size={size}
          variant="hover"
          color={color}
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
