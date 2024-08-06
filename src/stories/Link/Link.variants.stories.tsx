import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Link from "../../components/Link/Link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
export const Variants: StoryObj<typeof Link> = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Link href="https://www.google.com" variant="default" size="small">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="hover" size="small">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="underline" size="small">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="default">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="hover">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="underline">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="default" size="large">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="hover" size="large">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="underline" size="large">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="default" color="primary" size="small">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="hover" color="primary" size="small">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="underline" color="primary" size="small">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="default" color="primary">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="hover" color="primary">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="underline" color="primary">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="default" color="primary" size="large">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="hover" color="primary" size="large">
          Click me
        </Link>
        <Link href="https://www.google.com" variant="underline" color="primary" size="large">
          Click me
        </Link>
      </div>
    );
  },
};
