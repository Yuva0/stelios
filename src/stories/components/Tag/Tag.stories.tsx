import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tag from "../../../components/Tag/Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tag>;

const Template: Story = {
  render: (args) => {
    return (
        <Tag {...args}>Tag Label</Tag>
    );
  },
};
export const Small = {
  ...Template,
  args: {
    size: "small",
  },
};
export const Medium = {
  ...Template,
  args: {
    size: "medium",
  },
};
export const Large = {
  ...Template,
  args: {
    size: "large",
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

export const Playground = Template;