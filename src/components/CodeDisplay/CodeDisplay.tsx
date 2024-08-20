import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CodeDisplayProps, CodeDisplayStyleProps } from "./CodeDisplay.types";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import Text from "../Text/Text";
import { vs, dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const StyledCodeDisplay = styled.div<CodeDisplayStyleProps>`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  width: ${(props) => props.$width ?? "auto"};
`;
const StyledCode = styled.div<CodeDisplayStyleProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: ${(props) => props.$colorPalette.primary.accentScale[6]};
  border-radius: 0.5rem 0.5rem 0 0;
`;
const StyledContainer = styled.div<CodeDisplayStyleProps>`
  display: block;
  background-color: ${(props) => props.$colorPalette.primary.accentScale[4]};
  border-radius: 0 0 0.5rem 0.5rem;
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
`;

const StyledSyntaxHighlighter = styled(
  SyntaxHighlighter
)<CodeDisplayStyleProps>`
  background-color: ${(props) =>
    props.$colorPalette.primary.accentScale[4]} !important;
`;

const CodeDisplay = ({
  text,
  width,
  language,
  syntaxStyle,
  style
}: CodeDisplayProps) => {
  const theme = useTheme().theme;
  if(!theme) return;
  const colorPalette = theme.colorPalette;
  const appearance = colorPalette.primary.appearance;

  return (
    <StyledCodeDisplay style={style} $colorPalette={colorPalette} $width={width}>
      <StyledCode $colorPalette={colorPalette}>
        <Text variant="paragraph" size="small">
          {language}
        </Text>
      </StyledCode>
      <StyledContainer $colorPalette={colorPalette}>
        <StyledSyntaxHighlighter
          language={language}
          style={appearance === "light" ? vs : dark}
          $colorPalette={colorPalette}
        >
          {text}
        </StyledSyntaxHighlighter>
      </StyledContainer>
    </StyledCodeDisplay>
  );
};

export default CodeDisplay;
