import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "../../../components/Avatar/Avatar";

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

// Variants
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

// Sizes
export const Small = {
  ...AvatarTemplate,
  args: { size: "small", src: IMG_SRC, alt: "profile picture" },
};
export const Medium = {
  ...AvatarTemplate,
  args: { size: "medium", src: IMG_SRC, alt: "profile picture" },
};
export const Large = {
  ...AvatarTemplate,
  args: { size: "large", src: IMG_SRC, alt: "profile picture" },
};
export const ExtraLarge = {
  ...AvatarTemplate,
  args: { size: "xlarge", src: IMG_SRC, alt: "profile picture" },
};

export const Playground = {
  ...AvatarTemplate,
  args: { 
    src: IMG_SRC, 
    alt: "profile picture",
    size: "medium",
    shape: "rounded",
    variant: "contained",
    type: "image",
  },
}