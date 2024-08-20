import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { generateRadixColors } from "../../helpers/colors/generateRadixColors";

import NotFound from "../../../components/NotFound/NotFound";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";

const meta: Meta<typeof NotFound> = {
  title: "Components/NotFound",
  component: NotFound,
  parameters: {},
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Default: Story = {
  render: (args) => {
    return (
      <ThemeProvider>
        <NotFound name="cone" width="200px" height="200px"/>
      </ThemeProvider>
    );
  },
};
