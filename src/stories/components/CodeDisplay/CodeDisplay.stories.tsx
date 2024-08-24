import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CodeDisplay from "../../../components/CodeDisplay/CodeDisplay";
import Text from "../../../components/Text/Text";

const TEXT_CONTENT = `<Button variant='contained'> Contained </Button>
<Button variant="contained" disabled> Disabled </Button>
<Button variant="contained" href="#contained-buttons"> Link </Button>`;
const JSX = "JSX";

const meta: Meta<typeof CodeDisplay> = {
  title: "Components/CodeDisplay",
  component: CodeDisplay,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CodeDisplay>;

const Template: Story = {
  render: (args) => {
    return <CodeDisplay {...args} />;
  },
};

export const WithTitle = {
  ...Template,
  args: {
    title: "Button with 2 variations",
    text: TEXT_CONTENT,
    language: JSX,
  },
};
export const WithoutTitle = {
  ...Template,
  args: {
    text: TEXT_CONTENT,
    language: JSX
  }
}
