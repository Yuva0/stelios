import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import NotificationDialog from "../../../components/NotificationDialog/NotificationDialog";
import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/Button";
import { Icon24Hours, IconBadge } from "@tabler/icons-react";

const meta: Meta<typeof NotificationDialog> = {
  title: "Components/NotificationDialog",
  component: NotificationDialog,
  parameters: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", minHeight:"20rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NotificationDialog>;

const Template: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);
    const _onClick = () => setOpen(!open);
    return (
      <>
        <Button variant={args.variant} style={{height:"fit-content"}} onClick={_onClick} color={args.color}><Text disableColor>{open?"Close":"Open"} Notification Dialog</Text></Button>
        <NotificationDialog width="20rem" open={open} {...args}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            <Text disableColor size="large">
              Title of the notification
            </Text>
            <Text disableColor variant="paragraph" size="small">
              Details of the notification containing every single nuance needed to
              make you understand.
            </Text>
          </div>
        </NotificationDialog>
      </>
    );
  },
  args: {
    children: "Notification Dialog",
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
export const Soft = {
  ...Template,
  args: {
    variant: "soft",
  },
};

export const LeadingIcon = {
  ...Template,
  args: {
    leadingIcon: <Icon24Hours />,
  }
}
export const TrailingIcon = {
  ...Template,
  args: {
    trailingIcon: <Icon24Hours />,
  }
}

export const Playground = Template;
