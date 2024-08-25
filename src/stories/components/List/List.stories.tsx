import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import List from "../../../components/List/List";
import ListItem from "../../../components/List/ListItem/ListItem";

const ListMeta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};
export default ListMeta;

type Story = StoryObj<typeof List>;

const Template: Story = {
  render: (args) => {
    return (
      <List {...args}>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 1</ListItem>
      </List>
    );
  },
};

// Variants
export const Ordered = {
  ...Template,
  args: {
    title: "Ordered List",
    variant: "ordered",
  },
};
export const Unordered = {
  ...Template,
  args: {
    title: "Unordered List",
    variant: "unordered",
  },
};
export const None = {
  ...Template,
  args: {
    title: "No List but still a List",
    variant: "none",
  },
};

// Sizes
export const Small = {
  ...Template,
  args: {
    title: "Small List",
    size: "small",
  },
};
export const Medium = {
  ...Template,
  args: {
    title: "Medium List",
    size: "medium",
  },
};
export const Large = {
  ...Template,
  args: {
    title: "Large List",
    size: "large",
  },
};

// Playground
export const Playground = {
  ...Template,
  args: {
    title: "Playground List",
    size: "medium",
    variant: "unordered",
  }
};