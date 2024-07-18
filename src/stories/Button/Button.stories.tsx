import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { generateRadixColors } from "../../helpers/colors/generateRadixColors";

import Button from "../../components/Button/Button";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import { useTheme } from "react-jss";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {},
  argTypes: {
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => {
    

    return (
      <ThemeProvider>
        <Button {...args}>{args.children}</Button>
      </ThemeProvider>
    );
  },
  args: {
    children: "Button",
  },
};
