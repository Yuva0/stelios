import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Header from "../../components/Header/Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: (args) => {
    return <Header></Header>;
  },
  args: {},
};
