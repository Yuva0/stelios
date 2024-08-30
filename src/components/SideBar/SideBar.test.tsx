import * as React from "react";
import { render, screen } from "@testing-library/react";
import SideBar from "./SideBar";
import { SideBarProps } from "./SideBar.types";
import SideBarGroup from "./SideBarGroup/SideBarGroup";
import SideBarGroupItem from "./SideBarGroupItem/SideBarGroupItem";
import SideBarItem from "./SideBarItem/SideBarItem";
import { IconChairDirector } from "@tabler/icons-react";

describe("SideBar component", () => {
  let defaultProps: SideBarProps;

  const renderSideBar = (props: Partial<SideBarProps>) => {
    render(
      <SideBar {...defaultProps} {...props} data-testid="sidebar">
        <SideBarItem data-testid="sidebar-item-1">Test1</SideBarItem>
        <SideBarGroup data-testid="sidebar-group" title="Group 1" leadingIcon={<IconChairDirector/>}>
          <SideBarGroupItem data-testid="sidebar-groupitem-2">Test2</SideBarGroupItem>
          <SideBarGroupItem >Test3</SideBarGroupItem>
        </SideBarGroup>
        <SideBarGroup title="Group 2">
          <SideBarGroupItem>Test4</SideBarGroupItem>
          <SideBarGroupItem>Test5</SideBarGroupItem>
        </SideBarGroup>
      </SideBar>
    );
  };

  it("should render without crashing", () => {
    renderSideBar({});
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toBeInTheDocument();
  });

  it("should render with props", () => {
    renderSideBar({
      top: "200px",
      right: "200ps",
      style: { color: "red" },
      className: "sidebar",
    });
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toBeInTheDocument();
  });
});
