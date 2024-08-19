import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Radio from "../../components/Radio/Radio";
import FormControlLabel from "../../components/FormControlLabel/FormControlLabel";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import colors_new from "../../tokens/colors_new.json";

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
        accent={{
          primary: colors_new.primary.accent,
          secondary: colors_new.secondary.accent,
          danger: colors_new.danger.accent,
          warning: colors_new.warning.accent,
          success: colors_new.success.accent,
          info: colors_new.info.accent,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <RadioGroup label="Radio Group">
            <FormControlLabel control={<Radio color="info" />} label="Info" />
            <FormControlLabel
              control={<Radio color="success" />}
              label="Success"
            />
            <FormControlLabel
              control={<Radio color="danger" />}
              label="Danger"
            />
            <FormControlLabel
              control={<Radio color="warning" />}
              label="Warning"
            />

            <FormControlLabel
              control={<Radio color="primary" />}
              label="Primary"
            />
          </RadioGroup>
          <RadioGroup label="Radio Group" orientation="horizontal">
            <FormControlLabel control={<Radio color="info" />} label="Info" />
            <FormControlLabel
              control={<Radio color="success" />}
              label="Success"
            />
            <FormControlLabel
              control={<Radio color="danger" />}
              label="Danger"
            />
            <FormControlLabel
              control={<Radio color="warning" />}
              label="Warning"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Primary"
            />
          </RadioGroup>
        </div>
      </ThemeProvider>
    );
  },
};
