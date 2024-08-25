import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ComponentHighlight from "../../../components/ComponentHighlight/ComponentHighlight";
import Button from "../../../components/Button/Button";

const COMPONENT = (
  <Button variant="contained"> This is a Button</Button> 
)

const meta: Meta<typeof ComponentHighlight> = {
  title: "Components/ComponentHighlight",
  component: ComponentHighlight,
  parameters: {
    layout: "centered",
  },
  argTypes: {
  },
};
export default meta;

type Story = StoryObj<typeof ComponentHighlight>;
const Template: Story = {
  render: (args) => {
    return (
        <ComponentHighlight {...args}>
          {args.children}
        </ComponentHighlight>
    );
  }
};

export const Default = {
  ...Template,
  args: {
    children: COMPONENT,
    width: "fit-content",
  }
}