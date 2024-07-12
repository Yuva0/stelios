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
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </Menu>
      </div>
    );
  },
};
