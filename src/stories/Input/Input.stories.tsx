import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

import Input from "../../components/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {},
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => {
    return <Input label="Input Label" {...args} />;
  },
};
