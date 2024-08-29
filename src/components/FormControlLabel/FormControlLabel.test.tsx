import * as React from 'react';
import { render, screen } from '@testing-library/react';
import FormControlLabel from './FormControlLabel';
import { FormControlLabelProps } from './FormControlLabel.types';
import Checkbox from '../Checkbox/Checkbox';

describe('FormControlLabel component', () => {
  let defaultProps: FormControlLabelProps;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "form-control-label",
      control: <Checkbox />,
      label: 'Label',
    };
  });

  const renderFormControlLabel = (props: Partial<FormControlLabelProps>) => {
    return render(<FormControlLabel {...defaultProps} {...props} />);
  };

  it('Should render a form control label with children', () => {
    renderFormControlLabel({});
    const formControlLabel = screen.getByTestId('form-control-label');
    expect(formControlLabel).toBeInTheDocument();
  });

  it('Should render a form control label with custom label', () => {
    renderFormControlLabel({ label: 'Custom Label' });
    const formControlLabel = screen.getByTestId('form-control-label');
    expect(formControlLabel).toBeInTheDocument();
  });

  it('Should render a form control label with custom control', () => {
    renderFormControlLabel({ control: <input type="radio" /> });
    const formControlLabel = screen.getByTestId('form-control-label');
    expect(formControlLabel).toBeInTheDocument();
  });

  it('Should render a form control label with top label placement', () => {
    renderFormControlLabel({ labelPlacement: 'top' });
    const formControlLabel = screen.getByTestId('form-control-label');
    expect(formControlLabel).toBeInTheDocument();
  });

  it('Should render a form control label with bottom label placement', () => {
    renderFormControlLabel({ labelPlacement: 'bottom' });
    const formControlLabel = screen.getByTestId('form-control-label');
    expect(formControlLabel).toBeInTheDocument();
  });

  it('Should render a form control label with start label placement', () => {
    renderFormControlLabel({ labelPlacement: 'start' });
    const formControlLabel = screen.getByTestId('form-control-label');
    expect(formControlLabel).toBeInTheDocument();
  });

  it('Should render a form control label with custom size', () => {
    renderFormControlLabel({ size: 'small' });
    const formControlLabel = screen.getByTestId('form-control-label');
    expect(formControlLabel).toBeInTheDocument();
  });

  it('Should render a form control label with custom gap', () => {
    renderFormControlLabel({ gap: 8 });
    const formControlLabel = screen.getByTestId('form-control-label');
    expect(formControlLabel).toBeInTheDocument();
  });

  it('Should render a form control label with disabled', () => {
    renderFormControlLabel({ gap: 8, disabled: true });
    const formControlLabel = screen.getByTestId('form-control-label');
    expect(formControlLabel).toBeInTheDocument();
  });

  it('Should render a form control label with custom color', () => {
    renderFormControlLabel({ color: 'red' });
    const formControlLabel = screen.getByTestId('form-control-label');
    expect(formControlLabel).toBeInTheDocument();
  });
});