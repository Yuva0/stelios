import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Slider from "../../../components/Slider/Slider";

const SliderStoryMeta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  }
};
export default SliderStoryMeta;
type SliderStory = StoryObj<typeof Slider>;

export const Default: SliderStory = {
  render: (args) => <Slider {...args}/>
};