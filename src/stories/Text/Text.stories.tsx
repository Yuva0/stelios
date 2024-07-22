import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import React from "react";
import Text from "../../components/Text/Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (args) => {
    return (
      <Text variant="h1" {...args}>
        {args.children}
      </Text>
    );
  },
  args: {
    children: "Text Component",
  },
};
