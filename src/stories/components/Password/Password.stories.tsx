import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Password from "../../../components/Password/Password";

const meta: Meta<typeof Password> = {
  title: "Components/Password",
  component: Password,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};
export default meta;

export const Template: StoryObj<typeof Password> = {
  render: (args) => {
    return <Password {...args}/>;
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
