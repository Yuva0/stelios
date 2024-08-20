import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "../../../components/Button/Button";
import Text from "../../../components/Text/Text";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";
import colors from "../../../tokens/colors.json";
import { IconMoodDollar, IconMoodHappy } from "@tabler/icons-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Icons: Story = {
  render: () => {
    return (
        <ThemeProvider>
        
      </ThemeProvider>
    );
  },
};
