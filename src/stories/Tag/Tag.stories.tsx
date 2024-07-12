import type { Meta, StoryObj } from "@storybook/react";
import Tag from "../../components/Tag/Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <Tag>Tag Label</Tag>
      </div>
    );
  },
};
