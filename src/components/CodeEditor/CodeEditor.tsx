import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark, docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CodeEditorProps, CodeEditorStyleProps } from "./CodeEditor.types";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

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
  background-color: ${(props) => props.$colorPalette[props.$color].accentScale[0]};
  border: 1px solid ${(props) => props.$colorPalette[props.$color].grayScale[5]};
  border-radius: 0.5rem 0.5rem 0 0;
`;
const StyledContainer = styled.div<CodeEditorStyleProps>`
  display: block;
  background-color: ${(props) => props.$colorPalette[props.$color].accentScale[1]};
  border: 1px solid ${(props) => props.$colorPalette[props.$color].grayScale[5]};
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 0.5rem 2rem;

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
    props.$colorPalette[props.$color].accentScale[1]} !important;
  font-family: "Lato", sans-serif;
`;

const CodeEditor = ({
  code,
  text,
  width,
  color = colorTokens.default.primary.main,
}: CodeEditorProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);
  const appearance = colorPalette
    ? colorPalette[color].appearance
    : colorTokens.default.appearance;

  return (
    <StyledCodeEditor $colorPalette={colorPalette} $width={width} $color={color}>
      <StyledCode $colorPalette={colorPalette} $color={color}>{code}</StyledCode>

      <StyledContainer $colorPalette={colorPalette} $color={color}>
        <StyledSyntaxHighlighter
          language="javascript"
          style={appearance === "light" ? docco : dark}
          $colorPalette={colorPalette}
          $color={color}
        >
          {text}
        </StyledSyntaxHighlighter>
      </StyledContainer>
    </StyledCodeEditor>
  );
};

export default CodeEditor;
