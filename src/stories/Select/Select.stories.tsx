import type { Meta, StoryObj } from "@storybook/react";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import { IconArrowDown } from "@tabler/icons-react";

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
