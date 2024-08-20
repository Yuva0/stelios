import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Checkbox from "../../../components/Checkbox/Checkbox";
import FormControlLabel from "../../../components/FormControlLabel/FormControlLabel";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <FormControlLabel control={<Checkbox />} label="Checkbox Label" />
      </div>
    );
  },
};
