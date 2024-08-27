import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Radio from "../../../components/Radio/Radio";
import FormControlLabel from "../../../components/FormControlLabel/FormControlLabel";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Template: Story = {
  render: (args) => {
    return (
        <RadioGroup label="Gender" {...args}>
          <FormControlLabel control={<Radio />} label="Male" />
          <FormControlLabel control={<Radio />} label="Female" />
          <FormControlLabel control={<Radio />} label="Do not specify" />
        </RadioGroup>
    );
  },
};

export const Large = {
  ...Template,
  args: {
    size: "large",
  },
}
export const Medium = {
  ...Template,
  args: {
    size: "medium",
  },
}
export const Small = {
  ...Template,
  args: {
    size: "small",
  },
}

export const Playground = Template