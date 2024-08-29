import * as React from 'react';
import { render, screen } from '@testing-library/react';
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

  it("Should call onClickAway when clicked outside", () => {
    renderClickAwayListener({});
    const clickAwayListener = screen.getByTestId("click-away-listener");
    expect(clickAwayListener).toBeInTheDocument();

    // Simulate a click outside the ClickAwayListener component
    document.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));

    // Verify that onClickAway is called
    expect(defaultProps.onClickAway).toHaveBeenCalled();
  });
});