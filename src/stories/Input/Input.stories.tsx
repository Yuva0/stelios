import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import colors from "../../tokens/colors.json";
// import { fn } from "@storybook/test";

import Input from "../../components/Input/Input";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {},
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{background: "#212121"}}>
      <ThemeProvider appearance="dark">
        <Input label="Input Label" {...args} />
      </ThemeProvider>
      </div>
    );
  },
};
