import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Radio from './Radio';
// import { RadioProps } from './Radio.types';
import FormControlLabel from '../FormControlLabel/FormControlLabel';
import RadioGroup from '../RadioGroup/RadioGroup';
import { RadioGroupProps } from '../RadioGroup/RadioGroup.types';
import exp from 'constants';
import Text from '../Text/Text';

describe('Radio component', () => {
  const renderRadio = (props: Partial<RadioGroupProps>) => {
    render(<RadioGroup data-testid='radiogroup' onChange={jest.fn()} label="Radio Label" {...props}>
      <FormControlLabel control={<Radio onChange={jest.fn()}/>} label="Radio1" data-testid='radio-1'/>
      <FormControlLabel control={<Radio/>} label="Radio2" data-testid='radio-2'/>
      <FormControlLabel control={<Radio/>} label="Radio3" data-testid='radio-3'/>
      <FormControlLabel control={<Radio/>} label="Radio3" data-testid='radio-3' size="small"/>
      <FormControlLabel control={<Radio/>} label="Radio3" data-testid='radio-3' size="large"/>
      <FormControlLabel control={<Radio/>} label="Radio3" data-testid='radio-3' disabled/>
    </RadioGroup>)
  }

  const renderSoloRadio = (props: Partial<RadioGroupProps>) => {
    render(
      <>
        <Radio value='1' label="Radio 1" data-testid='radio-1'></Radio>
        <Radio value='1' label="Radio 2" data-testid='radio-2' disabled></Radio>
      </>
    )
  };

  const renderRadioGroup = (props: Partial<RadioGroupProps>) => {
    render(<RadioGroup data-testid='radiogroup' onChange={jest.fn()} size="small" label={<Text>Label</Text>} disabled color="red" {...props}>
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

  it("should render a radio alone", () => {
    renderSoloRadio({});
    const radio = screen.getByTestId("radio-1");
    expect(radio).toBeInTheDocument();
  });

  it("should render a radio with ref", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Radio ref={ref} data-testid='radio-1'/>);
  });

  it("should change radio", () => {
    renderRadio({});
    const radio1 = screen.getByTestId("radio-1");
    expect(radio1).toBeInTheDocument();
    const radio2 = screen.getByTestId("radio-2");
    expect(radio2).toBeInTheDocument();

    fireEvent.click(radio1);
    fireEvent.click(radio1);
    fireEvent.click(radio2);
  });

  it("should render radio group", () => {
    renderRadioGroup({});
    const radioGroup = screen.getByTestId("radiogroup");
    expect(radioGroup).toBeInTheDocument();
  });

  it("should render radio group without label", () => {
    render(<RadioGroup data-testid='radiogroup' onChange={jest.fn()}>
      <FormControlLabel control={<Radio onChange={jest.fn()}/>} label="Radio1" data-testid='radio-1'/>
    </RadioGroup>);
  });

  it("should render radio group alone", () => {
    render(<RadioGroup data-testid='radiogroup' onChange={jest.fn()}/>);
  });
  it("should render radio group with null children", () => {
    render(<RadioGroup data-testid='radiogroup' onChange={jest.fn()}>
      {null}
      <FormControlLabel control={<Radio onChange={jest.fn()}/>} label="Radio1" data-testid='radio-1'/>
    </RadioGroup>);
  });
});