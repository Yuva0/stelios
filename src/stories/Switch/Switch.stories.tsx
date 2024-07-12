import type { Meta, StoryObj } from "@storybook/react";

import Switch from "../../components/Switch/Switch";
import FormControlLabel from "../../components/FormControlLabel/FormControlLabel";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Switch>;
export const Default: Story = {
  render: () => {
    return (
      <div>
        <FormControlLabel control={<Switch />} label="Switch Label" />
      </div>
    );
  },
};
