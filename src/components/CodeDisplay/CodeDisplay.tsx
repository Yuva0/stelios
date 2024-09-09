import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CodeDisplayProps, CodeDisplayStyleProps } from "./CodeDisplay.types";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import Text from "../Text/Text";
import { vs, dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const CodeDisplay = ({
  text,
  width = "auto",
  title,
  style,
  language,
  color = colorTokens.default.primary.main,
  "data-testid": dataTestId,
  className,
  ...props
}: CodeDisplayProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);
  const appearance = colorPalette![color].appearance

  return (
    <StyledCodeDisplay
      style={style}
      $colorPalette={colorPalette}
      $color={color}
      $width={width}
      data-testid={dataTestId}
      {...props}
    >
      {title && (
        <StyledTitle $colorPalette={colorPalette} $color={color}>
          <Text disableColor variant="paragraph" size="small">
            {title}
          </Text>
        </StyledTitle>
      )}
      <StyledCodeContainer
        $colorPalette={colorPalette}
        $color={color}
        $hasTitle={!!title}
      >
        <StyledSyntaxHighlighter
          language={language}
          title={title}
          style={appearance === colorTokens.theme.appearance.light ? vs : dark}
          $colorPalette={colorPalette}
          $color={color}
        >
          {text}
        </StyledSyntaxHighlighter>
      </StyledCodeContainer>
    </StyledCodeDisplay>
  );
};
export default CodeDisplay;

const StyledCodeDisplay = styled.div<CodeDisplayStyleProps>`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  width: ${(props) => props.$width};
`;
const StyledTitle = styled.div<CodeDisplayStyleProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: ${(props) =>
    props.$colorPalette[props.$color].accentScale[6]};
  color: ${(props) => props.$colorPalette[props.$color].accentContrast};
  border-radius: 0.5rem 0.5rem 0 0;
`;
const StyledCodeContainer = styled.div<CodeDisplayStyleProps>`
  display: block;
  background-color: ${(props) =>
    props.$colorPalette[props.$color].accentScale[4]};
  padding: 1rem 2rem;
  pre {
    margin: 0;
    padding: 0 !important;
    white-space: pre-wrap;
    word-break: break-word;
    code {
      font-size: 14px;
      font-family: "Source Code Pro", monospace;
    }
  }
  ${(props) => {
    return `
      border-radius: ${props.$hasTitle ? "0 0 0.5rem 0.5rem" : "0.5rem"};
    `;
  }}
`;
const StyledSyntaxHighlighter = styled(
  SyntaxHighlighter
)<CodeDisplayStyleProps>`
  background-color: ${(props) =>
    props.$colorPalette[props.$color].accentScale[4]} !important;
`;
