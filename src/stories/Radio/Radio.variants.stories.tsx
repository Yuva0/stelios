import type { Meta, StoryObj } from "@storybook/react";

import Radio from "../../components/Radio/Radio";
import FormControlLabel from "../../components/FormControlLabel/FormControlLabel";
import RadioGroup from "../../components/RadioGroup/RadioGroup";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Variants: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* <FormControlLabel control={<Radio />} label="Info" />
        <FormControlLabel control={<Radio color="success" />} label="Success" />
        <FormControlLabel control={<Radio color="danger" />} label="Danger" />
        <FormControlLabel control={<Radio color="warning" />} label="Warning" />
        <FormControlLabel
          control={<Radio color="tertiary" />}
          label="Tertiary"
        />
        <FormControlLabel control={<Radio color="primary" />} label="Primary" /> */}

        <RadioGroup label="Radio Group">
          <FormControlLabel control={<Radio />} label="Info" />
          <FormControlLabel
            control={<Radio color="success" />}
            label="Success"
          />
          <FormControlLabel control={<Radio color="danger" />} label="Danger" />
          <FormControlLabel
            control={<Radio color="warning" />}
            label="Warning"
          />
          <FormControlLabel
            control={<Radio color="tertiary" />}
            label="Tertiary"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Primary"
          />
        </RadioGroup>
        <RadioGroup label="Radio Group" orientation="horizontal">
          <FormControlLabel control={<Radio />} label="Info" />
          <FormControlLabel
            control={<Radio color="success" />}
            label="Success"
          />
          <FormControlLabel control={<Radio color="danger" />} label="Danger" />
          <FormControlLabel
            control={<Radio color="warning" />}
            label="Warning"
          />
          <FormControlLabel
            control={<Radio color="tertiary" />}
            label="Tertiary"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Primary"
          />
        </RadioGroup>
      </div>
    );
  },
};
