import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Switch from "../../../components/Switch/Switch";
import FormControlLabel from "../../../components/FormControlLabel/FormControlLabel";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Switch>;
const Template: Story = {
  render: (args) => {
    return <FormControlLabel control={<Switch />} label="Switch Label" {...args}/>;
  },
};

export const Small = {
  ...Template,
  args: {
    size: "small",
  }
}
export const Medium = {
  ...Template,
  args: {
    size: "medium",
  }
}
export const Large = {
  ...Template,
  args: {
    size: "large",
  }
}

export const Playground = Template;