import type { Meta, StoryObj } from "@storybook/react";

import Tag from "../../components/Tag/Tag";
import { IconInfoCircle } from "@tabler/icons-react";

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

export const Variants: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Tag color="info" leadingIcon={<IconInfoCircle />}>
          Badge
        </Tag>
        <Tag
          color="success"
          leadingIcon={<IconInfoCircle />}
          trailingIcon={<IconInfoCircle />}
        >
          Badge
        </Tag>
        <Tag color="success">Badge</Tag>
        <Tag color="danger">Badge</Tag>
        <Tag color="warning">Badge</Tag>
        <Tag color="tertiary">Badge</Tag>
        <Tag color="primary">Badge</Tag>
        <Tag color="secondary">Badge</Tag>
      </div>
    );
  },
};
