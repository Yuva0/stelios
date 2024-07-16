import { Meta, StoryObj } from "@storybook/react";
import NumberInput from "../../components/NumberInput/NumberInput";

const meta: Meta<typeof NumberInput> = {
  title: "Components/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
export const Variants: StoryObj<typeof NumberInput> = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <NumberInput label="Number Input" size="small" onChange={(e, value) => {console.log(value)}}/>
        <NumberInput label="Number Input" size="medium" />
        <NumberInput label="Number Input" size="large" />
      </div>
    );
  },
};
