import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "../../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Breadcrumbs size="large" delimiter="/" color="primary">
          <BreadcrumbsItem title="Guides" />
          <BreadcrumbsItem
            title="Function Components"
            link="/guides/function-components"
          />
        </Breadcrumbs>
        <Breadcrumbs size="medium" delimiter="/" color="primary">
          <BreadcrumbsItem title="Guides" />
          <BreadcrumbsItem
            title="Function Components"
            link="/guides/function-components"
          />
        </Breadcrumbs>
        <Breadcrumbs size="small" delimiter="/" color="primary">
          <BreadcrumbsItem title="Guides" />
          <BreadcrumbsItem
            title="Function Components"
            link="/guides/function-components"
          />
        </Breadcrumbs>
      </>
    );
  },
};
