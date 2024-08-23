import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconAwardFilled } from "@tabler/icons-react";
import Avatar from "../../../components/Avatar/Avatar";
import colors_storybook from "../../storybook-tokens/colors.json";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";

const IMG_SRC = `https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg`;

const AvatarStoryMeta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};
export default AvatarStoryMeta;

type AvatarStory = StoryObj<typeof Avatar>;
const AvatarTemplate: AvatarStory = {
  render: (args) => <Avatar {...args} />,
};

export const AvatarImage = {
  ...AvatarTemplate,
  args: { 
    type: "image", 
    src: IMG_SRC, 
    alt: "profile picture" 
  },
};
export const AvatarInitials = {
  ...AvatarTemplate,
  args: { 
    type: "initials", 
    initials: "JD"
  },
};