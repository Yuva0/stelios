import * as React from "react";
import { CollapsibleProps, CollapsibleStyleProps } from "./Collapsible.types";
import styled, { css } from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colors from "../../tokens/colors.json";
import Text from "../Text/Text";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const Collapsible: React.FC<CollapsibleProps> = ({
  variant = "contained",
  title,
  children,
  isOpen,
  color = colors.default.primary.main,
  width = "300px",
  onToggle,
  ...props
}) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  const [_isOpen, setIsOpen] = React.useState(!isOpen);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    onToggle && onToggle(!_isOpen);
  };

  return (
    <StyledCollapsibleCtr
      $variant={variant}
      $colorPalette={colorPalette}
      $color={color}
      $width={width}
      {...props}
    >
      <StyledCollapsibleTitle
        $variant={variant}
        $colorPalette={colorPalette}
        $color={color}
        onClick={handleToggle}
      >
        {typeof title === "string" ? (
          <Text disableColor variant="paragraph">
            {title}
          </Text>
        ) : (
          title
        )}
        <StyledIcon>
          {_isOpen ? <IconChevronDown /> : <IconChevronUp />}
        </StyledIcon>
      </StyledCollapsibleTitle>
      {/* {!_isOpen && children} */}
      {_isOpen && 
        <StyledChildren>
          {children}
        </StyledChildren>
      }
    </StyledCollapsibleCtr>
  );
};

const StyledCollapsibleCtr = styled.div<CollapsibleStyleProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.$width};
  border-radius: 1rem;
  ${(props) =>
    variantStylesHandler(props.$variant, props.$colorPalette, props.$color)?.container}
`;

const StyledCollapsibleTitle = styled.div<CollapsibleStyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  ${(props) => variantStylesHandler(props.$variant, props.$colorPalette, props.$color)?.title}
  cursor: pointer;
`;
const StyledIcon = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

const StyledChildren = styled.div`
  padding: 1rem;
`;

const variantStylesHandler = (
  $variant: CollapsibleStyleProps["$variant"],
  $colorPalette: CollapsibleStyleProps["$colorPalette"],
  $color: CollapsibleStyleProps["$color"]
) => {
  switch ($variant) {
    case "contained":
      return {
        container: css`
          background-color: ${$colorPalette[$color].accentScale[8]};
          color: ${$colorPalette[$color].grayScale[0]};
        `,
        title: css`
          background-color: ${$colorPalette[$color].accentScale[8]};
          color: ${$colorPalette[$color].grayScale[0]};
          border: 2px solid ${$colorPalette[$color].accentScale[8]};
          border-bottom: 2px solid ${$colorPalette[$color].accentScale[11]};
          &:hover{
            background-color: ${$colorPalette[$color].accentScale[9]};
          }
          &:active{
            background-color: ${$colorPalette[$color].accentScale[9]};
          }
        `,
      }
    case "outlined": {
      return {
        container: css`
          background-color: "transparent";
          color: ${$colorPalette[$color].grayScale[0]};
        `,
        title: css`
          background-color: ${$colorPalette[$color].accentScale[8]};
          color: ${$colorPalette[$color].grayScale[0]};
          &:hover{
            background-color: ${$colorPalette[$color].accentScale[9]};
          }
          &:active{
            background-color: ${$colorPalette[$color].accentScale[9]};
          }
        `,
      }
    }
  }
};

export default Collapsible;
