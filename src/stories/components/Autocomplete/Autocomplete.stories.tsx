import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Autocomplete from "../../../components/Autocomplete/Autocomplete";
// import { AutocompleteProps } from "../../components/Autocomplete/Autocomplete.types";

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "15rem" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Autocomplete>;
const AutocompleteTemplate: Story = {
  render: (args) => {
    return (
      <Autocomplete
        placeholder="Type here..."
        options={[
          { title: "Alpha", value: "alpha" },
          { title: "Beta", value: "beta" },
          { title: "Charlie", value: "charlie" },
          { title: "Delta", value: "delta" },
        ]}
        label="Autocomplete"
        {...args}
      />
    );
  },
};
export const Contained: Story = {
  ...AutocompleteTemplate,
  args: {
    variant: "contained",
  },
};
export const Outlined: Story = {
  ...AutocompleteTemplate,
  args: {
    variant: "outlined",
  },
};
export const Soft: Story = {
  ...AutocompleteTemplate,
  args: {
    variant: "soft",
  },
};
export const Playground: Story = {
  ...AutocompleteTemplate,
  args: {},
};
