import * as React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import ToggleButton from './ToggleButton';
import { ToggleButtonProps } from './ToggleButton.types';
import ToggleButtonGroup from './ToggleButtonGroup/ToggleButtonGroup';

describe("ToggleButton component", () => {
  
  const renderToggleButton = (props: Partial<ToggleButtonProps>) => {
    render(
      <ToggleButtonGroup data-testid='toggle-button-group' onClick={jest.fn()} >
        <ToggleButton data-testid="toggle-button-1" value="1">Item 1</ToggleButton>
        <ToggleButton data-testid="toggle-button-2" selected value="2">Item 2</ToggleButton>
        <ToggleButton data-testid="toggle-button-3" value="3">Item 3</ToggleButton>
      </ToggleButtonGroup>
    );
  };

  const renderToggleButtonWithValue = (props: Partial<ToggleButtonProps>) => {
    render(
      <ToggleButtonGroup data-testid='toggle-button-group' onClick={jest.fn()} value='1'>
        <ToggleButton data-testid="toggle-button-1" value="1" defaultSelected>Item 1</ToggleButton>
        <ToggleButton data-testid="toggle-button-2" value="2">Item 2</ToggleButton>
        <ToggleButton data-testid="toggle-button-3" value="3" color="red" size="small">Item 3</ToggleButton>
      </ToggleButtonGroup>
    );
  };

  it("should render with the correct value", () => {
    renderToggleButton({});
    const toggleButtonGroup = screen.getByTestId("toggle-button-group");
    expect(toggleButtonGroup).toBeInTheDocument();
    const toggleButton1 = screen.getByTestId("toggle-button-1");
    expect(toggleButton1).toBeInTheDocument();
    fireEvent.click(toggleButton1);
  });

  it("should render togglebuttongroup with correct value", () => {
    renderToggleButtonWithValue({});
    const toggleButtonGroup = screen.getByTestId("toggle-button-group");
    expect(toggleButtonGroup).toBeInTheDocument();
  });
});