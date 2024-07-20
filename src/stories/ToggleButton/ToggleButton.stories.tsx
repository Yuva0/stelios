import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { generateRadixColors } from "../../helpers/colors/generateRadixColors";

import ToggleButton from "../../components/ToggleButton/ToggleButton";
import ToggleButtonGroup from "../../components/ToggleButton/ToggleButtonGroup/ToggleButtonGroup";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";

const meta: Meta<typeof ToggleButton> = {
  title: "Components/ToggleButton",
  component: ToggleButton,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  render: (args) => {
    return (
      <ThemeProvider>
        <ToggleButtonGroup color="primary" {...args}>
          <ToggleButton>Dark</ToggleButton>
          <ToggleButton selected>Light</ToggleButton>
        </ToggleButtonGroup>
      </ThemeProvider>
    );
  },
  args: {
    children: "ToggleButton",
  },
};
