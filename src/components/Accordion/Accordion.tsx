import React from "react";
import styled from "styled-components";
import { AccordionProps, AccordionStyleProps } from "./Accordion.types";
import Text from "../Text/Text";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const StyledAccordion = styled.div<AccordionStyleProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.$width ?? "340px"};
  background-color: ${(props) => props.$colorPalette?.primary.background};
  border-radius: 0.25rem;
`;

const Accordion = ({ title, children, width }: AccordionProps) => {
  const colorPalette = useTheme().theme.colorPalette;

  const Title =
    title &&
    (typeof title === "string" ? <Text variant="div">{children}</Text> : title);

  return (
    <StyledAccordion $width={width} $colorPalette={colorPalette}>
      {Title}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, {
          variant: "transparent",
        });
      })}
    </StyledAccordion>
  );
};

export default Accordion;
