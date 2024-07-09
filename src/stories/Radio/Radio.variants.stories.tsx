import type { Meta, StoryObj } from "@storybook/react";

import Radio from "../../components/Radio/Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Variants: Story = {
  render: () => {
    return (
      <div>
        <Radio />
      </div>
    );
  },
};
