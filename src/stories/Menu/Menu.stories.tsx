import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Menu from "../../components/Menu/Menu";
import MenuItem from "../../components/MenuItem/MenuItem";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <Menu>
          <MenuItem value="1" title="Item 1">
            Item 1
          </MenuItem>
          <MenuItem value="2" title="Item 2">
            Item 2
          </MenuItem>
          <MenuItem value="3" title="Item 3">
            Item 3
          </MenuItem>
        </Menu>
      </div>
    );
  },
};
