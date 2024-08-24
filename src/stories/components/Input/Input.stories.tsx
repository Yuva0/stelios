import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "../../../components/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;
const InputTemplate: Story = {
  render: (args) => {
    return <Input label="Input" placeholder="Placeholder" {...args}/>;
  },
};

// Variants
export const Contained: Story = {
  ...InputTemplate,
  args: {
    variant: "contained",
  }
};
export const Outlined: Story = {
  ...InputTemplate,
  args: {
    variant: "outlined",
  }
};
export const Soft: Story = {
  ...InputTemplate,
  args: {
    variant: "soft"
  }
}

// Sizes
export const Small: Story = {
  ...InputTemplate,
  args: {
    size: "small"
  }
};
export const Medium: Story = {
  ...InputTemplate,
  args: {
    size: "medium"
  }
};
export const Large: Story = {
  ...InputTemplate,
  args: {
    size: "large"
  }
};

// Playground
export const Playground: Story = {
  ...InputTemplate,
};