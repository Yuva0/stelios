import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Checkbox from "../../../components/Checkbox/Checkbox";
import FormControlLabel from "../../../components/FormControlLabel/FormControlLabel";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";
import colors from "../../../tokens/colors.json";


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

export const Sizes: Story = {
  render: () => {
    return (
      <ThemeProvider>
     
      </ThemeProvider>
    );
  },
};
