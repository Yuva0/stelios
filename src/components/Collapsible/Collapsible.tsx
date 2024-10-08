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
  open = false,
  color = colors.default.primary.main,
  width = "auto",
  style,
  className,
  onToggle,
  "data-testid": dataTestId,
  "data-testid-title": dataTestIdTitle,
  ...props
}) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);

  const [_isOpen, setIsOpen] = React.useState(open);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    onToggle && onToggle(!_isOpen);
  };

  const _ChildrenEle = typeof children === "string" ? 
  (<StyledChildren $variant={variant} $colorPalette={colorPalette} $color={color}>
    <Text disableColor variant="paragraph">{children}</Text>
  </StyledChildren>) : children;

  return (
    <StyledCollapsibleCtr
      $variant={variant}
      $colorPalette={colorPalette}
      $color={color}
      $width={width}
      $open={_isOpen}
      style={style}
      className={className}
      data-testid={dataTestId}
      {...props}
    >
      <StyledCollapsibleTitle
        $variant={variant}
        $colorPalette={colorPalette}
        $color={color}
        onClick={handleToggle}
        data-testid={dataTestIdTitle}
      >
        {typeof title === "string" ? (
          <Text disableColor variant="paragraph">
            {title}
          </Text>
        ) : (
          title
        )}
        <StyledIcon>
          {_isOpen ? <IconChevronUp /> : <IconChevronDown />}
        </StyledIcon>
      </StyledCollapsibleTitle>
      {_isOpen && _ChildrenEle}
    </StyledCollapsibleCtr>
  );
};

const StyledCollapsibleCtr = styled.div<CollapsibleStyleProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.$width};
  border-radius: 1rem;
  ${(props) =>
    variantStylesHandler(props.$variant, props.$colorPalette, props.$color, props.$open).container}
`;

const StyledCollapsibleTitle = styled.div<CollapsibleStyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  ${props => variantStylesHandler(props.$variant, props.$colorPalette, props.$color, props.$open).title}
`;
const StyledIcon = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

const StyledChildren = styled.div<CollapsibleStyleProps>`
  padding: 1rem;
`;

const variantStylesHandler = (
  $variant: CollapsibleStyleProps["$variant"],
  $colorPalette: CollapsibleStyleProps["$colorPalette"],
  $color: CollapsibleStyleProps["$color"],
  $open: CollapsibleStyleProps["$open"]
) => {
  switch ($variant) {
    case "contained":
      return {
        container: css`
          background-color: ${$colorPalette[$color].accentScale[8]};
          color: ${$colorPalette[$color].accentContrast};
          border: 2px solid ${$colorPalette[$color].accentScale[8]};
          border-bottom: ${$open ? `2px solid ${$colorPalette[$color].accentScale[8]}` : "none"};
        `,
        title: css`
          background-color: ${$colorPalette[$color].accentScale[8]};
          color: ${$colorPalette[$color].accentContrast};
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
          background-color: transparent;
          color: ${$colorPalette[$color].accentScale[10]};
          border: 2px solid ${$colorPalette[$color].accentScale[10]};
          border-bottom: ${$open ? `2px solid ${$colorPalette[$color].accentScale[10]}` : "none"};
        `,
        title: css`
          background-color: transparent;
          color: ${$colorPalette[$color].accentScale[10]};
          border: 2px solid transparent;
          border-bottom: 2px solid ${$colorPalette[$color].accentScale[10]};
          &:hover{
            background-color: ${$colorPalette[$color].grayScale[0]};
          }
          &:active{
            background-color: ${$colorPalette[$color].grayScale[1]};
          }
        `,
      }
    }
    case "soft": {
      return {
        container: css`
          background-color: ${$colorPalette[$color].accentScale[3]};
          color: ${$colorPalette[$color].accentScale[11]};
          border: 2px solid ${$colorPalette[$color].accentScale[3]};
          border-bottom: ${$open ? `2px solid ${$colorPalette[$color].accentScale[3]}` : "none"};
        `,
        title: css`
          background-color: ${$colorPalette[$color].accentScale[3]};
          color: ${$colorPalette[$color].accentScale[11]};
          border: 2px solid ${$colorPalette[$color].accentScale[3]};
          border-bottom: 2px solid ${$colorPalette[$color].accentScale[6]};
          &:hover{
            background-color: ${$colorPalette[$color].accentScale[4]};
          }
          &:active{
            background-color: ${$colorPalette[$color].accentScale[4]};
          }
        `,
      }
    }
    case "transparent": {
      return {
        container: css`
          background-color: transparent;
          color: ${$colorPalette[$color].accentScale[10]};
          border: 2px solid transparent;
          border-bottom: ${$open ? `2px solid transparent` : "none"};
        `,
        title: css`
          background-color: transparent;
          color: ${$colorPalette[$color].accentScale[10]};
          border: 2px solid transparent;
          border-bottom: 2px solid ${$colorPalette[$color].accentScale[6]};
          &:hover{
            background-color: ${$colorPalette[$color].grayScale[0]};
          }
          &:active{
            background-color: ${$colorPalette[$color].grayScale[1]};
          }
        `
      }
    }
  }
};

export default Collapsible;
