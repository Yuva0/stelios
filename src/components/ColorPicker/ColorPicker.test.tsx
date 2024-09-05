import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ColorPicker from './ColorPicker';
import { ColorPickerProps } from './ColorPicker.types';
import "jest-canvas-mock";

describe("ColorPicker", () => {
  let defaultProps: any;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "color-picker",
      "data-testid-input": "color-picker-input",
      "data-testid-popup": "color-picker-popup",
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
    renderColorPicker({onChange: jest.fn()});
    const colorPicker = screen.getByTestId("color-picker");
    expect(colorPicker).toBeInTheDocument();
    const colorPickerInput = screen.getByTestId("color-picker-input");
    expect(colorPickerInput).toBeInTheDocument();

    fireEvent.click(colorPickerInput);
    fireEvent.change(colorPickerInput, { target: { value: "red" } });
    expect(colorPickerInput).toHaveValue("red");

    fireEvent.change(colorPickerInput, { target: { value: "invalid_color" } });
    expect(colorPickerInput).toHaveValue("invalid_color");
  });

  it("Check color picker popup", () => {
    renderColorPicker({onChange: jest.fn()});
    const colorPicker = screen.getByTestId("color-picker");
    expect(colorPicker).toBeInTheDocument();
    const colorPickerInput = screen.getByTestId("color-picker-input");
    expect(colorPickerInput).toBeInTheDocument();
  
    fireEvent.click(colorPickerInput);
    const colorPickerPopup = screen.getByTestId("color-picker-popup");
    expect(colorPickerPopup).toBeInTheDocument();
  
    // Get Color Picker Input using the appropriate method from Testing Library
    const colorPickerPopupInput = screen.getByDisplayValue("#00B4D8")
    expect(colorPickerPopupInput).toBeInTheDocument();
    fireEvent.change(colorPickerPopupInput, { target: { value: "#000000" } });
    expect(colorPickerPopupInput).toHaveValue("#000000");

    fireEvent.change(colorPickerPopupInput, { target: { value: "invalid" } });
    expect(colorPickerPopupInput).toHaveValue("#000000");
  });

  it("ClickAway from color picker popup", () => {
    renderColorPicker({onChange: jest.fn()});
    const colorPicker = screen.getByTestId("color-picker");
    expect(colorPicker).toBeInTheDocument();
    const colorPickerInput = screen.getByTestId("color-picker-input");
    expect(colorPickerInput).toBeInTheDocument();
  
    fireEvent.click(colorPickerInput);
    const colorPickerPopup = screen.getByTestId("color-picker-popup");
    expect(colorPickerPopup).toBeInTheDocument();
  
    // Get Color Picker Input using the appropriate method from Testing Library
    const colorPickerPopupInput = screen.getByDisplayValue("#00B4D8")
    expect(colorPickerPopupInput).toBeInTheDocument();
    fireEvent.change(colorPickerPopupInput, { target: { value: "#000000" } });
    expect(colorPickerPopupInput).toHaveValue("#000000");

    const button = document.createElement("button");
    document.body.appendChild(button);
    fireEvent.click(button);
  });

  it("Click leading icon", () => {
    renderColorPicker({"data-testid-leading-icon": "leading-icon"});
    const leadingIcon = screen.getByTestId("leading-icon");
    expect(leadingIcon).toBeInTheDocument();
    fireEvent.click(leadingIcon);
    const colorPickerPopup = screen.getByTestId("color-picker-popup");
    expect(colorPickerPopup).toBeInTheDocument();
  });
});