import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Link from "../../../components/Link/Link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;

export const Default: StoryObj<typeof Link> = {
  render: () => {
    return <Link href="https://www.google.com">Click me</Link>;
  },
};
