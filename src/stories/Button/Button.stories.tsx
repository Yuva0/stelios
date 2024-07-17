import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

import Button from "../../components/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {},
  argTypes: {
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => {
    return <Button {...args}>{args.children}</Button>;
  },
  args: {
    children: "Button",
  },
};
