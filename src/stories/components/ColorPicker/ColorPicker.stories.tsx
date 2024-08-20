import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ColorPicker from "../../../components/ColorPicker/ColorPicker";
import Button from "../../../components/Button/Button";

const meta: Meta<typeof ColorPicker> = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  parameters: {},
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  render: (args) => {
    return <>
    <ColorPicker />
    <Button>Click Me</Button>
  </>;
  },
};
