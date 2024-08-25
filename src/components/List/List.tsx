import React from "react";
import { ListProps } from "./List.types";
import styled from "styled-components";
import Text from "../Text/Text";
import { ListItemProps } from "./ListItem/ListItem.types";

interface ListStyleProps {
  $variant: ListProps["variant"];
}

const List = ({
  title,
  children,
  variant = "ordered",
  size,
  containerStyle,
  color,
  style,
  className,
}: ListProps) => {


  const Title = () => {
    if (!title) return null;
    return typeof title === "string" ? (
      <Text color={color} variant="paragraph" size={size}>
        {title}
      </Text>
    ) : (
      title
    );
  };
  return (
    <div style={containerStyle}>
      {<Title/>}
      <StyledList $variant={variant} style={style} className={className}>
        {React.Children.map(children, (child) => {
          if(!child || !React.isValidElement(child)) return child;
          return React.cloneElement(child, {
            ...(!child.props.size && {size: size}),
            ...(!child.props.color && {color: color}),
          } as ListItemProps);
        })}
      </StyledList>
    </div>
  );
};
export default List;

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