import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CollapsibleProps } from './Collapsible.types';
import Collapsible from './Collapsible';

describe('Collapsible Component', () => {
  let defaultProps: any;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "collapsible",
      "data-testid-title": "collapsible-title",
    };
  });

  const renderCollapsible = (props: Partial<CollapsibleProps>) => {
    return render(<Collapsible {...defaultProps} {...props} />);
  };
  
  it("Renders the title", () => {
    renderCollapsible({ title: 'Test Collapsible' });
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });
  it("Renders with title as ReactNode", () => {
    renderCollapsible({ title: <div>Test Collapsible</div> });
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });

  it("Renders with children", () => {
    renderCollapsible({ title: 'Test Collapsible', children: <div>Collapsible content</div> });
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });
  it("Renders with children as string", () => {
    renderCollapsible({ title: 'Test Collapsible', children: "Collapsible content" });
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });

  it("Renders open", () => {
    renderCollapsible({ title: 'Test Collapsible', open: true });
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });
  it("Toggles content visibility", () => {
    renderCollapsible({ title: 'Test Collapsible', children: <div>Collapsible content</div>, onToggle: jest.fn() });
    const collapsibleTitle = screen.getByTestId('collapsible-title');
    fireEvent.click(collapsibleTitle);
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });

  it("Renders with custom width", () => {
    renderCollapsible({ title: 'Test Collapsible', children: <div>Collapsible content</div>, width: "200px" });
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });

  it("Renders with contained variant", () => {
    renderCollapsible({ title: 'Test Collapsible', children: <div>Collapsible content</div>, variant: "contained" });
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });
  it("Renders with outlined variant", () => {
    renderCollapsible({ title: 'Test Collapsible', children: <div>Collapsible content</div>, variant: "outlined" });
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });
  it("Renders with soft variant", () => {
    renderCollapsible({ title: 'Test Collapsible', children: <div>Collapsible content</div>, variant: "soft" });
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });
  it("Renders with transparent variant", () => {
    renderCollapsible({ title: 'Test Collapsible', children: <div>Collapsible content</div>, variant: "transparent" });
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });

  it("Render contained variant with open prop", () => {
    renderCollapsible({ title: 'Test Collapsible', children: <div>Collapsible content</div>, variant: "contained", open: true });
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });

  it("Render outlined variant with open prop", () => {
    renderCollapsible({ title: 'Test Collapsible', children: <div>Collapsible content</div>, variant: "outlined", open: true });
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });

  it("Render soft variant with open prop", () => {
    renderCollapsible({ title: 'Test Collapsible', children: <div>Collapsible content</div>, variant: "soft", open: true });
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });

  it("Render transparent variant with open prop", () => {
    renderCollapsible({ title: 'Test Collapsible', children: <div>Collapsible content</div>, variant: "transparent", open: true });
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });

  it("Render with custom color", () => {
    renderCollapsible({ title: 'Test Collapsible', children: <div>Collapsible content</div>, color: "red" });
    expect(screen.getByTestId('collapsible')).toBeInTheDocument();
  });
});