import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { generateRadixColors } from "../../helpers/colors/generateRadixColors";

import CodeDisplay from "../../components/CodeDisplay/CodeDisplay";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";

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
    const Text = `<Button variant="contained">Contained</Button>
<Button variant="contained" disabled>Disabled</Button>
<Button variant="contained" href="#contained-buttons">Link</Button>`;

    const ArrayText = `//JavaScript
const array = [1, 2, 3, 4, 5];`;

    const ButtonCode = (
      <div style={{ display: "flex", gap: "2rem" }}>
        <Button variant="contained" color="primary">
          Button
        </Button>
        <Button variant="outlined" color="primary">
          Button
        </Button>
        <Button variant="text" color="primary">
          Button
        </Button>
      </div>
    );

    return (
      <ThemeProvider appearance="dark">
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <CodeDisplay text={Text} language="jsx" />
        </div>
      </ThemeProvider>
    );
  },
};
