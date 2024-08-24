import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../../../components/Checkbox/Checkbox";
import FormControlLabel from "../../../components/FormControlLabel/FormControlLabel";

const CheckboxStoryMeta: Meta<typeof Checkbox> ={
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    color: {
      control: "color",
    },
  },
};
export default CheckboxStoryMeta;

type CheckboxStory = StoryObj<typeof Checkbox>;
const Template: CheckboxStory = {
  render: (args) => <FormControlLabel control={<Checkbox/>} {...args}/>,
};
export const Large = {
...Template,
  args: {
  size: "large",
  label: "Large Checkbox",
}};

export const Medium = {
...Template,
  args: {
  size: "medium",
  label: "Medium Checkbox",
}};

export const Small = {
...Template,
  args: {
  size: "small",
  label: "Small Checkbox",
}};

export const Playground = {
...Template,
  args: {
  size: "medium",
  label: "Checkbox",
}};
