import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Select from "../../../components/Select/Select";
import MenuItem from "../../../components/MenuItem/MenuItem";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ minHeight: "15rem" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Select>;

const Template: Story = {
  render: (args) => {
    return (
      <div>
        <Select label="Select" {...args}>
          <MenuItem value="1" title="Test 1"></MenuItem>
          <MenuItem value="2" title="Test 2"></MenuItem>
          <MenuItem value="3" title="Test 3"></MenuItem>
        </Select>
      </div>
    );
  },
};

export const Contained = {
  ...Template,
  args: {
    variant: "contained"
  }
};
export const Outlined = {
  ...Template,
  args: {
    variant: "outlined"
  }
};
export const Soft = {
  ...Template,
  args: {
    variant: "soft"
  }
};

export const Small = {
  ...Template,
  args: {
    size: "small"
  }
};
export const Medium = {
  ...Template,
  args: {
    size: "medium"
  }
};
export const Large = {
  ...Template,
  args: {
    size: "large"
  }
};

export const Playground = Template;