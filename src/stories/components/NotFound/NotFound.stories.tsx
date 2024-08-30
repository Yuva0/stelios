import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { generateRadixColors } from "../../helpers/colors/generateRadixColors";

import NotFound from "../../../components/NotFound/NotFound";

const meta: Meta<typeof NotFound> = {
  title: "Components/NotFound",
  component: NotFound,
  parameters: {
    layout: "centered"
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof NotFound>;

const Template: Story = {
  render: (args) => {
    return (
        <NotFound  width="200px" height="200px" {...args}/>
    );
  },
};
export const Cone = {
  ...Template,
  args: {
    name: "cone",
    
  }
}
export const File_404 = {
  ...Template,
  args: {
    name: "File_Error_404",
  }
}