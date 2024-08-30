import * as React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./Menu";
import { MenuProps } from "./Menu.types";
import MenuItem from "../MenuItem/MenuItem";

describe("Menu component", () => {
  let defaultProps: MenuProps;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "menu",
      children: <MenuItem title="Item 1" value="item1" data-testid="menu-item-1" onClick={jest.fn()}/>,
      anchorElement: document.createElement("div"),
    };
  });

  const renderMenu = (props: Partial<MenuProps>) => {
    render(<Menu {...defaultProps} {...props} />);
  };

  it("should render without crashing", () => {
    renderMenu({});
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });

  it("should render with props", () => {
    renderMenu({
      color: "red",
      style: { color: "red" },
      className: "menu",
      minWidth: "10rem",
      hideOnOutsideClick: false,
      popperStyles: { placement: "top", modifiers: [{ name: "offset", options: { offset: [0, 10] } }] },
    });
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });

  it("should render a menu with contained variant", () => {
    renderMenu({ variant: "contained" });
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });

  it("should render a menu with outlined variant", () => {
    renderMenu({ variant: "outlined" });
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });

  it("should render a menu with soft variant", () => {
    renderMenu({ variant: "soft" });
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });

  it("should render a menu already open", () => {
    renderMenu({ open: true });
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });

  it("should render a menu with menu items and click one", () => {
    renderMenu({ open: true, onClick: jest.fn() });
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
    const menuItem = screen.getByTestId("menu-item-1");
    menuItem.click();
  });

  it("edge:should render a menu with one child as null", () => {
    render(
      <Menu {...defaultProps}>
        <MenuItem title="Item 1" value="item 1" />
        {null}
        <MenuItem title="Item 2" value="item 2" />
      </Menu>
    );
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });

  it("edge:should render a menu with one child as string", () => {
    render(
      <Menu {...defaultProps}>
        <MenuItem title="Item 1" value="item 1" />
        {"Test"}
        <MenuItem title="Item 2" value="item 2" />
      </Menu>
    );
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });

  it("edge:should not render a menu when empty children array is provided", () => {
    renderMenu({ children: [] });
    const menu = screen.queryByTestId("menu");
    expect(menu).not.toBeInTheDocument();
  });
});
