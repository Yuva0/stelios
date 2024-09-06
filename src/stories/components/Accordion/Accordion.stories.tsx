import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "../../../components/Accordion/Accordion";
import AccordionItem from "../../../components/Accordion/AccordionItem/AccordionItem";
import Text from "../../../components/Text/Text";

const AccordionStoryMeta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      description: "The variant of the accordion.",
      control: {
        type: "select",
        options: ["contained", "outlined", "soft", "outlined-soft"],
      },
    },
    color: {
      description:
        "The color of the accordion. Pair it with a theme provider for a more consistent experience.",
      control: {
        type: "color",
      },
    },
    width: {
      description: "The width of the accordion.",
      control: {
        type: "text",
      },
    },
  },
};
export default AccordionStoryMeta;

type AccordionStory = StoryObj<typeof Accordion>;
const AccordionTemplate: AccordionStory = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem title="React">
        <Text size="small" disableColor>
          React is one of the most influential technologies in modern web
          development. Created by Facebook in 2013, it revolutionized the way
          developers think about building user interfaces. React introduced a
          component-based architecture that allows developers to create
          reusable, modular pieces of code, which can be combined to form
          complex user interfaces. This approach not only enhances code
          maintainability but also improves development efficiency, as
          components can be independently developed and tested.
        </Text>
      </AccordionItem>
      <AccordionItem title="Vue">
        <Text size="small" disableColor>
          Vue.js is a progressive JavaScript framework for building user
          interfaces. It is designed from the ground up to be incrementally
          adoptable, and can easily scale between a library and a framework
          depending on different use cases. Vue is also perfectly capable of
          powering sophisticated Single-Page Applications when used in
          combination with modern tooling and supporting libraries.
        </Text>
      </AccordionItem>
      <AccordionItem title="Angular">
        <Text size="small" disableColor>
          Angular is a platform and framework for building single-page client
          applications using HTML and TypeScript. Angular is written in
          TypeScript. It implements core and optional functionality as a set of
          TypeScript libraries that you import into your apps.
        </Text>
      </AccordionItem>
    </Accordion>
  ),
};

// Variants
export const Contained = {
  ...AccordionTemplate,
  args: {
    variant: "contained",
  },
};
export const Outlined = {
  ...AccordionTemplate,
  args: {
    variant: "outlined",
  },
};
export const Soft = {
  ...AccordionTemplate,
  args: {
    variant: "soft",
  },
};
export const OutlinedSoft = {
  ...AccordionTemplate,
  args: {
    variant: "outlined-soft",
  },
};
export const Transparent = {
  ...AccordionTemplate,
  args: {
    variant: "transparent",
  },
};
export const Playground = {
  ...AccordionTemplate,
};
