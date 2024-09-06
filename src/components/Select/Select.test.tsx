import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Select from './Select';
import { SelectProps } from './Select.types';

describe('Select component', () => {
  let defaultProps: SelectProps;

  beforeEach(() => {
    defaultProps = {
      'data-testid': 'select',
      "data-testid-input": "input",
      "data-testid-menu": "menu",
    };
  });

  const renderSelect = (props: Partial<SelectProps>) => {
    render(<Select {...defaultProps} {...props} />);
  };

  it('should render without crashing', () => {
    renderSelect({});
    const select = screen.getByTestId('select');
    expect(select).toBeInTheDocument();
  });

  it('should render with props', () => {
    renderSelect({
      color: 'red',
      style: { color: 'red' },
      className: 'select',
      label: 'Select',
      placeholder: 'Select an option',
      options: [
        { value: '1', title: 'Option 1', "data-testid": "option-1" },
        { value: '2', title: 'Option 2' },
        { value: '3', title: 'Option 3' },
      ],
    });
    const select = screen.getByTestId('select');
    expect(select).toBeInTheDocument();
    const selectInput = screen.getByTestId('input');
    expect(selectInput).toBeInTheDocument();
    const menu = screen.getByTestId('menu');
    expect(menu).toBeInTheDocument();
    fireEvent.click(selectInput);
    fireEvent.click(menu);
  });

  it("should click with select", () => {
    renderSelect({onClick: jest.fn(), "data-testid-input": "input", "data-testid-menu": "menu"});
    const select = screen.getByTestId("select");
    expect(select).toBeInTheDocument();
    select.click();

    const selectInput = screen.getByTestId("input");
    expect(selectInput).toBeInTheDocument();
    selectInput.click();

    const selectMenu = screen.getByTestId("menu");
    expect(selectMenu).toBeInTheDocument();
  });
});