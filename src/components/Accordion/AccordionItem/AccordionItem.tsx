import React from "react";
import {
  AccordionItemContentStyleProps,
  AccordionItemProps,
  AccordionItemStyleProps,
} from "./AccordionItem.types";
import styled from "styled-components";
import Text from "../../Text/Text";
import { IconChevronDown } from "@tabler/icons-react";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../../helpers/helpers";
import colorTokens from "../../../tokens/colors.json";

const AccordionItem = ({
  title,
  children,
  expanded,
  variant = "contained",
  color = colorTokens.default.primary.main,
}: AccordionItemProps) => {
  const [isExpanded, setIsExpanded] = React.useState(expanded);
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  const _onTitleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const AccordionItemTitle = () => {
    if (!title) return null;
    const titleContent =
      typeof title === "string" ? (
        <Text noColor variant="paragraph">{title}</Text>
      ) : (
        title
      );
    return (
      <StyledAccordionItemTitle
        $color={color}
        $variant={variant}
        $colorPalette={colorPalette}
        $expanded={isExpanded}
        onClick={_onTitleClick}
      >
        {titleContent}
        <IconChevronDown />
      </StyledAccordionItemTitle>
    );
  };

  const Children = () => {
    if (!React.isValidElement(children)) return null;
    if (typeof children  === "string") {
      return <Text noColor variant="paragraph">{children}</Text>;
    }
    return children;
  }

  return (
    <StyledAccordionItem>
      <AccordionItemTitle />
      {isExpanded && <StyledAccordionItemContent
        $variant={variant}
        $color={color}
        $colorPalette={colorPalette}
        $expanded={isExpanded}
      >
        <Children />
      </StyledAccordionItemContent>}
    </StyledAccordionItem>
  );
};
export default AccordionItem;

const StyledAccordionItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledAccordionItemTitle = styled.div<AccordionItemStyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;

  ${props => {
    const properties = propsTitleHandler(props.$variant, props.$color, props.$colorPalette, props.$expanded);
    return `
      background-color: ${properties.backgroundColor.default};
      color: ${properties.color.default};
      border: ${properties.border.default};
      cursor: pointer;
      user-select: none;

      &:hover {
        background-color: ${properties.backgroundColor.hover};
        color: ${properties.color.hover};
        border: ${properties.border.hover};
        ${properties.filter ? `filter: ${properties.filter.hover}`:""};
      }
      &:active {
        background-color: ${properties.backgroundColor.active};
        color: ${properties.color.active};
        border: ${properties.border.active};
        ${properties.filter ? `filter: ${properties.filter.active}`:""};
      }
      & svg{
        width: 20px;
        height: 20px;
        transform: ${props.$expanded ? "rotate(180deg)" : "rotate(0deg)"};
        color: ${properties.svg.color.default};
      }
    `;
  }}
