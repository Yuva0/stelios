import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { generateRadixColors } from "../../helpers/colors/generateRadixColors";

import Loader from "../../../components/Loader/Loader";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  render: (args) => {
    return <Loader startTime={0} {...args}/>;
  },
};
export const Circle: Story = {
  render: (args) => {
    return <Loader startTime={0} {...args}/>;
  },
  args: {
    shape: "circle",
    width: "5rem",
    height: "5rem",
  }
};
export const Square: Story = {
  render: (args) => {
    return <Loader startTime={0} {...args}/>;
  },
  args: {
    shape: "square",
    width: "5rem",
    height: "5rem",
  }
};
export const Rectangle: Story = {
  render: (args) => {
    return <Loader startTime={0} {...args}/>;
  },
  args: {
    shape: "rectangle",
    width: "20rem",
    height: "5rem",
  }
};

export const Playground: Story = {
  render: (args) => {
    return <Loader startTime={0} {...args}/>;
  },
  args: {
    shape: "circle",
    width: "5rem",
    height: "5rem",
  }
};