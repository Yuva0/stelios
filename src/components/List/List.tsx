import React from "react";
import { ListProps } from "./List.types";
import styled from "styled-components";
import Text from "../Text/Text";

interface ListStyleProps {
  $variant: ListProps["variant"];
}

const StyledList = styled.ul<ListStyleProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.75rem 0 0 0;
  padding: 0 0 0 2rem;
  font-family: "Lato", sans-serif;
  list-style-type: ${(props) =>
    props.$variant === "ordered"
      ? "decimal"
      : props.$variant === "unordered"
        ? "disc"
        : "none"};
`;

const Title = (title?: React.ReactNode, size?: ListProps["size"]) => {
  if (!title) return null;
  return typeof title === "string" ? (
    <Text variant="paragraph" size={size}>
      {title}
    </Text>
  ) : (
    title
  );
};

const List = ({
  title,
  children,
  variant = "ordered",
  size,
  style,
  className,
}: ListProps) => {
  return (
    <div>
      {Title(title, size)}
      <StyledList $variant={variant} style={style} className={className}>
        {children}
      </StyledList>
    </div>
  );
};

export default List;
