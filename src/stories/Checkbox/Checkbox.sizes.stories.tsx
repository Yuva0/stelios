import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Checkbox from "../../components/Checkbox/Checkbox";
import FormControlLabel from "../../components/FormControlLabel/FormControlLabel";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import colors_new from "../../tokens/colors_new.json";


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
      <ThemeProvider accent={{
        primary: colors_new.primary.accent,
      }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel control={<Checkbox size="small"/>} label="Small" />
        <FormControlLabel control={<Checkbox size="medium" />} label="Medium" />
        <FormControlLabel control={<Checkbox size="large" />} label="Large" />
      </div>
      </ThemeProvider>
    );
  },
};
