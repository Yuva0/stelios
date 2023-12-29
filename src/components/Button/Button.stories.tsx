import React from 'react';
import { StoryFn } from "@storybook/react";
import Button from "./Button";

const Template: StoryFn<typeof Button> = () => {
  return <Button/>
};

export const Default = Template.bind({});
Default.args = {

}