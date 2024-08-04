import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { generateRadixColors } from "../../helpers/colors/generateRadixColors";

import CodeDisplay from "../../components/CodeDisplay/CodeDisplay";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";

const meta: Meta<typeof CodeDisplay> = {
  title: "Components/CodeDisplay",
  component: CodeDisplay,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CodeDisplay>;

export const Default: Story = {
  render: () => {
    const Text = `<Button variant='contained'> Contained </Button>
<Button variant="contained" disabled>Disabled</Button>
<Button variant="contained" href="#contained-buttons">Link</Button>`;

    return (
      <>
        <ThemeProvider appearance="light">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <CodeDisplay text={Text} language="JSX" />
          </div>
        </ThemeProvider>
        <ThemeProvider appearance="dark">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <CodeDisplay text={Text} language="JSX" />
          </div>
        </ThemeProvider>
      </>
    );
  },
};
