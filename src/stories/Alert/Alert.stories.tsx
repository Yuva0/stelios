import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Alert from "../../components/Alert/Alert";
import { IconArrowBackUp, IconBulb } from "@tabler/icons-react";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
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
        <ThemeProvider appearance="dark">
          <Alert
            color="warning"
            leadingIcon={<IconArrowBackUp />}
            title="Title"
            titleIcon={<IconBulb />}
            description="Big Big Very Big Description"
          />
        </ThemeProvider>
      </div>
    );
  },
};
