import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import NumberInput from "../../../components/NumberInput/NumberInput";

const meta: Meta<typeof NumberInput> = {
  title: "Components/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};
export default meta;

const Template: StoryObj<typeof NumberInput> = {
  render: (args) => {
    return <NumberInput label="Number Input" {...args}/>;
  },
};

export const Contained = {
  ...Template,
  args: {
    variant: "contained",
  },
}
export const Outlined = {
  ...Template,
  args: {
    variant: "outlined",
  },
}
export const Soft = {
  ...Template,
  args: {
    variant: "soft",
  },
}

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