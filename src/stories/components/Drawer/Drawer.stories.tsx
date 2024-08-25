import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Drawer from "../../../components/Drawer/Drawer";
import IconButton from "../../../components/IconButton/IconButton";
import { Icon123 } from "@tabler/icons-react";
import Text from "../../../components/Text/Text";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ minHeight: "40rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Drawer>;

const Template: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <IconButton
          icon={<Icon123 />}
          onClick={() => {
            setOpen(true);
          }}
        />
        <Drawer
          open={open}
          size="small"
          title="Settings"
          onClose={() => {
            setOpen(false);
          }}
          {...args}
        >
          <Text variant="paragraph">Drawer</Text>
        </Drawer>
      </>
    );
  },
};
export const Left = {
  ...Template,
  args: {
    position: "left",
  }
}
export const Right = {
  ...Template,
  args: {
    position: "right",
  }
}

export const Small = {
  ...Template,
  args: {
    size: "small",
  }
}
export const Medium = {
  ...Template,
  args: {
    size: "medium",
  }
}
export const Large = {
  ...Template,
  args: {
    size: "large",
  }
}

export const Weak = {
  ...Template,
  args: {
    backdropStrength: "weak",
  }
}
export const Normal = {
  ...Template,
  args: {
    backdropStrength: "normal",
  }
}
export const Strong = {
  ...Template,
  args: {
    backdropStrength: "strong",
  }
}
export const Playground = {
  ...Template,
}