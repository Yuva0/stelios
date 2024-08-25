import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Link from "../../../components/Link/Link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;

const Template: StoryObj<typeof Link> = {
  render: (args) => {
    return <Link href="https://www.google.com" {...args}>Click me</Link>;
  },
};

// Variants
export const Default = {
  ...Template,
  args: {
    variant: "default",
  }
}
export const Underline = {
  ...Template,
  args: {
    variant: "underline",
  }
}
export const Hover = {
  ...Template,
  args: {
    variant: "hover",
  }
}

// Sizes
export const Small = {
  ...Template,
  args: {
    size: "small",
  }
}
export const Medium = {
  ...Template,
  args: {
    size: "medium",
  }
}
export const Large = {
  ...Template,
  args: {
    size: "large",
  }
}

// Playground
export const Playground = {
  ...Template,
  args: {
    variant: "default",
    size: "medium",
    color: "#ff0000",
    preciseColor: "violet",
    tabIndex: 0,
    onClick: (e: React.MouseEvent | React.KeyboardEvent) => {
      console.log("Link clicked");
    }
  }
}