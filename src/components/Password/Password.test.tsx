import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Password from './Password';
import { PasswordProps } from './Password.types';

describe('Password component', () => {
  let defaultProps: PasswordProps;

  beforeEach(() => {
    defaultProps = {
      'data-testid': 'password',
      'data-testid-eye-icon': 'eye-icon',
    };
  });

  const renderPassword = (props: Partial<PasswordProps>) => {
    render(<Password {...defaultProps} {...props} />);
  };

  it('should render without crashing', () => {
    renderPassword({});
    const password = screen.getByTestId('password');
    expect(password).toBeInTheDocument();
  });

  it('should render with props', () => {
    renderPassword({
      color: 'red',
      style: { color: 'red' },
      className: 'password',
      label: 'Password',
      placeholder: 'Enter password',
    });
    const password = screen.getByTestId('password');
    expect(password).toBeInTheDocument();
    const eyeIcon = screen.getByTestId('eye-icon');
    expect(eyeIcon).toBeInTheDocument();

    eyeIcon.click();
  });

  it("should render with error message", () => {
    renderPassword({ errorMessage: "Password is required" });
    const password = screen.getByTestId("password");
    expect(password).toBeInTheDocument();
  });
});