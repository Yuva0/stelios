import * as React from "react";
import { render, screen } from "@testing-library/react";
import IconButton from "./IconButton";
import { IconButtonProps } from "./IconButton.types";

describe("IconButton component", () => {
  let defaultProps: IconButtonProps;

  beforeEach(() => {
    defaultProps = {
      icon: <div data-testid="icon">Icon</div>,
      onClick: jest.fn(),
      "data-testid": "icon-button",
    };
  });

  const renderIconButton = (props: Partial<IconButtonProps>) => {
    render(<IconButton {...defaultProps} {...props} />);
  };

  it("should render without crashing", () => {
    renderIconButton({});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });

  it("should render with props", () => {
    renderIconButton({
      size: "large",
      color: "red",
      variant: "contained",
      disabled: true,
    });
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });

  it("should render icon with string", () => {
    renderIconButton({
      size: "large",
      color: "red",
      variant: "contained",
      icon: "Icon"
    });
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });

  it("should render icon with contained variant", () => {
    renderIconButton({variant: "contained"});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });
  it("should render icon with disabled contained variant", () => {
    renderIconButton({variant: "contained", disabled: true});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });

  it("should render icon with soft variant", () => {
    renderIconButton({variant: "soft"});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });
  it("should render icon with disabled soft variant", () => {
    renderIconButton({variant: "soft", disabled: true});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });

  it("should render icon with outlined variant", () => {
    renderIconButton({variant: "outlined"});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });
  it("should render icon with disabled outlined variant", () => {
    renderIconButton({variant: "outlined", disabled: true});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });

  it("should render icon with outlined-soft variant", () => {
    renderIconButton({variant: "outlined-soft"});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });
  it("should render icon with disabled outlined-soft variant", () => {
    renderIconButton({variant: "outlined-soft", disabled: true});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });

  it("should render icon with neumorph variant", () => {
    renderIconButton({variant: "neumorph"});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });
  it("should render icon with disabled neumorph variant", () => {
    renderIconButton({variant: "neumorph", disabled: true});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });

  it("should render icon with neumorph-contained variant", () => {
    renderIconButton({variant: "neumorph-contained"});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });
  it("should render icon with disabled neumorph-contained variant", () => {
    renderIconButton({variant: "neumorph-contained", disabled: true});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  })

  it("should render icon with small size", () => {
    renderIconButton({size: "small"});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });

  it("should render icon with medium size", () => {
    renderIconButton({size: "medium"});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });

  it("should render icon with large size", () => {
    renderIconButton({size: "large"});
    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });
})
