import * as React from "react";
import Text from "../Text/Text";
import styled from "styled-components";
import { useTheme } from "../ThemeProvider/ThemeProvider";
interface AlertProps {
  title: React.ReactNode;
  titleIcon?: React.ReactNode;
  description: React.ReactNode;
  leadingIcon?: React.ReactNode;
  color?: "primary" | "secondary" | "danger" | "warning" | "success" | "info";
  width?: string;
}

const StyledContainer = styled.div<{
  $colorPalette: any;
  $color: AlertProps["color"];
  $width: string;
}>`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 0.8rem;
  width: ${(props) => props.$width};
  color: ${(props) =>
    props.$colorPalette[props.$color ?? "primary"].accentScale[11]};
  background-color: ${(props) =>
    props.$colorPalette[props.$color ?? "primary"].accentScale[2]};
  border-left: 0.5rem solid
    ${(props) => props.$colorPalette[props.$color ?? "primary"].accentScale[6]};
`;
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
`;
const StyledTitleIcon = styled.div`
  width: 28px;
  height: 28px;
  & svg {
    width: 100%;
    height: 100%;
  }
`;
const StyledIcon = styled.div`
  width: 24px;
  height: 24px;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

const Alert: React.FunctionComponent<AlertProps> = ({
  title,
  titleIcon,
  description,
  leadingIcon,
  color,
  width = "auto",
}: AlertProps) => {
  const colorPalette = useTheme().theme.colorPalette;

  const Content = React.useCallback(() => {
    if (!title && !description) return null;

    const Title = title ? (
      <StyledTitleContainer>
        {titleIcon && <StyledTitleIcon>{titleIcon}</StyledTitleIcon>}
        {typeof title === "string" ? (
          <Text noColor variant="span" style={{ marginTop: "0.2rem" }}>
            {title}
          </Text>
        ) : (
          title
        )}
      </StyledTitleContainer>
    ) : null;

    const Description =
      description && typeof description === "string" ? (
        <Text noColor variant="paragraph" size="small">
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

    return <StyledIcon>{leadingIcon}</StyledIcon>;
  }, [leadingIcon]);

  return (
    <StyledContainer $width={width} $color={color} $colorPalette={colorPalette}>
      <LeadingIcon />
      <Content />
    </StyledContainer>
  );
};

export default Alert;
