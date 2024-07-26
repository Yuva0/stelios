import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark, docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CodeEditorProps, CodeEditorStyleProps } from "./CodeEditor.types";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const StyledCodeEditor = styled.div<CodeEditorStyleProps>`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  width: ${(props) => props.$width ?? "auto"};
`;
const StyledCode = styled.div<CodeEditorStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: ${(props) => props.$colorPalette.primary.accentScale[0]};
  border: 1px solid ${(props) => props.$colorPalette.primary.grayScale[5]};
  border-radius: 0.5rem;
`;
const StyledContainer = styled.div<CodeEditorStyleProps>`
  display: block;
  background-color: ${(props) => props.$colorPalette.primary.accentScale[1]};
  border: 1px solid ${(props) => props.$colorPalette.primary.grayScale[5]};
  border-radius: 0.5rem;
  padding: 1rem 2rem;

  pre {
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
    code {
      font-size: 16px;
      font-family: "Lato", sans-serif;
    }
  }
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)<CodeEditorStyleProps>`
  background-color: ${(props) =>
    props.$colorPalette.primary.accentScale[1]} !important;
  font-family: "Lato", sans-serif;
`;

const CodeEditor = ({ code, text, width }: CodeEditorProps) => {
  const colorPalette = useTheme().theme.colorPalette;
  const appearance = colorPalette.primary.appearance;

  return (
    <StyledCodeEditor $colorPalette={colorPalette} $width={width}>
      {code && <StyledCode $colorPalette={colorPalette}>{code}</StyledCode>}
      {text && (
        <StyledContainer $colorPalette={colorPalette}>
          <StyledSyntaxHighlighter
            language="javascript"
            style={appearance === "light" ? docco : dark}
            $colorPalette={colorPalette}
          >
            {text}
          </StyledSyntaxHighlighter>
        </StyledContainer>
      )}
    </StyledCodeEditor>
  );
};

export default CodeEditor;
