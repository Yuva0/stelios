import React from "react";
import {
  AccordionItemProps,
  AccordionItemStyleProps,
} from "./AccordionItem.types";
import styled from "styled-components";
import Text from "../../Text/Text";
import { IconChevronDown } from "@tabler/icons-react";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const StyledAccordionItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledAccordionItemTitle = styled.div<AccordionItemStyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  background-color: ${(props) =>
    props.$colorPalette.primary.background};
  cursor: pointer;
  border-radius: 0.25rem;
  user-select: none;
  border-bottom: 1px solid ${(props) => props.$colorPalette.primary.grayScale[5]};

  & svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease-in-out;
    transform: ${(props) =>
      props.$expanded ? "rotate(180deg)" : "rotate(0deg)"};
    color: ${(props) => props.$colorPalette?.primary.grayScale[11]};
  }

  &:hover {
    background-color: ${(props) => props.$colorPalette.primary.grayScale[1]};
  }
  &:active {
    background-color: ${(props) => props.$colorPalette.primary.grayScale[2]};
  }
`;
const StyledAccordionItemContent = styled.div<AccordionItemStyleProps>`
  display: flex;
  flex-direction: column;
  transition: max-height 0.3s ease-in-out;
  max-height: ${(props) => (props.$expanded ? "100%" : "0")};
  overflow: hidden;
`;

const AccordionItem = ({ title, children, expanded, variant }: AccordionItemProps) => {
  const [isExpanded, setIsExpanded] = React.useState(expanded);
  const colorPalette = useTheme().theme.colorPalette;

  const _onTitleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const Title =
    title &&
    (typeof title === "string" ? (
      <StyledAccordionItemTitle
        $variant={variant}
        $colorPalette={colorPalette}
        $expanded={isExpanded}
        onClick={_onTitleClick}
      >
        <Text style={{ flexGrow: 1 }} variant="span">
          {title}
        </Text>
        <IconChevronDown />
      </StyledAccordionItemTitle>
    ) : (
      title
    ));
  return (
    <StyledAccordionItem>
      {Title}
      <StyledAccordionItemContent
        $colorPalette={colorPalette}
        $expanded={isExpanded}
      >
        {children}
      </StyledAccordionItemContent>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
