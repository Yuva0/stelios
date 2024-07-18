import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Header from "../../components/Header/Header";
import HeaderGroup from "../../components/Header/HeaderGroup/HeaderGroup";
import HeaderItem from "../../components/Header/HeaderItem/HeaderItem";
import Link from "../../components/Link/Link";
import Button from "../../components/Button/Button";
import IconButton from "../../components/IconButton/IconButton";
import { IconSettings } from "@tabler/icons-react";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: (args) => {
    return (
      <Header>
        <HeaderGroup>
          <HeaderItem>
            <Link href="www.google.com" variant="underline">
              Header
            </Link>
          </HeaderItem>
          <HeaderItem>
            <Button variant="contained" color="danger">
              Header
            </Button>
          </HeaderItem>
          <HeaderItem>
            <IconButton
              icon={<IconSettings />}
              variant="outlined"
              color="primary"
            />
          </HeaderItem>
        </HeaderGroup>
        <HeaderGroup>
          <HeaderItem>Header</HeaderItem>
          <HeaderItem>Header</HeaderItem>
          <HeaderItem>Header</HeaderItem>
        </HeaderGroup>
      </Header>
    );
  },
  args: {},
};
