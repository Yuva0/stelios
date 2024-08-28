import React from "react";
import styled from "styled-components";
import { AccordionProps, AccordionStyleProps } from "./Accordion.types";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import colors from "../../tokens/colors.json";
import { getColorPalette } from "../../helpers/helpers";
import { AccordionItemProps } from "./AccordionItem/AccordionItem.types";

const Accordion = ({
  children,
  variant = "contained",
  width,
  color = colors.default.primary.main,
  isFullWidth = false,
  "data-testid": dataTestId,
}: AccordionProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  return (
    <StyledAccordion
      $variant={variant}
      $width={width}
      $color={color}
      $colorPalette={colorPalette}
      $isFullWidth={isFullWidth}
      data-testid={dataTestId}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          ...(!child.props.variant && variant && { variant: variant }),
          ...(!child.props.color && color && { color: color }),
        } as AccordionItemProps);
      })}
    </StyledAccordion>
  );
};
export default Accordion;

const StyledAccordion = styled.div<AccordionStyleProps>`
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  width: ${({ $width, $isFullWidth }) =>
    $width ?? ($isFullWidth ? "100%" : "400px")};
  max-width: 100%;
`;
