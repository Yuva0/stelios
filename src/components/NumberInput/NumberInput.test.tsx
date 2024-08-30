import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import NumberInput from "./NumberInput";
import { NumberInputProps } from "./NumberInput.types";

describe("NumberInput component", () => {
  let defaultProps: NumberInputProps;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "number-input",
      "data-testid-minus": "number-input-minus",
      "data-testid-plus": "number-input-plus",
      "data-testid-input": "number-input-input",
      value: 0,
      onChange: () => {},
    };
  });

  const renderNumberInput = (props: Partial<NumberInputProps>) => {
    render(<NumberInput {...defaultProps} {...props} />);
  };

  it("should render without crashing", () => {
    renderNumberInput({});
    const numberInput = screen.getByTestId("number-input");
    expect(numberInput).toBeInTheDocument();
  });

  it("should render with props", () => {
    renderNumberInput({
      color: "red",
      style: { color: "red" },
      className: "number-input",
      label: "Number Input",
    });
    const numberInput = screen.getByTestId("number-input");
    expect(numberInput).toBeInTheDocument();
  });

  it("should render with label", () => {
    renderNumberInput({
      label: "Number Input",
    });
    const numberInput = screen.getByTestId("number-input");
    expect(numberInput).toBeInTheDocument();
  });

  it("should render and click on plus and minus button", () => {
    renderNumberInput({});
    const numberInput = screen.getByTestId("number-input");
    expect(numberInput).toBeInTheDocument();
    const plusButton = screen.getByTestId("number-input-plus");
    expect(plusButton).toBeInTheDocument();
    const minusButton = screen.getByTestId("number-input-minus");
    expect(minusButton).toBeInTheDocument();
    plusButton.click();
    minusButton.click();
  });

  it("should render an outlined number input", () => {
    renderNumberInput({ variant: "outlined" });
    const numberInput = screen.getByTestId("number-input");
    expect(numberInput).toBeInTheDocument();
  });

  it("should render a contained number input", () => {
    renderNumberInput({ variant: "contained" });
    const numberInput = screen.getByTestId("number-input");
    expect(numberInput).toBeInTheDocument();
  });

  it("should render a soft number input", () => {
    renderNumberInput({ variant: "soft" });
    const numberInput = screen.getByTestId("number-input");
    expect(numberInput).toBeInTheDocument();
  });

  it("should render a large number input", () => {
    renderNumberInput({ size: "large" });
    const numberInput = screen.getByTestId("number-input");
    expect(numberInput).toBeInTheDocument();
  });

  it("should render a medium number input", () => {
    renderNumberInput({ size: "medium" });
    const numberInput = screen.getByTestId("number-input");
    expect(numberInput).toBeInTheDocument();
  });

  it("should render a small number input", () => {
    renderNumberInput({ size: "small" });
    const numberInput = screen.getByTestId("number-input");
    expect(numberInput).toBeInTheDocument();
  });
});
