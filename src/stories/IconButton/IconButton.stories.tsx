import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

import IconButton from "../../components/IconButton/IconButton";
import { IconPackage } from "@tabler/icons-react";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: (args) => {
    return <IconButton {...args} icon={<IconPackage />} />;
  },
  args: {},
};
