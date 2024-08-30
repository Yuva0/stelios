import React from "react";
import {
  SideBarGroupProps,
  SideBarGroupStyleProps,
} from "./SideBarGroup.types";
import styled from "styled-components";
import Text from "../../Text/Text";
import Link from "../../Link/Link";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../../helpers/helpers";
import colorTokens from "../../../tokens/colors.json";

const SideBarGroup = ({
  children,
  className,
  style,
  title,
  leadingIcon,
  trailingIcon,
  size,
  selected,
  color = colorTokens.default.primary.main,
  // Events
  onClick,
  "data-testid": dataTestId,
  ...props
}: SideBarGroupProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  return (
    <StyledSideBarGroup
      className={className}
      style={style}
      data-testid={dataTestId}
      {...props}
    >
      {(title || leadingIcon || trailingIcon) && (
        <StyledSideBarGroupHeader $colorPalette={colorPalette} $color={color}>
          {leadingIcon && <span>{leadingIcon}</span>}
          {title && typeof title === "string" ? (
            onClick ? (
              <Link size={size} variant="hover" color={color} onClick={onClick}>
                {title}
              </Link>
            ) : (
              <Text color={color} size={size} variant="span">
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
  color: ${(props) => props.$colorPalette[props.$color].grayScale[11]};
`;
