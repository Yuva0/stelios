import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark, docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CodePreviewProps, CodePreviewStyleProps } from "./CodePreview.types";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../helpers/helpers";
import colorTokens from "../../tokens/colors.json";

const CodePreview = ({
  code,
  text,
  width,
  color = colorTokens.default.primary.main,
  "data-testid": dataTestId,
  className,
  style,
  codeStyle,
  textStyle,
  language = "javascript",
  ...props
}: CodePreviewProps) => {
  const theme = useTheme().theme;
  const colorPalette = getColorPalette(theme, color);
  const appearance = colorPalette![color].appearance

  return (
    <StyledCodePreview
      $colorPalette={colorPalette}
      $width={width}
      $color={color}
      data-testid={dataTestId}
      className={className}
      style={style}
      {...props}
    >
      <StyledCode $colorPalette={colorPalette} $color={color} style={codeStyle}>
        {code}
      </StyledCode>

      <StyledContainer $colorPalette={colorPalette} $color={color} style={textStyle}>
        <StyledSyntaxHighlighter
          language={language}
          style={appearance === "light" ? docco : dark}
          $colorPalette={colorPalette}
          $color={color}
        >
          {text}
        </StyledSyntaxHighlighter>
      </StyledContainer>
    </StyledCodePreview>
  );
};
export default CodePreview;

const StyledCodePreview = styled.div<CodePreviewStyleProps>`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  width: ${(props) => props.$width ?? "auto"};
`;
const StyledCode = styled.div<CodePreviewStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  ${(props) => {
    return `
      background-color: ${props.$colorPalette[props.$color].accentScale[0]};
      border: 1px solid ${props.$colorPalette[props.$color].grayScale[5]};
    `;
  }}
`;
const StyledContainer = styled.div<CodePreviewStyleProps>`
  display: block;
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
  ${(props) => {
    return `
      background-color: ${props.$colorPalette[props.$color].accentScale[2]};
      border: 1px solid ${props.$colorPalette[props.$color].grayScale[5]};
    `;
  }}
`;
const StyledSyntaxHighlighter = styled(
  SyntaxHighlighter
)<CodePreviewStyleProps>`
  background-color: ${(props) =>
    props.$colorPalette[props.$color].accentScale[2]} !important;
  font-family: "Lato", sans-serif;
`;
