import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ComponentHighlight from './ComponentHighlight';
import Text from '../Text/Text';
import { ComponentHighlightProps } from './ComponentHighlight.types';

describe("ComponentHighlight component", () => {
  let defaultProps: ComponentHighlightProps;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "component-highlight",
      children: "Component Highlight",
    };
  });

  const renderComponentHighlight = (props: Partial<ComponentHighlightProps>) => {
    return render(<ComponentHighlight {...defaultProps} {...props} />);
  };

  it("Should render a component highlight with children", () => {
    renderComponentHighlight({});
    const componentHighlight = screen.getByTestId("component-highlight");
    expect(componentHighlight).toBeInTheDocument();
  });

  it("Should render a component highlight with custom text", () => {
    renderComponentHighlight({ children: <Text>Component Highlight</Text> });
    const componentHighlight = screen.getByTestId("component-highlight");
    expect(componentHighlight).toBeInTheDocument();
  });

  it("Should render a component highlight with gradient colors", () => {
    renderComponentHighlight({ gradientColors: ["#000", "#fff"] });
    const componentHighlight = screen.getByTestId("component-highlight");
    expect(componentHighlight).toBeInTheDocument();
  });

  it("Should render a component highlight with custom width", () => {
    renderComponentHighlight({ width: "100%" });
    const componentHighlight = screen.getByTestId("component-highlight");
    expect(componentHighlight).toBeInTheDocument();
  });

  it("Should render a component highlight with custom height", () => {
    renderComponentHighlight({ height: "100%" });
    const componentHighlight = screen.getByTestId("component-highlight");
    expect(componentHighlight).toBeInTheDocument();
  });

  it("Should render a component highlight with custom border radius", () => {
    renderComponentHighlight({ outerBorderRadius: "2rem", innerBorderRadius: "1rem" });
    const componentHighlight = screen.getByTestId("component-highlight");
    expect(componentHighlight).toBeInTheDocument();
  });

  it("Should render a component highlight with custom color", () => {
    renderComponentHighlight({ color: "#000" });
    const componentHighlight = screen.getByTestId("component-highlight");
    expect(componentHighlight).toBeInTheDocument();
  });
});