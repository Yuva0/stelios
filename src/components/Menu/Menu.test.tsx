import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./Menu";
import { MenuProps } from "./Menu.types";
import MenuItem from "../MenuItem/MenuItem";
import { Icon123 } from "@tabler/icons-react";
import Text from "../Text/Text";

describe("Menu component", () => {
  let defaultProps: MenuProps;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "menu",
      children: (
        <MenuItem
          title="Item 1"
          value="item1"
          data-testid="menu-item-1"
          onClick={jest.fn()}
        />
      ),
      anchorElement: document.createElement("div"),
    };
  });

  const renderMenu = (props: Partial<MenuProps>) => {
    render(<Menu {...defaultProps} {...props} />);
  };

  const renderMultiMenu = (props: Partial<MenuProps>) => {
    render(
      <Menu {...defaultProps} {...props}>
        <MenuItem
          title="Item 1"
          value="item1"
          data-testid="menu-item-1"
          onClick={jest.fn()}
        />
        <MenuItem
          title="Item 2"
          value="item2"
          data-testid="menu-item-2"
          onClick={jest.fn()}
          variant="contained"
        />
        <MenuItem
          title="Item 3"
          value="item3"
          data-testid="menu-item-3"
          onClick={jest.fn()}
          variant="outlined"
        />
        <MenuItem
          title="Item 4"
          value="item4"
          data-testid="menu-item-4"
          onClick={jest.fn()}
          variant="outlined"
          color="red"
          trailingIcon={<Icon123/>}
        />
        <MenuItem
          title="Item 5"
          value="item5"
          data-testid="menu-item-5"
          onClick={jest.fn()}
          variant="outlined"
          color="red"
          trailingIcon={<Icon123/>}
          leadingIcon={<Icon123/>}
        >
          <Text>Custom Menu Item</Text>
        </MenuItem>
        <MenuItem
          title="Item 6"
          value="item6"
          data-testid="menu-item-6"
          onClick={jest.fn()}
          variant="outlined"
          color="red"
          trailingIcon={<Icon123/>}
          leadingIcon={<Icon123/>}
        >
          Custom Menu Item
        </MenuItem>
      </Menu>
    );
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
      popperStyles: {
        placement: "top",
        modifiers: [{ name: "offset", options: { offset: [0, 10] } }],
      },
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

  it("should render a menu and useKeyDown", () => {
    renderMenu({ open: true });
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
    fireEvent.focus(menu);
    fireEvent.keyDown(menu, { key: "ArrowDown", code: 40 });
    fireEvent.keyDown(menu, { key: "ArrowUp", code: 38 });
    fireEvent.keyDown(menu, { key: "Enter", code: 13 });
    
    const menuItem1 = screen.getByTestId("menu-item-1");
    expect(menuItem1).toBeInTheDocument();
    fireEvent.focus(menuItem1);
    fireEvent.keyDown(menuItem1, { key: "Enter", code: 13 });
    fireEvent.keyDown(menuItem1, { key: " ", code: 32 });
  });

  it("should close onOutsideClick", () => {
    renderMenu({ open: true, onClose: jest.fn() });
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();

    const button = document.createElement("button");
    document.body.appendChild(button);
    fireEvent.click(button);
  });

  it("should open menu with multiple menu items", () => {
    renderMultiMenu({});
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
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

  it("edge:individual menu item should render with custom color", () => {
    render(<MenuItem title="Item 1" value="item1" data-testid="menu-item-1" onClick={jest.fn()}/>);
    const menuItem = screen.getByTestId("menu-item-1");
    expect(menuItem).toBeInTheDocument();

    fireEvent.focus(menuItem);
    fireEvent.keyDown(menuItem, { key: "Enter", code: 13 });
  });
});
