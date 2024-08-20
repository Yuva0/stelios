import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import NumberInput from "../../../components/NumberInput/NumberInput";

const meta: Meta<typeof NumberInput> = {
  title: "Components/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};
export default meta;

export const Default: StoryObj<typeof NumberInput> = {
  render: () => {
    return <NumberInput label="Number Input" size="small"/>;
  },
};
