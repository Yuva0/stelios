import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ColorPicker from "../../../components/ColorPicker/ColorPicker";

const meta: Meta<typeof ColorPicker> = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      description: "The variant of the color picker",
      control: {
        type: "select",
        options: ["contained", "outlined", "soft"],
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "15rem" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof ColorPicker>;

const Template: Story = {
  render: (args) => {
    return <ColorPicker {...args} />;
  },
};
export const Outlined = {
  ...Template,
  args: {
    variant: "outlined",
  },
};
export const Contained = {
  ...Template,
  args: {
    variant: "contained",
  },
};
export const Soft = {
  ...Template,
  args: {
    variant: "soft",
  },
};

export const Playground: Story = {
  render: (args) => {
    return <ColorPicker {...args} />;
  },
  args: {
    "data-testid-popup":"color-picker-popup",
  }
};
