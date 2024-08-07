import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import SideBarItem from "../../components/SideBar/SideBarItem/SideBarItem";
import SideBarGroup from "../../components/SideBar/SideBarGroup/SideBarGroup";
import SideBarGroupItem from "../../components/SideBar/SideBarGroupItem/SideBarGroupItem";
import Button from "../../components/Button/Button";

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
        <Button>test</Button>
        <SideBarItem onClick={() => {}}>Test</SideBarItem>
        <SideBarItem onClick={() => {}}>Test</SideBarItem>
        <SideBarItem onClick={() => {}}>Test</SideBarItem>
        <SideBarItem onClick={() => {}}>Test</SideBarItem>
        <SideBarGroup title="Group 1" onClick={() => {}}>
          <SideBarGroupItem selected onClick={() => {}}>Test</SideBarGroupItem>
          <SideBarGroupItem onClick={() => {}}>Test</SideBarGroupItem>
          <SideBarGroupItem onClick={() => {}}>Test</SideBarGroupItem>
          <SideBarGroupItem onClick={() => {}}>Test</SideBarGroupItem>
        </SideBarGroup>
      </SideBar>
    );
  },
};
