import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Radio from "../../../components/Radio/Radio";
import FormControlLabel from "../../../components/FormControlLabel/FormControlLabel";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <RadioGroup>
          <FormControlLabel control={<Radio />} label="Radio Label" />
        </RadioGroup>
      </div>
    );
  },
};
