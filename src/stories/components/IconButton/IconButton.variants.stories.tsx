import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "../../../components/IconButton/IconButton";
import Text from "../../../components/Text/Text";
import {
  Icon12Hours,
  IconPackage,
  // IconArrowLeft,
  // IconArrowRight,
} from "@tabler/icons-react";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";
import colors from "../../../tokens/colors.json";

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

export const Variants: Story = {
  render: () => {
    return (
      <ThemeProvider
        
      >
      </ThemeProvider>
    );
  },
};
