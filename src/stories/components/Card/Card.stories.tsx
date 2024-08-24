import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Card from "../../../components/Card/Card";
import Text from "../../../components/Text/Text";

const CardStoryMeta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      table: {
        disable: true
      },
    },
    header: {
      table: {
        disable: true
      },
    },
    footer: {
      table: {
        disable: true
      },
    },
  },
};
export default CardStoryMeta;

const HEADER_CONTENT = (
  <Text disableColor variant="h5" size="large">
    React-Tutor
  </Text>
);
const BODY_CONTENT = (
  <Text disableColor variant="span">
    React-Tutor is a website designed to teach you about basics of React. It has
    concepts related to React, Hooks, States and many more.
  </Text>
);
const FOOTER_CONTENT = <Text disableColor>Have a good day!</Text>

type CardStory = StoryObj<typeof Card>;
const CardTemplate: CardStory = {
  render: (args) => <Card {...args}>{args.children}</Card>,
};

// Variants
export const Contained = {
  ...CardTemplate,
  args: {
    children: BODY_CONTENT,
    variant: "contained",
    header: HEADER_CONTENT,
    footer: FOOTER_CONTENT,
  },
};
export const Outlined = {
  ...CardTemplate,
  args: {
    children: BODY_CONTENT,
    variant: "outlined",
    header: HEADER_CONTENT,
    footer: FOOTER_CONTENT,
  },
};
export const Soft = {
  ...CardTemplate,
  args: {
    children: BODY_CONTENT,
    variant: "soft",
    header: HEADER_CONTENT,
    footer: FOOTER_CONTENT,
  },
};
export const OutlinedSoft = {
  ...CardTemplate,
  args: {
    children: BODY_CONTENT,
    variant: "outlined-soft",
    header: HEADER_CONTENT,
    footer: FOOTER_CONTENT,
  },
};
export const Neumorph = {
  ...CardTemplate,
  args: {
    children: BODY_CONTENT,
    variant: "neumorph",
    header: HEADER_CONTENT,
    footer: FOOTER_CONTENT,
  },
};

// Playground
export const Playground = {
  ...CardTemplate,
  args: {
    children: BODY_CONTENT,
    header: HEADER_CONTENT,
    footer: FOOTER_CONTENT,
  },
}