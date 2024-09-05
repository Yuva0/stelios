import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";
import { NavigationBarProps } from "./NavigationBar.types";
import NavigationBarItem from "./NavigationBarItem/NavigationBarItem";
import NavigationBarGroupItem from "./NavigationBarGroupItem/NavigationBarGroupItem";
import NavigationBarGroup from "./NavigationBarGroup/NavigationBarGroup";
import NavigationBarHeader from "./NavigationBarHeader/NavigationBarHeader";
import Text from "../Text/Text";

describe("NavigationBar component", () => {
  const renderNavigationBar = (props: Partial<NavigationBarProps>) => {
    render(
      <NavigationBar {...props} data-testid="navigation-bar">
        <NavigationBarHeader>Header 1</NavigationBarHeader>
        <NavigationBarItem value="test-1" data-testid="navigation-bar-item-1">
          Test1
        </NavigationBarItem>
        <NavigationBarItem value="test-2" data-testid="navigation-bar-item-2">
          Test2
        </NavigationBarItem>
        <NavigationBarItem value="test-3">Test3</NavigationBarItem>
        <NavigationBarGroup>
          <NavigationBarGroupItem value="test-4">Test4</NavigationBarGroupItem>
          <NavigationBarGroupItem value="test-5">Test5</NavigationBarGroupItem>
          <NavigationBarGroupItem value="test-6" selected>
            Test6
          </NavigationBarGroupItem>
        </NavigationBarGroup>
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

  it("render single navigation item-1", () => {
    render(
      <NavigationBar data-testid="navigation-bar">
        <NavigationBarGroup data-testid="navigation-bar-Group-1">
          <text></text>
        </NavigationBarGroup>
      </NavigationBar>
    );

    const navigationBar = screen.getByTestId("navigation-bar");
    expect(navigationBar).toBeInTheDocument();
  });
});
