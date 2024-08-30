import * as React from "react";
import { render, screen } from "@testing-library/react";
import CodePreview from "./CodePreview";
import { CodePreviewProps } from "./CodePreview.types";
import Text from "../Text/Text";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

describe("CodePreview", () => {
  let defaultProps: any;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "code-preview",
      children: "CodePreview",
    };
  });

  const renderCodePreview = (props: Partial<CodePreviewProps>) => {
    return render(<CodePreview {...defaultProps} {...props} />);
  };

  it("Create a simple code preview", () => {
    renderCodePreview({});
    const CodePreview = screen.getByTestId("code-preview");
    expect(CodePreview).toBeInTheDocument();
  });
  it("Create a simple code preview with text", () => {
    renderCodePreview({ text: "TItle" });
    const CodePreview = screen.getByTestId("code-preview");
    expect(CodePreview).toBeInTheDocument();
  });
  it("Create a simple code preview with code", () => {
    renderCodePreview({ code: <Text size="large">Text Preview</Text> });
    const CodePreview = screen.getByTestId("code-preview");
    expect(CodePreview).toBeInTheDocument();
  });
  it("Create a simple code preview with width", () => {
    renderCodePreview({ width: "100px" });
    const CodePreview = screen.getByTestId("code-preview");
    expect(CodePreview).toBeInTheDocument();
  });
  it("Create a simple code preview with color: red", () => {
    renderCodePreview({ color: "red" });
    const CodePreview = screen.getByTestId("code-preview");
    expect(CodePreview).toBeInTheDocument();
  });
  it("Create a simple code preview with appearance dark", () => {
    render(
      <ThemeProvider appearance="dark" accents={{primary: "red"}}>
        <CodePreview color="primary" {...defaultProps} />
      </ThemeProvider>
    )
    const codeDisplay = screen.getByTestId("code-preview");
    expect(codeDisplay).toBeInTheDocument();
  });
});
