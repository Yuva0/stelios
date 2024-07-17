import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { IconChevronRight } from "@tabler/icons-react";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import NavigationBarItem from "../../components/NavigationBar/NavigationBarItem/NavigationBarItem";
import NavigationBarHeader from "../../components/NavigationBar/NavigationBarHeader/NavigationBarHeader";
import NavigationBarGroup from "../../components/NavigationBar/NavigationBarGroup/NavigationBarGroup";

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
      <NavigationBar>
        <NavigationBarGroup
          title="Components 1"
          leadingIcon={<IconChevronRight width={14} height={14} />}
        >
          <NavigationBarHeader>Header</NavigationBarHeader>
          <NavigationBarItem>Content</NavigationBarItem>
          <NavigationBarItem>Content</NavigationBarItem>
          <NavigationBarItem>Content</NavigationBarItem>
          <NavigationBarItem>Content</NavigationBarItem>
          <NavigationBarItem>Content</NavigationBarItem>
          <NavigationBarItem>Content</NavigationBarItem>
          <NavigationBarItem>Content</NavigationBarItem>
        </NavigationBarGroup>
        <NavigationBarGroup
          title="Components 2"
          leadingIcon={<IconChevronRight width={14} height={14} />}
        >
          <NavigationBarHeader>Header</NavigationBarHeader>
          <NavigationBarItem>Content</NavigationBarItem>
          <NavigationBarItem>Content</NavigationBarItem>
          <NavigationBarItem>Content</NavigationBarItem>
          <NavigationBarItem>Content</NavigationBarItem>
          <NavigationBarItem>Content</NavigationBarItem>
          <NavigationBarItem>Content</NavigationBarItem>
          <NavigationBarItem>Content</NavigationBarItem>
        </NavigationBarGroup>
      </NavigationBar>
    );
  },
};
