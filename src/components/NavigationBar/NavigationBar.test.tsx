import * as React from 'react';
import { render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar';
import { NavigationBarProps } from './NavigationBar.types';
import NavigationBarItem from './NavigationBarItem/NavigationBarItem';
import NavigationBarGroupItem from './NavigationBarGroupItem/NavigationBarGroupItem';
import NavigationBarGroup from './NavigationBarGroup/NavigationBarGroup';
import NavigationBarHeader from './NavigationBarHeader/NavigationBarHeader';

describe("NavigationBar component", () => {

  const renderNavigationBar = (props: Partial<NavigationBarProps>) => {
    render(
      <NavigationBar {...props} data-testid='navigation-bar'>
        <NavigationBarHeader>Header 1</NavigationBarHeader>
        <NavigationBarItem value="test-1" data-testid="navigation-bar-item-1">Test1</NavigationBarItem>
        <NavigationBarItem value="test-2" data-testid='navigation-bar-item-2'>Test2</NavigationBarItem>
        <NavigationBarItem value="test-3">Test3</NavigationBarItem>
        <NavigationBarGroup>
          <NavigationBarGroupItem value="test-4">Test4</NavigationBarGroupItem>
          <NavigationBarGroupItem value="test-5">Test5</NavigationBarGroupItem>
          <NavigationBarGroupItem value="test-6" selected>Test6</NavigationBarGroupItem>
        </NavigationBarGroup>
      </NavigationBar>
    )
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
});