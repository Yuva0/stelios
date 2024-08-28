import * as React from "react";
import Text from "../Text/Text";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import colorTokens from "../../tokens/colors.json";
import { AlertProps, AlertStyleProps } from "./Alert.types";
import { getColorPalette } from "../../helpers/helpers";

const Alert: React.FunctionComponent<AlertProps> = ({
  title,
  titleIcon,
  description,
  leadingIcon,
  color = colorTokens.default.primary.main,
  variant = "contained",
  width = "400px",
  style,
  className,
  "data-testid": dataTestId,
  "data-leading-icon": dataLeadingIcon,
  ...props
}: AlertProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme,color);

  const Content = React.useCallback(() => {
    if (!title && !description) return null;

    const Title = title ? (
      <StyledTitleContainer>
        {titleIcon && <StyledTitleIcon>{titleIcon}</StyledTitleIcon>}
        {typeof title === "string" ? (
          <Text disableColor variant="span" style={{ marginTop: "0.2rem" }}>
            {title}
          </Text>
        ) : (
          title
        )}
      </StyledTitleContainer>
    ) : null;

    const Description =
      description && typeof description === "string" ? (
        <Text disableColor variant="paragraph" size="small">
          {description}
        </Text>
      ) : (
        description
      );

    return (
      <StyledContentContainer>
        {Title}
        {Description}
      </StyledContentContainer>
    );
  }, [title, description, titleIcon]);

  const LeadingIcon = React.useCallback(() => {
    if (!leadingIcon) return null;

    return <StyledIcon data-testid={dataLeadingIcon}>{leadingIcon}</StyledIcon>;
  }, [leadingIcon, dataLeadingIcon]);

  return (
    <StyledAlertContainer
      style={style}
      className={className}
      $width={width}
      $color={color}
      $variant={variant}
      $colorPalette={colorPalette}
      data-testid={dataTestId}
      {...props}
    >
      <LeadingIcon />
      <Content />
    </StyledAlertContainer>
  );
};
export default Alert;

const StyledAlertContainer = styled.div<AlertStyleProps>`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  padding: 0.75rem 1rem 1rem 1rem;
  border-radius: 0.8rem;
  ${props => {
    const properties = propsAlertContainerHandler(props.$variant, props.$color, props.$colorPalette);
    return `
      background-color: ${properties.background.default};
      border: ${properties.border.default};
      border-left: ${properties.borderLeft.default};
      color: ${properties.color.default};
      width: ${props.$width};
    `;
  }}
`;
const propsAlertContainerHandler = (
  variant: AlertStyleProps["$variant"],
  color: AlertStyleProps["$color"],
  colorPalette: AlertStyleProps["$colorPalette"]
) => {
  return { ...getVariantProps(variant, color, colorPalette) };
};
const getVariantProps = (
  variant: AlertStyleProps["$variant"],
  color: AlertStyleProps["$color"],
  colorPalette: AlertStyleProps["$colorPalette"]
) => {
  switch (variant) {
    case "contained":
      return {
        background: {
          default: colorPalette[color].accentScale[8],
        },
        border: {
          default: `2px solid ${colorPalette[color].accentScale[10]}`,
        },
        borderLeft: {
          default: `0.5rem solid ${colorPalette[color].accentScale[10]}`,
        },
        color: {
          default: colorPalette[color].accentContrast,
        }
      };
    case "outlined":
      return {
        background: {
          default: "transparent",
        },
        border: {
          default: `2px solid ${colorPalette[color].accentScale[8]}`,
        },
        borderLeft: {
          default: `0.5rem solid ${colorPalette[color].accentScale[8]}`,
        },
        color: {
          default: colorPalette[color].accentScale[11],
        }
      };
    case "soft":
      return {
        background: {
          default: colorPalette[color].accentScale[2],
        },
        border: {
          default: `2px solid ${colorPalette[color].accentScale[2]}`,
        },
        borderLeft: {
          default: `0.5rem solid ${colorPalette[color].accentScale[6]}`,
        },
        color: {
          default: colorPalette[color].accentScale[11],
        }
      };
    case "outlined-soft":
      return {
        background: {
          default: colorPalette[color].accentScale[2],
        },
        border: {
          default: `2px solid ${colorPalette[color].accentScale[8]}`,
        },
        borderLeft: {
          default: `0.5rem solid ${colorPalette[color].accentScale[8]}`,
        },
        color: {
          default: colorPalette[color].accentScale[11],
        }
      };
  }
}

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  flex: 1 1 auto;
`;
const StyledTitleIcon = styled.div`
  width: 18px;
  height: 18px;
  & svg {
    width: 100%;
    height: 100%;
  }
`;
const StyledIcon = styled.div`
  flex: 1 0 auto;
  width: 24px;
  height: 24px;
  & svg {
    width: 100%;
    height: 100%;
  }
`;