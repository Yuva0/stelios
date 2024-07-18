import React from "react";
import { SideBarGroupItemProps } from "./SideBarGroupItem.types";
import Text from "../../Text/Text";
import styled from "styled-components";
import Link from "../../Link/Link";
import colors from "../../../tokens/colors.json";

const StyledSideBarGroupItem = styled(Link)`
  display: flex;
  padding: 0.25rem 0.5rem 0.25rem 1.75rem;
`;

const SideBarGroupItem = ({
  children,
  className,
  style,
}: SideBarGroupItemProps) => {
  return (
    <StyledSideBarGroupItem variant="hover" color={colors.black[0]} className={className} style={style}>
      {typeof children === "string" ? (
        <Text variant="span">{children}</Text>
      ) : (
        children
      )}
    </StyledSideBarGroupItem>
  );
};

export default SideBarGroupItem;
