import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "../../../components/IconButton/IconButton";
import Text from "../../../components/Text/Text";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";
import colors from "../../../tokens/colors.json";
import { IconPackage } from "@tabler/icons-react";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Sizes: Story = {
  render: () => {
    return <ThemeProvider></ThemeProvider>;
  },
};
