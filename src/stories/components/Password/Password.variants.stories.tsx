import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Password from "../../../components/Password/Password";

const meta: Meta<typeof Password> = {
  title: "Components/Password",
  component: Password,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};
export default meta;

export const Variants: StoryObj<typeof Password> = {
  render: () => {
    return <Password />;
  },
};
