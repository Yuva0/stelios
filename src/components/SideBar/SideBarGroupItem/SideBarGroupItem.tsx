import React from "react";
import {
  SideBarGroupItemProps,
  SideBarGroupItemStyleProps,
} from "./SideBarGroupItem.types";
import Text from "../../Text/Text";
import styled from "styled-components";
import Link from "../../Link/Link";
import colors from "../../../tokens/colors.json";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const StyledSideBarGroupItem = styled(Link)<SideBarGroupItemStyleProps>`
  display: flex;
  padding: 0.25rem 0.5rem 0.25rem 1.75rem;
  color: ${(props) => props.$colorPalette.primary.grayScale[11]};
`;

const SideBarGroupItem = ({
  children,
  className,
  style,
}: SideBarGroupItemProps) => {
  const colorPalette = useTheme().theme.colorPalette;

  return (
    <StyledSideBarGroupItem
      variant="hover"
      $colorPalette={colorPalette}
      className={className}
      style={style}
    >
      {typeof children === "string" ? (
        <Text noColor variant="span">
          {children}
        </Text>
      ) : (
        children
      )}
    </StyledSideBarGroupItem>
  );
};

export default SideBarGroupItem;
