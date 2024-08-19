import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Tag from "../../components/Tag/Tag";
import { IconInfoCircle } from "@tabler/icons-react";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import colors_new from "../../tokens/colors_new.json";

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
      <ThemeProvider accent={{
        primary: colors_new.primary.accent,
        secondary: colors_new.secondary.accent,
        danger: colors_new.danger.accent,
        warning: colors_new.warning.accent,
        success: colors_new.success.accent,
        info: colors_new.info.accent
      }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Tag color="info" leadingIcon={<IconInfoCircle />}>
          Extremely large badge
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
        <Tag color="primary">Badge</Tag>
        <Tag color="secondary">Badge</Tag>
      </div>
      </ThemeProvider>
    );
  },
};
