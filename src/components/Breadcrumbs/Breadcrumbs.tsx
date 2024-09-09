import * as React from "react";
import styled from "styled-components";
import colorTokens from "../../tokens/colors.json";
import { BreadcrumbsProps } from "./Breadcrumbs.types";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";

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

  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);
  
  return (
    <div style={{ display: "inline-flex" }} data-testid={dataTestId} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <>
            {React.cloneElement(child as React.ReactElement, {
              ...(!child.props.variant && variant && { variant: variant }),
              ...(!child.props.size && size && { size: size }),
              ...(!child.props.color && color && { color: color }),
            })}

            {index < React.Children.count(children) - 1 && (
              <StyledDelimiterSpan $size={size} $colorPalette={colorPalette} $color={color}>
                {delimiter ?? ">"}
              </StyledDelimiterSpan>
            )}
          </>
        );
      })}
    </div>
  );
};

const StyledDelimiterSpan = styled.span<{ $size: BreadcrumbsProps["size"], $colorPalette: any, $color: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: ${props => sizeHandler(props.$size)};
  color: ${props => props.$colorPalette[props.$color].accentScale[10]};
`;
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
