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
      <ThemeProvider appearance="dark">
        <div style={{backgroundColor:"black", height:"100vh", paddingLeft:"10rem", display:"flex", gap:"1rem", flexDirection:'column'}} >
        <Loader width="10rem" height="2rem" startTime={0}/>
        <Loader width="10rem" height="2rem" startTime={0.123}/>
        <Loader width="10rem" height="2rem" startTime={0.6}/>
        <Loader width="10rem" height="2rem" startTime={0.7}/>
        <Loader width="10rem" height="2rem" startTime={0.343}/>
        </div>
      </ThemeProvider>
    );
  },
};
