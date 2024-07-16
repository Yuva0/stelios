import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Autocomplete from "../../components/Autocomplete/Autocomplete";
import Text from "../../components/Text/Text";

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Variants: Story = {
  render: () => {
    const [inputValue, setInputValue] = React.useState<
      string | string[] | undefined
    >([]);
    const [selectedValue, setSelectedValue] = React.useState<
      string | string[] | undefined
    >();

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "10rem" }}>
        <Autocomplete
          label="Variant1"
          options={[
            { title: "Test1", value: "Test1" },
            { title: "Test2", value: "Test2" },
            { title: "Test3", value: "Test3" },
          ]}
          onInputChange={(event, value) => setInputValue(value)}
          onChange={(event, { title, value }) => setSelectedValue(value)}
        />
        <div>
          <Text variant="paragraph">Input Value: {inputValue}</Text>
          <Text variant="paragraph">Selected Value: {selectedValue}</Text>
        </div>
      </div>
    );
  },
};
