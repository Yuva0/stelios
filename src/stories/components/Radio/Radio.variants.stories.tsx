import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Radio from "../../../components/Radio/Radio";
import FormControlLabel from "../../../components/FormControlLabel/FormControlLabel";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";
import colors from "../../../tokens/colors.json";

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

export const Variants: Story = {
  render: () => {
    return (
      <ThemeProvider
      >
      </ThemeProvider>
    );
  },
};
