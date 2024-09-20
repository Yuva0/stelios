import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "../../../components/Tab/Tabs";
import Tab from "../../../components/Tab/Tab";
import TabList from "../../../components/Tab/TabList";
import TabPanels from '../../../components/Tab/TabPanels';
import TabPanel from '../../../components/Tab/TabPanel';

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

const Template: Story = {
  render: (args) => {
    return (
      <Tabs {...args}>
        <TabList>
          <Tab label="Tab 1" value="tab1" />
          <Tab label="Tab 2" value="tab2"/>
          <Tab label="Tab 3" value="tab3" />
        </TabList>
        <TabPanels>
          <TabPanel value="tab1">Tab 1 content</TabPanel>
          <TabPanel value="tab2">Tab 2 content</TabPanel>
          <TabPanel value="tab3">Tab 3 content</TabPanel>
        </TabPanels>
      </Tabs>
    );
  },
};

export const Contained = {
  ...Template,
  args: {
    variant: "contained",
  },
  
};


export const Outlined = {
  ...Template,
  args: {
    variant: "outlined",
  },
};

export const Playground = {
  ...Template,
};
