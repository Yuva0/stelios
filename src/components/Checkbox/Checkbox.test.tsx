import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';
import { CheckboxProps } from './Checkbox.types';
import FormControlLabel from '../FormControlLabel/FormControlLabel';


describe("Button component", () => {
  let defaultProps: any;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "checkbox",
      onChange: jest.fn(),
    };
  });

  const renderCheckbox = (props: Partial<CheckboxProps>) => {
    return render(<FormControlLabel control={<Checkbox {...defaultProps} {...props} />} data-testid="form-control-label"/>);
  };

  it("Should render a checkbox", () => {
    renderCheckbox({});
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
  it("Should render a large checkbox", () => {
    renderCheckbox({size:"large"});
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
  it("Should render a medium checkbox", () => {
    renderCheckbox({size:"medium"});
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
  it("Should render a small checkbox", () => {
    renderCheckbox({size:"small"});
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
  it("Should check the checkbox", () => {
    renderCheckbox({checked:false});
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it("Should render checkbox only", () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
  it("Should render checkbox with red color", () => {
    render(<Checkbox color="red" {...defaultProps} />);
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
  it("Should use Checkbox with ref", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox {...defaultProps} ref={ref} />);
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
});
