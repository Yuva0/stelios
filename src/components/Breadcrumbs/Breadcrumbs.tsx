import { delimiter } from "path";
import * as React from "react";
import styled from "styled-components";
interface BreadcrumbsProps {
  children: React.ReactNode | React.ReactNode[];
  delimiter?: string;
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";
  size?: "small" | "medium" | "large";
}

const StyledDelimiterSpan = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem 0rem 0.5rem;
`;

const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = ({
  children,
  delimiter,
  color,
  size
}) => {
  return (
    <div>
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {React.cloneElement(child as React.ReactElement, {
              color: color,
              size: size,
            })}

            <StyledDelimiterSpan>
              {index < React.Children.count(children) - 1 && (delimiter ?? ">")}
            </StyledDelimiterSpan>
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
