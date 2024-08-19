import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconX } from "@tabler/icons-react";

import NotificationDialog from "../../components/NotificationDialog/NotificationDialog";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import Text from "../../components/Text/Text";
import colors_new from "../../tokens/colors_new.json";
import Button from "../../components/Button/Button";

const meta: Meta<typeof NotificationDialog> = {
  title: "Components/NotificationDialog",
  component: NotificationDialog,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotificationDialog>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(true);

    return (
      <ThemeProvider
        accent={{
          primary: colors_new.primary.accent,
          secondary: colors_new.secondary.accent,
          danger: colors_new.danger.accent,
          warning: colors_new.warning.accent,
          success: colors_new.success.accent,
          info: colors_new.info.accent,
        }}
      >
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Set Notification Dialog
        </Button>
        <NotificationDialog open={open} color="primary">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Text variant="h1">Extremely Long Text</Text>
            <Button
              color="info"
              onClick={() => {
                setOpen(false);
              }}
            >
              Close Notification Dialog
            </Button>
          </div>
        </NotificationDialog>
      </ThemeProvider>
    );
  },
  args: {
    children: "Notification Dialog",
  },
};
