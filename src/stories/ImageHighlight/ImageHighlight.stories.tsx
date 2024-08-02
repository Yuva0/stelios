import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import ImageHighlight from "../../components/ImageHighlight/ImageHighlight";

const meta: Meta<typeof ImageHighlight> = {
  title: "Components/ImageHighlight",
  component: ImageHighlight,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ImageHighlight>;

export const Default: Story = {
  render: () => {
    return (
      // <div style={{ height: "100vh", width: "100%", background: "black" }}>
      <ThemeProvider appearance="dark">
        <ImageHighlight
          imgAlt="dog"
          imgSrc="https://cdn.pixabay.com/photo/2016/10/10/14/13/dog-1728494_1280.png"
        />
      </ThemeProvider>
      // </div>
    );
  },
};
