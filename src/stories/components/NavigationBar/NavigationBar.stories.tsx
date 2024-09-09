import React from "react";
import { Meta, StoryObj } from "@storybook/react";
// import { IconChevronRight } from "@tabler/icons-react";

import NavigationBar from "../../../components/NavigationBar/NavigationBar";
import NavigationBarItem from "../../../components/NavigationBar/NavigationBarItem/NavigationBarItem";
import NavigationBarHeader from "../../../components/NavigationBar/NavigationBarHeader/NavigationBarHeader";
import NavigationBarGroup from "../../../components/NavigationBar/NavigationBarGroup/NavigationBarGroup";
import NavigationBarGroupItem from "../../../components/NavigationBar/NavigationBarGroupItem/NavigationBarGroupItem";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";

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
const Template: Story = {
  render: () => {
    return (
      <ThemeProvider accents={{ primary: "red" }}>
        <NavigationBar color="primary" onChange={(value) => console.log(value)}>
          <NavigationBarGroup title="Group 1">
            <NavigationBarHeader>Header 1</NavigationBarHeader>
            <NavigationBarGroupItem value="1">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarGroupItem value="2">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarGroupItem value="3">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarGroupItem value="4">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarGroupItem value="5">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarHeader>Header 2</NavigationBarHeader>
            <NavigationBarGroupItem value="6">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarGroupItem value="7">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarGroupItem value="8">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarGroupItem value="9">
              Group Items
            </NavigationBarGroupItem>
          </NavigationBarGroup>
          <NavigationBarGroup title="Group 2">
            <NavigationBarHeader>Header 3</NavigationBarHeader>
            <NavigationBarGroupItem value="13">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarGroupItem value="14">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarGroupItem value="15">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarGroupItem value="16">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarGroupItem value="17">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarGroupItem value="18">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarGroupItem value="19">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarGroupItem value="20">
              Group Items
            </NavigationBarGroupItem>
            <NavigationBarGroupItem value="21">
              Group Items
            </NavigationBarGroupItem>
          </NavigationBarGroup>
          <NavigationBarItem selected value="22">
            Title Item
          </NavigationBarItem>
          <NavigationBarItem value="23">Title Item</NavigationBarItem>
          <NavigationBarItem value="22">Title Item</NavigationBarItem>
        </NavigationBar>
      </ThemeProvider>
    );
  },
};

export const Default = {
  ...Template,
};
