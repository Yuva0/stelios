import * as React from "react";
import { render, screen } from "@testing-library/react";
import CodeDisplay from "./CodeDisplay";
import { CodeDisplayProps } from "./CodeDisplay.types";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

describe("CodeDisplay", () => {
  let defaultProps: any;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "code-display",
      children: "CodeDisplay",
    };
  });

  const renderCodeDisplay = (props: Partial<CodeDisplayProps>) => {
    return render(<CodeDisplay {...defaultProps} {...props} />);
  };

  it("Create a simple code display", () => {
    renderCodeDisplay({});
    const codeDisplay = screen.getByTestId("code-display");
    expect(codeDisplay).toBeInTheDocument();
  });
  it("Create a simple code display with title", () => {
    renderCodeDisplay({title: "TItle"});
    const codeDisplay = screen.getByTestId("code-display");
    expect(codeDisplay).toBeInTheDocument();
  });
  it("Create a simple code display with width", () => {
    renderCodeDisplay({width: "100px"});
    const codeDisplay = screen.getByTestId("code-display");
    expect(codeDisplay).toBeInTheDocument();
  });
  it("Create a simple code display with color: red", () => {
    renderCodeDisplay({color: "red"});
    const codeDisplay = screen.getByTestId("code-display");
    expect(codeDisplay).toBeInTheDocument();
  });
  it("Create a simple code display with appearance dark", () => {
    render(
      <ThemeProvider appearance="dark" accents={{primary: "red"}}>
        <CodeDisplay color="primary" {...defaultProps} />
      </ThemeProvider>
    )
    const codeDisplay = screen.getByTestId("code-display");
    expect(codeDisplay).toBeInTheDocument();
  });
});
