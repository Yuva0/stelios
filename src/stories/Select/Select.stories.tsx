import type { Meta, StoryObj } from "@storybook/react";
import Select from "../../components/Select/Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <Select label="Select" />
      </div>
    );
  },
};
