import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Alert from "../../components/Alert/Alert";
import { IconArrowBackUp } from "@tabler/icons-react";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import colors_new from "../../tokens/colors_new.json";
// import { AlertProps } from "../../components/Alert/Alert.types";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => {
    return (
      <div style={{ height: "100vh", width: "100%", background: "black" }}>
        <ThemeProvider
          appearance="dark"
          accent={{
            primary: colors_new.primary.accent,
            secondary: colors_new.secondary.accent,
            danger: colors_new.danger.accent,
            warning: colors_new.warning.accent,
            success: colors_new.success.accent,
            info: colors_new.info.accent,
          }}
        >
          <Alert
            color="warning"
            leadingIcon={<IconArrowBackUp />}
            title="Title"
            width="20rem"
            // titleIcon={<IconBulb />}
            description="Big Big Very Big Description"
          />
        </ThemeProvider>
      </div>
    );
  },
};
