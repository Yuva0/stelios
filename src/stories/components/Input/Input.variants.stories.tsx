import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import Input from "../../../components/Input/Input";
import { IconArrowDown, IconSearch } from "@tabler/icons-react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Variants: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input
          size="small"
          label="Small"
          placeholder="Placeholder"
          value="Value"
          onChange={(e) => {}}
        />
        <Input size="medium" label="Medium" placeholder="Placeholder" />
        <Input size="large" label="Large" placeholder="Placeholder" />
        <Input
          size="large"
          label="Large"
          placeholder="Placeholder"
          labelPosition="bottom"
        />
        <Input
          size="large"
          label="Large"
          placeholder="Placeholder"
          leadingIcon={<IconSearch />}
        />
        <Input
          size="medium"
          label="Medium"
          placeholder="Placeholder"
          leadingIcon={<IconSearch />}
        />
        <Input
          size="small"
          label="Small"
          placeholder="Placeholder"
          leadingIcon={<IconSearch />}
        />
        <Input
          size="large"
          label="Large"
          placeholder="Placeholder"
          trailingIcon={<IconArrowDown />}
        />
        <Input
          size="medium"
          label="Medium"
          placeholder="Placeholder"
          trailingIcon={<IconArrowDown />}
        />
        <Input
          size="small"
          label="Small"
          placeholder="Placeholder"
          trailingIcon={<IconArrowDown />}
        />
      </div>
    );
  },
};
