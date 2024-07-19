import React from "react";
import { Meta, StoryObj } from "@storybook/react";
// import { IconChevronRight } from "@tabler/icons-react";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import NavigationBarItem from "../../components/NavigationBar/NavigationBarItem/NavigationBarItem";
import NavigationBarHeader from "../../components/NavigationBar/NavigationBarHeader/NavigationBarHeader";
import NavigationBarGroup from "../../components/NavigationBar/NavigationBarGroup/NavigationBarGroup";
import NavigationBarGroupItem from "../../components/NavigationBar/NavigationBarGroupItem/NavigationBarGroupItem";
import SideBar from "../../components/SideBar/SideBar";
import SideBarItem from "../../components/SideBar/SideBarItem/SideBarItem";
import SideBarGroup from "../../components/SideBar/SideBarGroup/SideBarGroup";
import SideBarGroupItem from "../../components/SideBar/SideBarGroupItem/SideBarGroupItem";

const meta: Meta<typeof NavigationBar> = {
  title: "Components/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof NavigationBar>;
export const Default: Story = {
  render: () => {
    return (
      <>
        {/* <Header/> */}
        <NavigationBar>
          <NavigationBarGroup title="Components 1">
            <NavigationBarHeader>Header</NavigationBarHeader>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
          </NavigationBarGroup>
          <NavigationBarItem>Content</NavigationBarItem>
          <NavigationBarGroup title="Components 2">
            <NavigationBarHeader>Header</NavigationBarHeader>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
            <NavigationBarGroupItem>Content</NavigationBarGroupItem>
          </NavigationBarGroup>
        </NavigationBar>
        <SideBar style={{ marginTop: "5rem" }}>
          <SideBarItem>Test</SideBarItem>
          <SideBarItem>Test</SideBarItem>
          <SideBarItem>Test</SideBarItem>
          <SideBarItem>Test</SideBarItem>
          <SideBarGroup title="Group 1" onClick={() => {}}>
            <SideBarGroupItem>Test</SideBarGroupItem>
            <SideBarGroupItem>Test</SideBarGroupItem>
            <SideBarGroupItem>Test</SideBarGroupItem>
            <SideBarGroupItem>Test</SideBarGroupItem>
          </SideBarGroup>
        </SideBar>
      </>
    );
  },
};
