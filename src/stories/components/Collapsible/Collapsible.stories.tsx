import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Collapsible from '../../../components/Collapsible/Collapsible';
import Text from '../../../components/Text/Text';

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      description: "The variant of the color picker",
      control: {
        type: "select",
        options: ["contained", "outlined", "soft"],
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "15rem" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Collapsible>;

const Template: Story = {
  render: (args) => {
    return <Collapsible {...args} title="Collapsible"><Text disableColor>Text variant</Text></Collapsible>;
  },
};

export const Contained = {
  ...Template,
  args: {
    variant: "contained",
  },
};

export const Outlined = {
  ...Template,
  args: {
    variant: "outlined",
  },
};