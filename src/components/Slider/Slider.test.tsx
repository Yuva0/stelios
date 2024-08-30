import * as React from "react";
import { render, screen } from "@testing-library/react";
import Slider from "./Slider";
import { SliderProps } from "./Slider.types";

describe("Slider component", () => {
  let defaultProps: Partial<SliderProps>;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "slider",
    };
  });

  const renderComponent = (props: Partial<SliderProps>) =>
    render(<Slider {...defaultProps} {...props} />);

  it("should render with the correct value", () => {
    renderComponent({});
    const slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
  });

  it("should render slider with props", () => {
    renderComponent({
      value: 50,
      min: 0,
      max: 100,
      minDisplay: "min",
      maxDisplay: "max",
      step: 1,
      width: "100%",
      color: "red",
    });
    const slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
  });

  it("should disable labels", () => {
    renderComponent({
      disableLabels: true,
    });
    const slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
  })

  it("slider is disabled", () => {
    renderComponent({
      disabled: true,
    });
    const slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
  });

  it("slider has variant contained",() => {
    renderComponent({
      variant: "contained",
    });
    const slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
  });

  it("slider has variant outlined",() => {
    renderComponent({
      variant: "outlined",
    });
    const slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
  });

  it("slider has size small",() => {
    renderComponent({
      size: "small",
    });
    const slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
  });

  it("slider has size medium",() => {
    renderComponent({
      size: "medium",
    });
    const slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
  });

  it("slider has size large",() => {
    renderComponent({
      size: "large",
    });
    const slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
  });
});
