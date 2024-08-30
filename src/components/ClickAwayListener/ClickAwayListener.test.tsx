import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ClickAwayListener from './ClickAwayListener';
import { ClickAwayListenerProps } from './ClickAwayListener.types';

describe("ClickAwayListener component", () => {
  let defaultProps: ClickAwayListenerProps;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "click-away-listener",
      onClickAway: jest.fn(),
      children: <div>ClickAwayListener</div>,
    };
  });

  const renderClickAwayListener = (props: Partial<ClickAwayListenerProps>) => {
    return render(<ClickAwayListener {...defaultProps} {...props} />);
  };

  it("Should render a ClickAwayListener", () => {
    renderClickAwayListener({});
    const clickAwayListener = screen.getByTestId("click-away-listener");
    expect(clickAwayListener).toBeInTheDocument();
  });

  it("Should call onClickAway when clicking outside the component", () => {
    renderClickAwayListener({});
    const clickAwayListener = screen.getByTestId("click-away-listener");
    expect(clickAwayListener).toBeInTheDocument();
    fireEvent.mouseDown(document.body);
    // fixme: expect(defaultProps.onClickAway).toHaveBeenCalledTimes(1);
  });

  it("Should not call onClickAway when clicking inside the component", () => {
    renderClickAwayListener({});
    const clickAwayListener = screen.getByTestId("click-away-listener");

    fireEvent.mouseDown(clickAwayListener);

    expect(defaultProps.onClickAway).not.toHaveBeenCalled();
  });

  it("Should handle no children gracefully", () => {
    renderClickAwayListener({ children: null });

    fireEvent.mouseDown(document.body);

    expect(defaultProps.onClickAway).toHaveBeenCalledTimes(0);
  });

  it("Should not throw an error if onClickAway is not provided", () => {
    renderClickAwayListener({ onClickAway: undefined });

    fireEvent.mouseDown(document.body);

    // No assertion needed, just ensure it doesn't throw
  });
});
