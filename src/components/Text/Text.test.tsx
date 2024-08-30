import * as React from "react";
import { screen, render } from "@testing-library/react";
import Text from "./Text";
import { TextProps } from "./Text.types";

describe("Text Component", () => {
  const renderText = (props: Partial<TextProps>) => {
    render(<Text {...props} data-testid="text" />);
  };

  it("Render a text", () => {
    renderText({});
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a H1 text", () => {
    renderText({
      variant: "h1",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a H1 text with custom font-size", () => {
    renderText({
      variant: "h1",
      fontSize: "16px",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a H1 text with large size", () => {
    renderText({
      variant: "h1",
      size: "large",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a H1 text with medium size", () => {
    renderText({
      variant: "h1",
      size: "medium",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a H1 text with small size", () => {
    renderText({
      variant: "h1",
      size: "small",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a strong H1 text", () => {
    renderText({
      variant: "h1",
      strong: 1,
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a H1 text with custom font-family", () => {
    renderText({
      variant: "h1",
      fontFamily: "Arial",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a H2 text", () => {
    renderText({
      variant: "h2",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a h2 text with custom font-size", () => {
    renderText({
      variant: "h2",
      fontSize: "16px",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a h2 text with large size", () => {
    renderText({
      variant: "h2",
      size: "large",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a h2 text with medium size", () => {
    renderText({
      variant: "h2",
      size: "medium",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a h2 text with small size", () => {
    renderText({
      variant: "h2",
      size: "small",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a strong h2 text", () => {
    renderText({
      variant: "h2",
      strong: 1,
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a h2 text with custom font-family", () => {
    renderText({
      variant: "h2",
      fontFamily: "Arial",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });


  it("Render a H3 text", () => {
    renderText({
      variant: "h3",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a h3 text with custom font-size", () => {
    renderText({
      variant: "h3",
      fontSize: "16px",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a h3 text with large size", () => {
    renderText({
      variant: "h3",
      size: "large",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a h3 text with medium size", () => {
    renderText({
      variant: "h3",
      size: "medium",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a h3 text with small size", () => {
    renderText({
      variant: "h3",
      size: "small",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a strong h3 text", () => {
    renderText({
      variant: "h3",
      strong: 1,
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a h3 text with custom font-family", () => {
    renderText({
      variant: "h3",
      fontFamily: "Arial",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a H4 text", () => {
    renderText({
      variant: "h4",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a h4 text with custom font-size", () => {
    renderText({
      variant: "h4",
      fontSize: "16px",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a h4 text with large size", () => {
    renderText({
      variant: "h4",
      size: "large",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a h4 text with medium size", () => {
    renderText({
      variant: "h4",
      size: "medium",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a h4 text with small size", () => {
    renderText({
      variant: "h4",
      size: "small",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a strong h4 text", () => {
    renderText({
      variant: "h4",
      strong: 1,
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a h4 text with custom font-family", () => {
    renderText({
      variant: "h4",
      fontFamily: "Arial",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a H5 text", () => {
    renderText({
      variant: "h5",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a h5 text with custom font-size", () => {
    renderText({
      variant: "h5",
      fontSize: "16px",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a h5 text with large size", () => {
    renderText({
      variant: "h5",
      size: "large",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a h5 text with medium size", () => {
    renderText({
      variant: "h5",
      size: "medium",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a h5 text with small size", () => {
    renderText({
      variant: "h5",
      size: "small",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a strong h5 text", () => {
    renderText({
      variant: "h5",
      strong: 1,
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a h5 text with custom font-family", () => {
    renderText({
      variant: "h5",
      fontFamily: "Arial",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a H6 text", () => {
    renderText({
      variant: "h6",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a h6 text with custom font-size", () => {
    renderText({
      variant: "h6",
      fontSize: "16px",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a h6 text with large size", () => {
    renderText({
      variant: "h6",
      size: "large",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a h6 text with medium size", () => {
    renderText({
      variant: "h6",
      size: "medium",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a h6 text with small size", () => {
    renderText({
      variant: "h6",
      size: "small",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a strong h6 text", () => {
    renderText({
      variant: "h6",
      strong: 1,
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a h6 text with custom font-family", () => {
    renderText({
      variant: "h6",
      fontFamily: "Arial",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a div text", () => {
    renderText({
      variant: "div",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a div text with custom font-size", () => {
    renderText({
      variant: "div",
      fontSize: "16px",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a div text with large size", () => {
    renderText({
      variant: "div",
      size: "large",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a div text with medium size", () => {
    renderText({
      variant: "div",
      size: "medium",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a div text with small size", () => {
    renderText({
      variant: "div",
      size: "small",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a strong div text", () => {
    renderText({
      variant: "div",
      strong: 1,
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a div text with custom font-family", () => {
    renderText({
      variant: "div",
      fontFamily: "Arial",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a paragraph text", () => {
    renderText({
      variant: "paragraph",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a paragraph text with custom font-size", () => {
    renderText({
      variant: "paragraph",
      fontSize: "16px",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a paragraph text with large size", () => {
    renderText({
      variant: "paragraph",
      size: "large",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a paragraph text with medium size", () => {
    renderText({
      variant: "paragraph",
      size: "medium",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a paragraph text with small size", () => {
    renderText({
      variant: "paragraph",
      size: "small",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a strong paragraph text", () => {
    renderText({
      variant: "paragraph",
      strong: 1,
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a paragraph text with custom font-family", () => {
    renderText({
      variant: "paragraph",
      fontFamily: "Arial",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a label text", () => {
    renderText({
      variant: "label",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a label text with custom font-size", () => {
    renderText({
      variant: "label",
      fontSize: "16px",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a label text with large size", () => {
    renderText({
      variant: "label",
      size: "large",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a label text with medium size", () => {
    renderText({
      variant: "label",
      size: "medium",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a label text with small size", () => {
    renderText({
      variant: "label",
      size: "small",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a strong label text", () => {
    renderText({
      variant: "label",
      strong: 1,
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a label text with custom font-family", () => {
    renderText({
      variant: "label",
      fontFamily: "Arial",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a span text", () => {
    renderText({
      variant: "span",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a span text with custom font-size", () => {
    renderText({
      variant: "span",
      fontSize: "16px",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
  it("Render a span text with large size", () => {
    renderText({
      variant: "span",
      size: "large",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a span text with medium size", () => {
    renderText({
      variant: "span",
      size: "medium",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a span text with small size", () => {
    renderText({
      variant: "span",
      size: "small",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a strong span text", () => {
    renderText({
      variant: "span",
      strong: 1,
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  })
  it("Render a span text with custom font-family", () => {
    renderText({
      variant: "span",
      fontFamily: "Arial",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a strong text", () => {
    renderText({
      strong: 1,
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a small text", () => {
    renderText({
      size: "small",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a medium text", () => {
    renderText({
      size: "medium",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a large text", () => {
    renderText({
      size: "large",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a left aligned text", () => {
    renderText({
      align: "left",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a center aligned text", () => {
    renderText({
      align: "center",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a right aligned text", () => {
    renderText({
      align: "right",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a justify aligned text", () => {
    renderText({
      align: "justify",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a text with color", () => {
    renderText({
      color: "red",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a text with precise color", () => {
    renderText({
      preciseColor: "red",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a text with wrap", () => {
    renderText({
      wrap: true,
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a text with className", () => {
    renderText({
      className: "text-class",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a text with style", () => {
    renderText({
      style: { color: "red" },
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a text with fontSize", () => {
    renderText({
      fontSize: "16px",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a text with lineHeight", () => {
    renderText({
      lineHeight: "16px",
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });

  it("Render a text with disableColor", () => {
    renderText({
      disableColor: true,
    });
    const textElement = screen.getByTestId("text");
    expect(textElement).toBeInTheDocument();
  });
});
