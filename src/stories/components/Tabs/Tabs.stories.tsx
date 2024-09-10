import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "../../../components/Tab/Tabs";
import Tab from "../../../components/Tab/Tab";
import TabList from "../../../components/Tab/TabList";
import TabPanels from '../../../components/Tab/TabPanels';

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Template: Story = {
  render: (args) => {
    return (
      <Tabs>
        <TabList>
          <Tab label="Tab 1" value="tab1" />
          <Tab label="Tab 2" value="tab2" />
          <Tab label="Tab 3" value="tab3" />
        </TabList>
        <TabPanels>
          test
        </TabPanels>
      </Tabs>
    );
  },
};
