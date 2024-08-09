import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { generateRadixColors } from "../../helpers/colors/generateRadixColors";

import Loader from "../../components/Loader/Loader";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "fullscreen"
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  render: (args) => {
    return (
      <ThemeProvider appearance="light">
        <div style={{backgroundColor:"white", height:"100vh", marginLeft:"10rem"}} >
        <Loader shape="circle"/>
        </div>
      </ThemeProvider>
    );
  },
  args: {
  },
};
