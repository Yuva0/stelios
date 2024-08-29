import * as React from "react";
import { render, screen } from "@testing-library/react";
import CodePreview from "./CodePreview";
import { CodePreviewProps } from "./CodePreview.types";
import Text from "../Text/Text";

describe("CodePreview", () => {
  let defaultProps: any;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "code-display",
      children: "CodePreview",
    };
  });

  const renderCodePreview = (props: Partial<CodePreviewProps>) => {
    return render(<CodePreview {...defaultProps} {...props} />);
  };

  it("Create a simple code display", () => {
    renderCodePreview({});
    const CodePreview = screen.getByTestId("code-display");
    expect(CodePreview).toBeInTheDocument();
  });
  it("Create a simple code display with text", () => {
    renderCodePreview({ text: "TItle" });
    const CodePreview = screen.getByTestId("code-display");
    expect(CodePreview).toBeInTheDocument();
  });
  it("Create a simple code display with code", () => {
    renderCodePreview({ code: <Text size="large">Text Preview</Text> });
    const CodePreview = screen.getByTestId("code-display");
    expect(CodePreview).toBeInTheDocument();
  });
  it("Create a simple code display with width", () => {
    renderCodePreview({ width: "100px" });
    const CodePreview = screen.getByTestId("code-display");
    expect(CodePreview).toBeInTheDocument();
  });
  it("Create a simple code display with color: red", () => {
    renderCodePreview({ color: "red" });
    const CodePreview = screen.getByTestId("code-display");
    expect(CodePreview).toBeInTheDocument();
  });
});
