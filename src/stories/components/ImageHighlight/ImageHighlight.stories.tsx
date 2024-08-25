import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";
import ImageHighlight from "../../../components/ImageHighlight/ImageHighlight";

const IMG_SRC = `https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg`;
const IMG_ALT = "Profile Picture";

const meta: Meta<typeof ImageHighlight> = {
  title: "Components/ImageHighlight",
  component: ImageHighlight,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ImageHighlight>;

const Template: Story = {
  render: (args) => {
    return (
        <ImageHighlight {...args}
        />
    );
  },
  args: {
    imgAlt: IMG_ALT,
    imgSrc: IMG_SRC,
  }
};

export const Default = {
  ...Template,
}