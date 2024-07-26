import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark, docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CodeDisplayProps, CodeDisplayStyleProps } from "./CodeDisplay.types";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import Text from "../Text/Text";

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
  background-color: ${(props) => props.$colorPalette.primary.grayScale[0]};
  border: 1px solid ${(props) => props.$colorPalette.primary.grayScale[5]};
  border-radius: 0.5rem 0.5rem 0 0;
`;
const StyledContainer = styled.div<CodeDisplayStyleProps>`
  display: block;
  background-color: ${(props) => props.$colorPalette.primary.accentScale[1]};
  border: 1px solid ${(props) => props.$colorPalette.primary.grayScale[5]};
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 0.5rem 2rem;

  pre {
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
    code {
      font-size: 14px;
      font-family: "Lato", sans-serif;
    }
  }
`;

const StyledSyntaxHighlighter = styled(
  SyntaxHighlighter
)<CodeDisplayStyleProps>`
  background-color: ${(props) =>
    props.$colorPalette.primary.accentScale[1]} !important;
  font-family: "Lato", sans-serif;
`;

const CodeDisplay = ({ text, width, language }: CodeDisplayProps) => {
  const colorPalette = useTheme().theme.colorPalette;
  const appearance = colorPalette.primary.appearance;

  return (
    <StyledCodeDisplay $colorPalette={colorPalette} $width={width}>
      <StyledCode $colorPalette={colorPalette}>
        <Text variant="paragraph" size="small">{language}</Text>
      </StyledCode>
      <StyledContainer $colorPalette={colorPalette}>
        <StyledSyntaxHighlighter
          language="javascript"
          style={appearance === "light" ? docco : dark}
          $colorPalette={colorPalette}
        >
          {text}
        </StyledSyntaxHighlighter>
      </StyledContainer>
    </StyledCodeDisplay>
  );
};

export default CodeDisplay;
