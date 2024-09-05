import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Drawer from "./Drawer";
import { DrawerProps } from "./Drawer.types";

describe("Drawer component", () => {
  let defaultProps: DrawerProps;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "drawer",
      children: "Drawer",
    };
  });

  const renderDrawer = (props: Partial<DrawerProps>) => {
    return render(<Drawer {...defaultProps} {...props} />);
  };

  it("Should render a drawer with children", () => {
    renderDrawer({ open: true });
    const drawer = screen.getByTestId("drawer");
    expect(drawer).toBeInTheDocument();
  });
  it("Should render a drawer with props", () => {
    renderDrawer({
      hideOnOutsideClick: true,
      position: "right",
      size: "large",
      zIndex: 1000,
      backdropStrength: "normal",
      title: "Drawer Title",
      hasCloseIcon: true,
      color: "red",
      open: true,
    });
    const drawer = screen.getByTestId("drawer");
    expect(drawer).toBeInTheDocument();
    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });
  });
  it("Should render a drawer with size small", () => {
    renderDrawer({
      size: "small",
      open: true,
    });
    const drawer = screen.getByTestId("drawer");
    expect(drawer).toBeInTheDocument();
  });
  it("Should render a drawer with size medium", () => {
    renderDrawer({
      size: "medium",
      open: true,
    });
    const drawer = screen.getByTestId("drawer");
    expect(drawer).toBeInTheDocument();
  });
  it("Should render a drawer with size large", () => {
    renderDrawer({
      size: "large",
      open: true,
    });
    const drawer = screen.getByTestId("drawer");
    expect(drawer).toBeInTheDocument();
  });
  it("Should render a drawer with position left", () => {
    renderDrawer({
      position: "left",
      open: true,
    });
    const drawer = screen.getByTestId("drawer");
    expect(drawer).toBeInTheDocument();
  });
  it("Should render a drawer with strength weak", () => {
    renderDrawer({
      backdropStrength: "weak",
      open: true,
    });
    const drawer = screen.getByTestId("drawer");
    expect(drawer).toBeInTheDocument();
  });
  it("Should render a drawer with strength strong", () => {
    renderDrawer({
      backdropStrength: "strong",
      open: true,
    });
    const drawer = screen.getByTestId("drawer");
    expect(drawer).toBeInTheDocument();
  });
  it("Should render a drawer with strength normal", () => {
    renderDrawer({
      backdropStrength: "normal",
      open: true,
    });
    const drawer = screen.getByTestId("drawer");
    expect(drawer).toBeInTheDocument();
  });
  it("Shoud render a drawer that never opens", () => {
    renderDrawer({});
    // Do Nothing
  });
  it("should close on click of Escape", () => {
    renderDrawer({ open: true, onClose: jest.fn() });
    const drawer = screen.getByTestId("drawer");
    expect(drawer).toBeInTheDocument();
    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });
  });
  it("should close on click of backdrop", () => {
    renderDrawer({open: true, onClose: jest.fn(), "data-testid-backdrop": "backdrop"});
    const drawer = screen.getByTestId("drawer");
    expect(drawer).toBeInTheDocument();
    const backdrop = screen.getByTestId("backdrop");
    expect(backdrop).toBeInTheDocument();
    fireEvent.click(backdrop);
  });
});