`;
const propsTitleHandler = (
  variant: AccordionItemStyleProps["$variant"],
  color: string,
  colorPalette: AccordionItemStyleProps["$colorPalette"],
  $expanded: AccordionItemStyleProps["$expanded"]
) => {
  return {...getVariantTitleProps(variant, color, colorPalette)};
};
const getVariantTitleProps = (
  variant: AccordionItemStyleProps["$variant"],
  color: AccordionItemStyleProps["$color"],
  colorPalette: AccordionItemStyleProps["$colorPalette"]
) => {
  switch (variant) {
    case "contained":
      return {
        backgroundColor: {
          default: colorPalette[color].accentScale[8],
          hover: colorPalette[color].accentScale[9],
          active: colorPalette[color].accentScale[9],
        },
        color: {
          default: colorPalette[color].accentContrast,
          hover: colorPalette[color].accentContrast,
          active: colorPalette[color].accentContrast,
        },
        filter: {
          hover: "brightness(0.96) saturate(1.1)",
          active: "brightness(0.92) saturate(1.1)"
        },
        border: {
          default: `1px solid ${colorPalette[color].accentScale[7]}`,
          hover: `1px solid ${colorPalette[color].accentScale[8]}`,
          active: `1px solid ${colorPalette[color].accentScale[8]}`
        },
        svg: {
          color: {
            default: colorPalette[color].accentContrast,
          }
        }
      };
    case "outlined":
      return {
        backgroundColor: {
          default: "transparent",
          hover: "transparent",
          active: "transparent",
        },
        color: {
          default: colorPalette[color].accentScale[10],
          hover: colorPalette[color].accentScale[10],
          active: colorPalette[color].accentScale[10],
        },
        border: {
          default: `1px solid ${colorPalette[color].accentScale[6]}`,
          hover: `1px solid ${colorPalette[color].accentScale[6]}`,
          active: `1px solid ${colorPalette[color].accentScale[7]}`
        },
        svg: {
          color: {
            default: colorPalette[color].accentScale[10],
          }
        }
      }
    case "soft":
      return {
        backgroundColor: {
          default: colorPalette[color].accentScale[2],
          hover: colorPalette[color].accentScale[3],
          active: colorPalette[color].accentScale[3],
        },
        color: {
          default: colorPalette[color].accentScale[10],
          hover: colorPalette[color].accentScale[10],
          active: colorPalette[color].accentScale[10],
        },
        border: {
          default: `1px solid ${colorPalette[color].accentScale[2]}`,
          hover: `1px solid ${colorPalette[color].accentScale[3]}`,
          active: `1px solid ${colorPalette[color].accentScale[3]}`
        },
        filter: {
          hover: "brightness(0.96) saturate(1.1)",
          active: "brightness(0.92) saturate(1.1)",
        },
        svg: {
          color: {
            default: colorPalette[color].accentScale[10],
          }
        }
      }
    case "outlined-soft":
      return {
        backgroundColor: {
          default: colorPalette[color].accentScale[2],
          hover: colorPalette[color].accentScale[3],
          active: colorPalette[color].accentScale[3],
        
        },
        color: {
          default: colorPalette[color].accentScale[10],
          hover: colorPalette[color].accentScale[10],
          active: colorPalette[color].accentScale[10],
        },
        border: {
          default: `1px solid ${colorPalette[color].accentScale[5]}`,
          hover: `1px solid ${colorPalette[color].accentScale[6]}`,
          active: `1px solid ${colorPalette[color].accentScale[6]}`
        },
        filter: {
          hover: "brightness(0.96) saturate(1.1)",
          active: "brightness(0.92) saturate(1.1)",
        },
        svg: {
          color: {
            default: colorPalette[color].accentScale[10],
          }
        }
      }
      
  }
};

const StyledAccordionItemContent = styled.div<AccordionItemContentStyleProps>`
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.$expanded ? "100%" : "0")};
  padding: ${(props) => (props.$expanded ? "0.5rem 1rem 1rem 1rem;" : "0")};
  overflow: hidden;
  ${props => {
    const properties = propsContentHandler(props.$variant, props.$color, props.$colorPalette);
    return `
      color: ${properties.color.default};
      background-color: ${properties.backgroundColor.default};
      border-left: ${properties.borderLeft.default};
      border-right: ${properties.borderRight.default};
      &:last-child {
        border-bottom: ${properties.borderLeft.default};
      }
    `;
  }}
`;
const propsContentHandler = (
  variant: AccordionItemContentStyleProps["$variant"],
  color: AccordionItemContentStyleProps["$color"],
  colorPalette: AccordionItemContentStyleProps["$colorPalette"],
) => {
  return {...getContentVariantProps(variant, color, colorPalette)};
}
const getContentVariantProps = (
  variant: AccordionItemContentStyleProps["$variant"],
  color: AccordionItemContentStyleProps["$color"],
  colorPalette: AccordionItemContentStyleProps["$colorPalette"]
) => {
  switch (variant) {
    case "contained":
      return {
        backgroundColor: {
          default: colorPalette[color].accentScale[8],
        },
        color: {
          default: colorPalette[color].accentContrast,
        },
        borderLeft: {
          default: `2px solid ${colorPalette[color].accentScale[8]}`,
        },
        borderRight: {
          default: `2px solid ${colorPalette[color].accentScale[8]}`,
        }
      };
    case "outlined":
      return {
        backgroundColor: {
          default: "transparent",
        },
        color: {
          default: colorPalette[color].accentScale[10],
        },
        borderLeft: {
          default: `2px solid ${colorPalette[color].accentScale[6]}`,
        },
        borderRight: {
          default: `2px solid ${colorPalette[color].accentScale[6]}`,
        }
      }
    case "soft":
      return {
        backgroundColor: {
          default: colorPalette[color].accentScale[2],
        },
        color: {
          default: colorPalette[color].accentScale[10],
        },
        borderLeft: {
          default: `2px solid ${colorPalette[color].accentScale[2]}`,
        },
        borderRight: {
          default: `2px solid ${colorPalette[color].accentScale[2]}`,
        }
      }
    case "outlined-soft":
      return {
        backgroundColor: {
          default: colorPalette[color].accentScale[2],
        },
        color: {
          default: colorPalette[color].accentScale[10],
        },
        borderLeft: {
          default: `2px solid ${colorPalette[color].accentScale[5]}`,
        },
        borderRight: {
          default: `2px solid ${colorPalette[color].accentScale[5]}`,
        }
      }
  }
}