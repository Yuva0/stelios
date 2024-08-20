import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { generateRadixColors } from "../../helpers/colors/generateRadixColors";

import Capsule from "../../../components/Capsule/Capsule";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";
import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/Button";

const meta: Meta<typeof Capsule> = {
  title: "Components/Capsule",
  component: Capsule,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Capsule>;

export const Default: Story = {
  render: () => {
    return (
      <ThemeProvider appearance="dark">
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Capsule
            image="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
            title="Test1"
            description="Description1"
          />
        </div>
      </ThemeProvider>
    );
  },
};
