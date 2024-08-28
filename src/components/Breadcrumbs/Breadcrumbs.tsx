import * as React from "react";
import styled from "styled-components";
import colorTokens from "../../tokens/colors.json";
import { BreadcrumbsProps } from "./Breadcrumbs.types";

const StyledDelimiterSpan = styled.span<{ size: BreadcrumbsProps["size"] }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: ${props => sizeHandler(props.size)};
`;

const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = ({
  children,
  delimiter,
  color = colorTokens.default.primary.main,
  size = "medium",
  variant = "contained",
  //Test Props
  "data-testid": dataTestId,
  ...props
}) => {
  return (
    <div style={{ display: "inline-flex" }} data-testid={dataTestId} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <>
            {React.cloneElement(child as React.ReactElement, {
              ...(!child.props.variant && { variant: variant }),
              ...(!child.props.size && { size: size }),
              ...(!child.props.color && { color: color }),
            })}

            {index < React.Children.count(children) - 1 && (
              <StyledDelimiterSpan size={size}>
                {delimiter ?? ">"}
              </StyledDelimiterSpan>
            )}
          </>
        );
      })}
    </div>
  );
};
const sizeHandler = (size: BreadcrumbsProps["size"]) => {
  switch (size) {
    case "small":
      return "0 0.25rem";
    case "medium":
      return "0 0.25rem";
    case "large":
      return "0 0.5rem";
  }
};

export default Breadcrumbs;
