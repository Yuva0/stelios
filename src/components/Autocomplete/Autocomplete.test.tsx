import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Autocomplete from "./Autocomplete";
import { AutocompleteProps } from "./Autocomplete.types";

describe("Autocomplete Component", () => {
  let defaultProps: AutocompleteProps;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "autocomplete",
      "data-testid-input": "autocomplete-input",
      "data-testid-menu": "autocomplete-menu",
      options: [
        {
          title: "Option 1",
          value: "option1",
          "data-testid": "option1",
          onClick: jest.fn(),
        },
        { title: "Option 2", value: "option2", "data-testid": "option2" },
        { title: "Option 3", value: "option3", "data-testid": "option3" },
      ],
      onClick: jest.fn(),
      onInputChange: jest.fn(),
      onChange: jest.fn(),
    };
  });

  const renderAutocomplete = (props: Partial<AutocompleteProps>) => {
    return render(<Autocomplete  {...defaultProps} {...props} />);
  };

  it("Should render an autocomplete component", () => {
    renderAutocomplete({});
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();

    // Search for option
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "Option 1" } });

    // Click on option
    expect(screen.getByTestId("option1")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("option1"));
  });

  it("Should render an autocomplete with no options", () => {
    renderAutocomplete({ options: [] });
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "Option 1" } });
  });

  // Multiselect
  it("Should render an autocomplete with multiselect option", () => {
    renderAutocomplete({ multiSelect: true });
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();

    // Search for option
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "Option 1" } });

    // Click on option
    expect(screen.getByTestId("option1")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("option1"));
  });
  it("Should render an autocomplete with multiselect option and has value", () => {
    renderAutocomplete({ multiSelect: true, value: "1" });
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "Option 1" } });
    fireEvent.change(input, { target: { value: undefined } });
    fireEvent.click(screen.getByTestId("option1"));
  });
  it("Should render an autocomplete with multiselect option with value of type array", () => {
    renderAutocomplete({ multiSelect: true, value: ["1", "2"] });
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();
  });

  it("Should render a autocomplete with red", () => {
    renderAutocomplete({ color: "red" });
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();
  });

  it("Should render an autocomplete with custom width", () => {
    renderAutocomplete({ width: "500px" });
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();
  });

  // Variants
  it("Should render an autocomplete with contained variant", () => {
    renderAutocomplete({ variant: "contained" });
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();
  });
  it("Should render an autocomplete with outlined variant", () => {
    renderAutocomplete({ variant: "outlined" });
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();
  });
  it("Should render an autocomplete with soft variant", () => {
    renderAutocomplete({ variant: "soft" });
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();
  });

  // Sizes
  it("Should render an autocomplete with small size", () => {
    renderAutocomplete({ size: "small" });
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();
  });
  it("Should render an autocomplete with medium size", () => {
    renderAutocomplete({ size: "medium" });
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();
  });
  it("Should render an autocomplete with large size", () => {
    renderAutocomplete({ size: "large" });
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();
  });

  it("Should render an already opened autocomplete", () => {
    renderAutocomplete({ open: true });
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();
  });

  it("Should render an autocomplete with value", () => {
    renderAutocomplete({ value: "1" });
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();
  });

  it("Search autocomplete on an empty options", () => {
    renderAutocomplete({ options: undefined });
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "Option 12" } });
  });

  it("Click on input in autocomplete", () => {
    renderAutocomplete({});
    const autocomplete = screen.getByTestId("autocomplete");
    expect(autocomplete).toBeInTheDocument();

    const input = screen.getByTestId("autocomplete-input");
    expect(input).toBeInTheDocument();

    fireEvent.click(input);
  });
});
