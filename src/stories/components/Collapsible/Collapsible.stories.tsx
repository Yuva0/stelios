import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Collapsible from "../../../components/Collapsible/Collapsible";
import Text from "../../../components/Text/Text";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      description: "The variant of the color picker",
      control: {
        type: "select",
        options: ["contained", "outlined", "soft"],
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: "20rem" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Collapsible>;

const Template: Story = {
  render: (args) => {
    return (
      <Collapsible {...args} title="Collapsible Title">
        <Text disableColor size="small" style={{padding: "1rem"}}>Vercel is a cloud platform that enables developers to build, deploy, and
        scale web applications effortlessly. It is optimized for front-end
        frameworks like Next.js and offers automatic deployment from Git
        repositories, serverless functions, and a global content delivery
        network (CDN) for fast performance. Vercel simplifies workflows with
        features like continuous integration, previews for every pull request,
        and automatic scaling.</Text>
      </Collapsible>
    );
  },
};

export const Contained = {
  ...Template,
  args: {
    variant: "contained",
    width: "20rem",
  },
};

export const Outlined = {
  ...Template,
  args: {
    variant: "outlined",
    width: "20rem",
  },
};

export const Soft = {
  ...Template,
  args: {
    variant: "soft",
    width: "20rem",
  },
};

export const Transparent = {
  ...Template,
  args: {
    variant: "transparent",
    width: "20rem",
  },
};
