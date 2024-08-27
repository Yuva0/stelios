import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "../../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;
const BreadcrumbsTemplate: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbsItem title="Guides" />
      <BreadcrumbsItem
        title="Function Components"
        link="/guides/function-components"
      />
    </Breadcrumbs>
  ),
};

// Variants
export const Contained = {
  ...BreadcrumbsTemplate,
  args: {
    variant: "contained",
  },
};
export const Outlined = {
  ...BreadcrumbsTemplate,
  args: {
    variant: "outlined",
  },
};
export const Soft = {
  ...BreadcrumbsTemplate,
  args: {
    variant: "soft",
  },
};
export const Text = {
  ...BreadcrumbsTemplate,
  args: {
    variant: "text",
  },
};

// Sizes
export const Large = {
  ...BreadcrumbsTemplate,
  args: {
    size: "large",
  },
};
export const Medium = {
  ...BreadcrumbsTemplate,
  args: {
    size: "medium",
  },
};
export const Small = {
  ...BreadcrumbsTemplate,
  args: {
    size: "small",
  },
};

export const Playground = {
  ...BreadcrumbsTemplate
}
