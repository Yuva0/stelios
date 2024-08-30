import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Radio from './Radio';
import { RadioProps } from './Radio.types';
import FormControlLabel from '../FormControlLabel/FormControlLabel';
import RadioGroup from '../RadioGroup/RadioGroup';
import { RadioGroupProps } from '../RadioGroup/RadioGroup.types';

describe('Radio component', () => {
  const renderRadio = (props: Partial<RadioGroupProps>) => {
    render(<RadioGroup data-testid='radiogroup' {...props}>
      <FormControlLabel control={<Radio/>} label="Radio1" data-testid='radio-1'/>
      <FormControlLabel control={<Radio/>} label="Radio2" data-testid='radio-2'/>
      <FormControlLabel control={<Radio/>} label="Radio3" data-testid='radio-3'/>
    </RadioGroup>)
  }

  it('should render without crashing', () => {
    renderRadio({});
    const radioGroup = screen.getByTestId('radiogroup');
    expect(radioGroup).toBeInTheDocument();
    const radio = screen.getByTestId('radio-1');
    expect(radio).toBeInTheDocument();
  });

  it('should render with orientation horizontal', () => {
    renderRadio({ orientation: 'horizontal' });
    const radioGroup = screen.getByTestId('radiogroup');
    expect(radioGroup).toBeInTheDocument();
  });
});