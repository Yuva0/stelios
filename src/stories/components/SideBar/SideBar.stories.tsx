import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import SideBarItem from "../../../components/SideBar/SideBarItem/SideBarItem";
import SideBarGroup from "../../../components/SideBar/SideBarGroup/SideBarGroup";
import SideBarGroupItem from "../../../components/SideBar/SideBarGroupItem/SideBarGroupItem";
import Button from "../../../components/Button/Button";

const meta: Meta<typeof SideBar> = {
  title: "Components/SideBar",
  component: SideBar,
  parameters: {
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ minHeight: "30rem" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof SideBar>;

const Template: Story = {
  render: () => {
    return (
      <SideBar style={{ marginTop: "5rem" }}>
        <SideBarGroup title="Group 1">
          <SideBarGroupItem>Group 1 Item 1</SideBarGroupItem>
          <SideBarGroupItem>Group 1 Item 2</SideBarGroupItem>
          <SideBarGroupItem>Group 1 Item 3</SideBarGroupItem>
          <SideBarGroupItem>Group 1 Item 4</SideBarGroupItem>
        </SideBarGroup>
        <SideBarGroup title="Group 2" onClick={() => {}}>
          <SideBarGroupItem selected onClick={() => {}}>Group 2 Item 1</SideBarGroupItem>
          <SideBarGroupItem onClick={() => {}}>Group 2 Item 2</SideBarGroupItem>
          <SideBarGroupItem onClick={() => {}}>Group 2 Item 3</SideBarGroupItem>
          <SideBarGroupItem onClick={() => {}}>Group 2 Item 4</SideBarGroupItem>
        </SideBarGroup>
        <SideBarItem>Individual Item 1</SideBarItem>
        <SideBarItem>Individual Item 2</SideBarItem>
        <SideBarItem>Individual Item 3</SideBarItem>
      </SideBar>
    );
  },
};
export const Default = Template;