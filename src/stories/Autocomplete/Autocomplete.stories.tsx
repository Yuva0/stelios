import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Autocomplete from "../../components/Autocomplete/Autocomplete";
// import { AutocompleteProps } from "../../components/Autocomplete/Autocomplete.types";

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  render: () => {
    return (
      <Autocomplete
        options={[
          { title: "Alpha", value: "alpha" },
          { title: "Beta", value: "beta" },
          { title: "Charlie", value: "charlie" },
          { title: "Delta", value: "delta" },
        ]}
        label="Autocomplete"
      />
    );
  },
};
