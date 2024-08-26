import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Menu from "../../../components/Menu/Menu";
import MenuItem from "../../../components/MenuItem/MenuItem";
import IconButton from "../../../components/IconButton/IconButton";
import { Icon123 } from "@tabler/icons-react";
import colorTokens from "../../../tokens/colors.json";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["contained", "outlined", "soft"],
      },
      color: {
        control: {
          type: "color",
        },
      }
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "15rem" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const Template: Story = {
  render: (args) => {
    const [iconRef, setIconRef] = React.useState<HTMLButtonElement | null>(
      null
    );
    const [open, setOpen] = React.useState(true);

    const _openMenuClick = () => {
      setOpen(!open);
    }

    return (
      <div>
        <IconButton color={args.color} icon={<Icon123 />} variant={args.variant} ref={setIconRef} onClick={_openMenuClick}/>
        <Menu open={open}  popperStyles={{
          placement: "bottom"
        }} {...args} anchorElement={iconRef}>
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

export const Contained = {
  ...Template,
  args: {
    variant: "contained"
  }
}
export const Outlined = {
  ...Template,
  args: {
    variant: "outlined"
  }
}
export const Soft = {
  ...Template,
  args: {
    variant: "soft"
  }
}

export const Playground = {
  ...Template,
  args: {
    color: colorTokens.default.primary.main
  }
}