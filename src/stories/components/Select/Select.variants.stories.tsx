import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Select from "../../../components/Select/Select";
import MenuItem from "../../../components/MenuItem/MenuItem";
import { IconArrowUpCircle } from "@tabler/icons-react";

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

export const Variants: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Select label="Select">
          <MenuItem
            value="1"
            title="Test 1"
            leadingIcon={<IconArrowUpCircle />}
            trailingIcon={<IconArrowUpCircle />}
          />
          <MenuItem value="2" title="Test 2"></MenuItem>
          <MenuItem value="3" title="Test 3"></MenuItem>
        </Select>
        <Select label="Select">
          <MenuItem value="1" title="Test 1"></MenuItem>
          <MenuItem value="2" title="Test 2"></MenuItem>
          <MenuItem value="3" title="Test 3"></MenuItem>
        </Select>
        <Select label="Select">
          <MenuItem value="1" title="Test 1"></MenuItem>
          <MenuItem value="2" title="Test 2"></MenuItem>
          <MenuItem value="3" title="Test 3"></MenuItem>
        </Select>
      </div>
    );
  },
};
