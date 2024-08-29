import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ColorPicker from './ColorPicker';
import { ColorPickerProps } from './ColorPicker.types';

describe("ColorPicker", () => {
  let defaultProps: any;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "color-picker",
    };
  });

  const renderColorPicker = (props: Partial<ColorPickerProps>) => {
    return render(<ColorPicker {...defaultProps} {...props} />);
  };

  it("Create a simple color picker", () => {
    renderColorPicker({});
    const colorPicker = screen.getByTestId("color-picker");
    expect(colorPicker).toBeInTheDocument();
  });

  it("Create a simple color picker with label", () => {
    renderColorPicker({label: "Color Picker"});
    const colorPicker = screen.getByTestId("color-picker");
    expect(colorPicker).toBeInTheDocument();
  });

  it("Create a simple color picker with color", () => {
    renderColorPicker({color: "red"});
    const colorPicker = screen.getByTestId("color-picker");
    expect(colorPicker).toBeInTheDocument();
  });

  it("Create a simple color picker which is open", () => {
    renderColorPicker({open: true});
    const colorPicker = screen.getByTestId("color-picker");
    expect(colorPicker).toBeInTheDocument();
  });

  it("Create a simple color picker with size small", () => {
    renderColorPicker({size: "small"});
    const colorPicker = screen.getByTestId("color-picker");
    expect(colorPicker).toBeInTheDocument();
  });

  it("Create a simple color picker with size medium", () => {
    renderColorPicker({size: "medium"});
    const colorPicker = screen.getByTestId("color-picker");
    expect(colorPicker).toBeInTheDocument();
  });

  it("Create a simple color picker with size large", () => {
    renderColorPicker({size: "large"});
    const colorPicker = screen.getByTestId("color-picker");
    expect(colorPicker).toBeInTheDocument();
  });

  it("Create a simple color picker with variant contained", () => {
    renderColorPicker({variant: "contained"});
    const colorPicker = screen.getByTestId("color-picker");
    expect(colorPicker).toBeInTheDocument();
  });

  it("Create a simple color picker with variant outlined", () => {
    renderColorPicker({variant: "outlined"});
    const colorPicker = screen.getByTestId("color-picker");
    expect(colorPicker).toBeInTheDocument();
  });

  it("Create a simple color picker with variant soft", () => {
    renderColorPicker({variant: "soft"});
    const colorPicker = screen.getByTestId("color-picker");
    expect(colorPicker).toBeInTheDocument();
  });

  it("Create a simple color picker with width", () => {
    renderColorPicker({width: "100px"});
    const colorPicker = screen.getByTestId("color-picker");
    expect(colorPicker).toBeInTheDocument();
  });

  it("Click on the color picker", () => {
    renderColorPicker({});
    const colorPicker = screen.getByTestId("color-picker");
    expect(colorPicker).toBeInTheDocument();
    fireEvent.click(colorPicker);

  });
});