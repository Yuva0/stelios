import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import SideBarItem from "../../components/SideBar/SideBarItem/SideBarItem";
import SideBarGroup from "../../components/SideBar/SideBarGroup/SideBarGroup";
import SideBarGroupItem from "../../components/SideBar/SideBarGroupItem/SideBarGroupItem";

const meta: Meta<typeof SideBar> = {
  title: "Components/SideBar",
  component: SideBar,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SideBar>;
export const Default: Story = {
  render: () => {
    return (
      <SideBar style={{ marginTop: "5rem" }}>
        <SideBarItem>Test</SideBarItem>
        <SideBarItem>Test</SideBarItem>
        <SideBarItem>Test</SideBarItem>
        <SideBarItem>Test</SideBarItem>
        <SideBarGroup title="Group 1" onClick={() => {}}>
          <SideBarGroupItem selected>Test</SideBarGroupItem>
          <SideBarGroupItem>Test</SideBarGroupItem>
          <SideBarGroupItem>Test</SideBarGroupItem>
          <SideBarGroupItem>Test</SideBarGroupItem>
        </SideBarGroup>
      </SideBar>
    );
  },
};
