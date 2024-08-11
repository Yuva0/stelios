import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ComponentHighlight from "../../components/ComponentHighlight/ComponentHighlight";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";

const meta: Meta<typeof ComponentHighlight> = {
  title: "Components/ComponentHighlight",
  component: ComponentHighlight,
  parameters: {},
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ComponentHighlight>;

export const Default: Story = {
  render: (args) => {
    return (
      <ThemeProvider>
        <ComponentHighlight>
          {args.children}
        </ComponentHighlight>
      </ThemeProvider>
    );
  },
  args: {
    children: "ComponentHighlight",
  },
};
