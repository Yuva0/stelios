import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CodePreview from "../../../components/CodePreview/CodePreview";
import Button from "../../../components/Button/Button";

const TEXT_CONTENT = `<Button variant="contained"> Contained </Button>
<Button variant="contained" disabled> Disabled </Button>
<Button variant="contained" href="#contained-buttons"> Link </Button>`;


const BUTTON_CODE = (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Button variant="contained">Button</Button>
    <Button variant="outlined">Button</Button>
  </div>
);

const CodePreviewMeta: Meta<typeof CodePreview> = {
  title: "Components/CodePreview",
  component: CodePreview,
  parameters: {},
  argTypes: {},
};
export default CodePreviewMeta;

type Story = StoryObj<typeof CodePreview>;
const CodePreviewTemplate: Story = {
  render: () => {
    return <CodePreview code={BUTTON_CODE} text={TEXT_CONTENT} />;
  },
};
export const Default = {
  ...CodePreviewTemplate,
  args: {},
}