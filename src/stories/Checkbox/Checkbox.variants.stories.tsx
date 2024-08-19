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

export const Variants: Story = {
  render: () => {
    return (
      <ThemeProvider accent={{
        primary: colors_new.primary.accent,
        secondary: colors_new.secondary.accent,
        danger: colors_new.danger.accent,
        warning: colors_new.warning.accent,
        success: colors_new.success.accent,
        info: colors_new.info.accent,
      }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel control={<Checkbox />} label="Info" />
        <FormControlLabel
          control={<Checkbox color="success" />}
          label="Success"
        />
        <FormControlLabel
          control={<Checkbox color="danger" />}
          label="Danger"
        />
        <FormControlLabel
          control={<Checkbox color="warning" />}
          label="Warning"
          size="small"
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Primary"
          size="large"
        />
      </div>
      </ThemeProvider>
    );
  },
};
