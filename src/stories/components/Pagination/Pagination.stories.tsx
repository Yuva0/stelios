import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Pagination from "../../../components/Pagination/Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};
export default meta;

const Template: StoryObj<typeof Pagination> = {
  render: (args) => {
    return <Pagination {...args}/>;
  },
};

export const Default = Template
