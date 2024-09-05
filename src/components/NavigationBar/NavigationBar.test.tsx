import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";
import { NavigationBarProps } from "./NavigationBar.types";
import NavigationBarItem from "./NavigationBarItem/NavigationBarItem";
import NavigationBarGroupItem from "./NavigationBarGroupItem/NavigationBarGroupItem";
import NavigationBarGroup from "./NavigationBarGroup/NavigationBarGroup";
import NavigationBarHeader from "./NavigationBarHeader/NavigationBarHeader";
import { Icon123, Icon12Hours, Icon360View, Icon3dCubeSphere, IconCactus, IconH1 } from "@tabler/icons-react";
import Text from "../Text/Text";

describe("NavigationBar component", () => {
  const renderNavigationBar = (props: Partial<NavigationBarProps>) => {
    render(
      <NavigationBar {...props} data-testid="navigation-bar">
        <NavigationBarHeader leadingIcon={<Icon12Hours/>} trailingIcon={<Icon3dCubeSphere/>}>Header 1</NavigationBarHeader>
        <NavigationBarItem value="test-1" data-testid="navigation-bar-item-1" color="red" onClick={jest.fn()}>
          Test1
        </NavigationBarItem>
        <NavigationBarItem value="test-9" data-testid="navigation-bar-item-9" color="red" onClick={jest.fn()} leadingIcon={<Icon123/>} trailingIcon={<IconH1/>}>
          <Text>Test1</Text>
        </NavigationBarItem>
        <NavigationBarItem value="test-2" data-testid="navigation-bar-item-2">
          Test2
        </NavigationBarItem>
        <NavigationBarItem value="test-3">Test3</NavigationBarItem>
        <NavigationBarGroup
          data-testid="navigation-bar-group-1"
          data-testid-header="navigation-bar-group-header-1"
          onClick={jest.fn()}
          title={<Text>Text</Text>}
        >
        <NavigationBarHeader leadingIcon={<Icon12Hours/>} trailingIcon={<Icon3dCubeSphere/>} color="red" size="medium"><Text>Header 1</Text></NavigationBarHeader>

          <NavigationBarGroupItem
            value="test-4"
            data-testid="navigation-bar-group-item-4"
            onClick={jest.fn()}
          >
            Test4
          </NavigationBarGroupItem>
          <NavigationBarGroupItem
            value="test-5"
            tabIndex={1}
            leadingIcon={<IconCactus />}
            trailingIcon={<Icon360View />}
          >
            Test5
          </NavigationBarGroupItem>
          <NavigationBarGroupItem value="test-6" selected color="red">
            <Text>Test6</Text>
          </NavigationBarGroupItem>
        </NavigationBarGroup>
        <NavigationBarGroup
          title="Title"
          color="red"
          data-testid="navigation-bar-group-2"
          data-testid-header="navigation-bar-group-header-2"
          onClick={jest.fn()}
          expanded={true}
          leadingIcon={<IconCactus />}
          trailingIcon={<Icon123 />}
        >
          <NavigationBarGroupItem value="test-4">Test4</NavigationBarGroupItem>
          <NavigationBarGroupItem value="test-5">Test5</NavigationBarGroupItem>
          <NavigationBarGroupItem value="test-6" selected>
            Test6
          </NavigationBarGroupItem>
        </NavigationBarGroup>
        <NavigationBarGroupItem value="test-7">Test</NavigationBarGroupItem>
        Illegal Navigation Bar Item
      </NavigationBar>
    );
  };

  it("should render without crashing", () => {
    renderNavigationBar({});
    const navigationBar = screen.getByTestId("navigation-bar");
    expect(navigationBar).toBeInTheDocument();
  });

  it("should render with props", () => {
    renderNavigationBar({
      color: "red",
      style: { color: "red" },
      className: "navigation-bar",
    });
    const navigationBar = screen.getByTestId("navigation-bar");
    expect(navigationBar).toBeInTheDocument();
  });

  it("should render navigation bar and select one item", () => {
    renderNavigationBar({ onChange: jest.fn() });
    const navigationBar = screen.getByTestId("navigation-bar");
    expect(navigationBar).toBeInTheDocument();

    const navigationBarItem1 = screen.getByTestId("navigation-bar-item-1");
    expect(navigationBarItem1).toBeInTheDocument();
    fireEvent.click(navigationBarItem1);
    fireEvent.click(navigationBarItem1);
    fireEvent.keyDown(navigationBarItem1, { key: "Enter", code: "Enter" });
    fireEvent.keyDown(navigationBarItem1, { key: " ", code: "Space" });
  });

  it("render single navigation item", () => {
    render(
      <NavigationBar data-testid="navigation-bar">
        <NavigationBarItem value="1" data-testid="navigation-bar-item-1">
          Item1
        </NavigationBarItem>
      </NavigationBar>
    );

    const navigationBar = screen.getByTestId("navigation-bar");
    expect(navigationBar).toBeInTheDocument();
  });

  it("click on navigation bar group", () => {
    renderNavigationBar({});
    const navigationBarGroup1 = screen.getByTestId("navigation-bar-group-1");
    expect(navigationBarGroup1).toBeInTheDocument();

    const navigationBarGroupHeader1 = screen.getByTestId(
      "navigation-bar-group-header-1"
    );
    expect(navigationBarGroupHeader1).toBeInTheDocument();
    fireEvent.click(navigationBarGroupHeader1);
    fireEvent.keyDown(navigationBarGroupHeader1, {
      key: "Enter",
      code: "Enter",
    });
    fireEvent.keyDown(navigationBarGroupHeader1, { key: " ", code: "Space" });

    const navigationBarGroupItem4 = screen.getByTestId(
      "navigation-bar-group-item-4"
    );
    expect(navigationBarGroupItem4).toBeInTheDocument();
    fireEvent.click(navigationBarGroupItem4);
    fireEvent.keyDown(navigationBarGroupItem4, { key: "Enter", code: "Enter" });
    fireEvent.keyDown(navigationBarGroupItem4, { key: " ", code: "Space" });
  });
});
