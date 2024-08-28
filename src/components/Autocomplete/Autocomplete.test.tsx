import * as React from "react";
import { MenuItemProps } from "../MenuItem/MenuItem.types";
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
        { title: "Option 1", value: "option1", "data-testid": "option1", onClick: jest.fn() },
        { title: "Option 2", value: "option2", "data-testid": "option2" },
        { title: "Option 3", value: "option3", "data-testid": "option3" },
      ],
      onClick: jest.fn(),
      onInputChange: jest.fn(),
      onChange: jest.fn()
    };
  });

  const renderAutocomplete = (props: Partial<AutocompleteProps>) => {
    return render(<Autocomplete {...props} {...defaultProps} />);
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

  it("Should render an autocomplete with multiselect option", () => {
    renderAutocomplete({multiSelect: true});
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
});
