import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconAwardFilled } from "@tabler/icons-react";
import Capsule from "../../../components/Capsule/Capsule";
import colors_storybook from "../../storybook-tokens/colors.json";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";

const IMAGE_URL = `https://static.vecteezy.com/system/resources/previews/003/549/556/non_2x/space-galaxy-background-free-vector.jpg`;

const CapsuleStoryMeta: Meta<typeof Capsule> = {
  title: "Components/Capsule",
  component: Capsule,
  parameters: {
    layout: "centered",
  },
  argTypes: {
  },
};
export default CapsuleStoryMeta;

type CapsuleStory = StoryObj<typeof Capsule>;
const CapsuleTemplate: CapsuleStory = {
  render: (args) => <Capsule{...args}/>
};

// Variants
export const Contained = {
  ...CapsuleTemplate,
  args: {
    image: IMAGE_URL,
    imageAlt: "Space",
    variant: "contained",
    title: "No Man's Sky",
    description: "One of the best games ever"
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
    actions: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
  }
};
export const Outlined = {
  ...CapsuleTemplate,
  args: {
    image: IMAGE_URL,
    imageAlt: "Space",
    variant: "outlined",
    title: "No Man's Sky",
    description: "One of the best games ever"
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
    actions: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
  }
};
export const Soft = {
  ...CapsuleTemplate,
  args: {
    image: IMAGE_URL,
    imageAlt: "Space",
    variant: "soft",
    title: "No Man's Sky",
    description: "One of the best games ever"
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
    actions: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
  }
};

export const Playground = {
  ...CapsuleTemplate,
  args: {
    image: IMAGE_URL,
    imageAlt: "Space",
    title: "No Man's Sky",
    description: "One of the best games ever"
  },
};
