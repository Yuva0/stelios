import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';
import { InputProps } from './Input.types';
import { IconChevronCompactDown } from '@tabler/icons-react';
import Text from '../Text/Text';

describe("Input component", () => {
  let defaultProps: InputProps;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "input-container",
      "data-testid-input": "input",
    };
  });

  const renderInput = (props: Partial<InputProps>) => {
    render(<Input {...defaultProps} {...props} />);
  };

  it("should render without crashing", () => {
    renderInput({});
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  });

  it("should render props", () => {
    renderInput({
      value: "input string",
      color: "red",
      variant: "outlined",
      size: "small",
      type: "password",
      cursor: "text",
      disableSearch: true,
      width: "50%",
      disabled: true,
      fullWidth: true,
      label: "Input",
      labelPosition: "bottom",
      placeholder: "input",
      containerRef: { current: null },
      leadingIcon: <div data-testid="leading-icon">Icon</div>,
      trailingIcon: <div data-testid="trailing-icon">Icon</div>,
      style: { color: "red" },
      inputStyle: { color: "red" },
      className: "input",
    });
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  });

  it("should use ref from outside", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Input {...defaultProps} ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("click rendered input", () => {
    renderInput({
      onClick: jest.fn(),
      onChange: jest.fn(),
      onKeyDown: jest.fn(),
    });
    const inputCtr = screen.getByTestId("input-container");
    fireEvent.click(inputCtr);
    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "input" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    fireEvent.blur(input);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("input");
  });

  it("input with leading icon", () => {
    renderInput({leadingIcon: <IconChevronCompactDown/>})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  }); 
  it("input with trailing icon", () => {
    renderInput({trailingIcon: <IconChevronCompactDown/>})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  });
  it("input with leading and trailing icon", () => {
    renderInput({leadingIcon: <IconChevronCompactDown/>, trailingIcon: <IconChevronCompactDown/>})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  });
  it("input with leading icon and size small", () => {
    renderInput({leadingIcon: <IconChevronCompactDown/>, size: "small"})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  })
  it("input with trailing icon and size small", () => {
    renderInput({trailingIcon: <IconChevronCompactDown/>, size: "small"})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  })
  it("input with leading and trailing icon and size small", () => {
    renderInput({leadingIcon: <IconChevronCompactDown/>, trailingIcon: <IconChevronCompactDown/>, size: "small"})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  })
  it("input with leading icon and size medium", () => {
    renderInput({leadingIcon: <IconChevronCompactDown/>, size: "medium"})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  })
  it("input with trailing icon and size medium", () => {
    renderInput({trailingIcon: <IconChevronCompactDown/>, size: "medium"})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  })
  it("input with leading and trailing icon and size medium", () => {
    renderInput({leadingIcon: <IconChevronCompactDown/>, trailingIcon: <IconChevronCompactDown/>, size: "medium"})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  })
  it("input with leading icon and size large", () => {
    renderInput({leadingIcon: <IconChevronCompactDown/>, size: "large"})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  })
  it("input with trailing icon and size large", () => {
    renderInput({trailingIcon: <IconChevronCompactDown/>, size: "large"})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  })
  it("input with leading and trailing icon and size large", () => {
    renderInput({leadingIcon: <IconChevronCompactDown/>, trailingIcon: <IconChevronCompactDown/>, size: "large"})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  })
  it("input with no leading and trailing icon and size large", () => {
    renderInput({size: "large"})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  });
  it("input with no leading and trailing icon and size medium", () => {
    renderInput({size: "medium"})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  });
  it("input with no leading and trailing icon and size small", () => {
    renderInput({size: "small"})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  });
  it("input with soft variant", () => {
    renderInput({variant: "soft"})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  });

  it("input with custom label", () => {
    renderInput({label: <Text>Custom Label</Text>})
    const input = screen.getByTestId("input-container");
    expect(input).toBeInTheDocument();
  });
});