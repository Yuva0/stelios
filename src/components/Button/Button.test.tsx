import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import Text from '../Text/Text';
import { ButtonProps } from './Button.types';

describe("Button component", () => {
  let defaultProps: ButtonProps;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "button",
      "data-leading-icon": "leading-icon",
      "data-trailing-icon": "trailing-icon",
      children: "Click Here",
    };
  });

  const renderButton = (props: ButtonProps) => {
    return render(<Button {...defaultProps} {...props} />);
  };

  it("Should render a button with children", () => {
    renderButton({});
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("Should render a button with leading icon", () => {
    renderButton({ leadingIcon: "leading-icon" });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("Should render a button with trailing icon", () => {
    renderButton({ trailingIcon: "trailing-icon" });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("Should render a custom text button", () => {
    renderButton({ children: <Text>Click Here</Text> });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("Should render a rounded button", () => {
    renderButton({ rounded: true });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("Should render a disabled button", () => {
    renderButton({ disabled: true });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  })

  it("Should render a button of variant contained", () => {
    renderButton({ variant: "contained" });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });
  it("Should render a disabled button of variant contained", () => {
    renderButton({ variant: "contained", disabled: true });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("Should render a button of variant outlined", () => {
    renderButton({ variant: "outlined" });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });
  it("Should render a disabled button of variant outlined", () => {
    renderButton({ variant: "outlined", disabled: true });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("Should render a button of variant soft", () => {
    renderButton({ variant: "soft" });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });
  it("Should render a disabled button of variant soft", () => {
    renderButton({ variant: "soft", disabled: true });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("Should render a button of variant outlined-soft", () => {
    renderButton({ variant: "outlined-soft" });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });
  it("Should render a disabled button of variant outlined-soft", () => {
    renderButton({ variant: "outlined-soft", disabled: true });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("Should render a button of variant neumorph", () => {
    renderButton({ variant: "neumorph" });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });
  it("Should render a disabled button of variant neumorph", () => {
    renderButton({ variant: "neumorph", disabled: true });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("Should render a small button", () => {
    renderButton({ size: "small" });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });
  it("Should render a small button with leading and trailing icon", () => {
    renderButton({ size: "small", leadingIcon: "leading-icon", trailingIcon: "trailing-icon" });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("Should render a medium button", () => {
    renderButton({ size: "medium" });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });
  it("Should render a medium button with leading and trailing icon", () => {
    renderButton({ size: "medium", leadingIcon: "leading-icon", trailingIcon: "trailing-icon" });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("Should render a large button", () => {
    renderButton({ size: "large" });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });
  it("Should render a large button with leading and trailing icon", () => {
    renderButton({ size: "large", leadingIcon: "leading-icon", trailingIcon: "trailing-icon" });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("Should render a button with fullWidth", () => {
    renderButton({ isFullWidth: true });
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  })

  it("Should render a container having button ref", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button {...defaultProps} ref={ref} />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });
});
