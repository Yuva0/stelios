import * as React from "react";
import { render, screen } from "@testing-library/react";
import Switch from "./Switch";
import { SwitchProps } from "./Switch.types";
import FormControlLabel from "../FormControlLabel/FormControlLabel";

describe("Switch component", () => {
  let defaultProps = {
    switchProps: {
      "data-testid": "switch",
    },
    formControlLabelProps: {
      "data-testid": "form-control-label",
    },
  };

  const renderSwitch = (props: Partial<SwitchProps>) => {
    render(
      <FormControlLabel
        control={<Switch {...defaultProps.switchProps} {...props} />}
        {...defaultProps.formControlLabelProps}
      />
    );
  };

  it("render a simple switch", () => {
    renderSwitch({});
    const switchElement = screen.getByTestId("switch");
    expect(switchElement).toBeInTheDocument();
  });

  it("render a switch with label", () => {
    renderSwitch({
      label: "Switch Label",
    });
    const switchElement = screen.getByTestId("switch");
    const formControlLabelElement = screen.getByTestId("form-control-label");
    expect(switchElement).toBeInTheDocument();
    expect(formControlLabelElement).toBeInTheDocument();
  });

  it("render a small switch", () => {
    renderSwitch({
      size: "small",
    });
    const switchElement = screen.getByTestId("switch");
    expect(switchElement).toBeInTheDocument();
  });

  it("render a medium switch", () => {
    renderSwitch({
      size: "medium",
    });
    const switchElement = screen.getByTestId("switch");
    expect(switchElement).toBeInTheDocument();
  });

  it("render a large switch", () => {
    renderSwitch({
      size: "large",
    });
    const switchElement = screen.getByTestId("switch");
    expect(switchElement).toBeInTheDocument();
  });

  it("render a colored switch", () => {
    renderSwitch({
      color: "red",
    });
    const switchElement = screen.getByTestId("switch");
    expect(switchElement).toBeInTheDocument();
  });

  it("render a disabled switch", () => {
    renderSwitch({
      disabled: true,
    });
    const switchElement = screen.getByTestId("switch");
    expect(switchElement).toBeInTheDocument();
  });
});
