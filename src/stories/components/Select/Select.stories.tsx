import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Select from "../../../components/Select/Select";
import MenuItem from "../../../components/MenuItem/MenuItem";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <Select label="Select">
          <MenuItem value="1" title="Test 1"></MenuItem>
          <MenuItem value="2" title="Test 2"></MenuItem>
          <MenuItem value="3" title="Test 3"></MenuItem>
        </Select>
      </div>
    );
  },
};
