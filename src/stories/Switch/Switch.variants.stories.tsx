import type { Meta, StoryObj } from "@storybook/react";

import Switch from "../../components/Switch/Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Variants: Story = {
  render: () => {
    return (
      <div>
        <Switch />
      </div>
    );
  },
};
