import React from "react";
import { Meta, StoryObj } from "@storybook/react";
// import { IconChevronRight } from "@tabler/icons-react";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import NavigationBarItem from "../../components/NavigationBar/NavigationBarItem/NavigationBarItem";
import NavigationBarHeader from "../../components/NavigationBar/NavigationBarHeader/NavigationBarHeader";
import NavigationBarGroup from "../../components/NavigationBar/NavigationBarGroup/NavigationBarGroup";
import NavigationBarGroupItem from "../../components/NavigationBar/NavigationBarGroupItem/NavigationBarGroupItem";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";

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
      <ThemeProvider appearance="light">
        <NavigationBar onChange={(value) => console.log(value)}>
          <NavigationBarGroup title="Components 1">
            {/* <NavigationBarHeader>Header</NavigationBarHeader> */}
            <NavigationBarGroupItem value="1">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="2">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="3">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="4">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="5">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="6">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="7">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="8">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="9">Content</NavigationBarGroupItem>
          </NavigationBarGroup>
          <NavigationBarItem value="10" selected>Content</NavigationBarItem>
          <NavigationBarItem value="11">Content</NavigationBarItem>
          <NavigationBarItem value="12">Content</NavigationBarItem>
          <NavigationBarGroup title="Components 2">
            <NavigationBarHeader>Header</NavigationBarHeader>
            <NavigationBarGroupItem value="13">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="14">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="15">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="16">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="17">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="18">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="19">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="20">Content</NavigationBarGroupItem>
            <NavigationBarGroupItem value="21">Content</NavigationBarGroupItem>
          </NavigationBarGroup>
        </NavigationBar>
      </ThemeProvider>
    );
  },
};
