import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { generateRadixColors } from "../../helpers/colors/generateRadixColors";

import CodeEditor from "../../components/CodeEditor/CodeEditor";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";

const meta: Meta<typeof CodeEditor> = {
  title: "Components/CodeEditor",
  component: CodeEditor,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CodeEditor>;

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
      </div>
    );

    return (
      <ThemeProvider appearance="dark">
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <CodeEditor code={ButtonCode} text={Text} />
        </div>
      </ThemeProvider>
    );
  },
};
