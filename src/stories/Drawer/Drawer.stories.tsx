import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Drawer from "../../components/Drawer/Drawer";
import IconButton from "../../components/IconButton/IconButton";
import { Icon123 } from "@tabler/icons-react";
import Text from "../../components/Text/Text";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <ThemeProvider appearance="dark">
        <IconButton
          icon={<Icon123 />}
          onClick={() => {
            setOpen(true);
          }}
        />
        <Drawer
          open={open}
          size="small"
          position="left"
          title="Settings"
          onClose={() => {
            setOpen(false);
          }}
        >
          <Text variant="paragraph">Drawer</Text>
        </Drawer>
      </ThemeProvider>
    );
  },
};
