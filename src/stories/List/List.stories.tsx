import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { generateRadixColors } from "../../helpers/colors/generateRadixColors";

import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem/ListItem";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => {
    return (
      <ThemeProvider appearance="light">
        <List title="List">
          <ListItem>Item 1</ListItem>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 1</ListItem>
        </List>

        <List variant="unordered">
          <ListItem>Item 1</ListItem>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 1</ListItem>
        </List>

        <List variant="none">
          <ListItem>Item 1</ListItem>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 1</ListItem>
        </List>
      </ThemeProvider>
    );
  },
};
