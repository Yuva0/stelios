import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import React from "react";
import Text from "../../../components/Text/Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6", "div", "paragraph", "label", "span"],
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
    fontSize: {
      control: {
        type: "text",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Text>;

const Template: Story = {
  render: (args) => {
    return (
      <Text {...args}>
        {args.children}
      </Text>
    );
  },
};

export const H1 = {
  ...Template,
  args: {
    variant: "h1",
    children: "H1 Child Component",
  },
}
export const H2 = {
  ...Template,
  args: {
    variant: "h2",
    children: "H2 Child Component",
  },
}
export const H3 = {
  ...Template,
  args: {
    variant: "h3",
    children: "H3 Child Component",
  },
}
export const H4 = {
  ...Template,
  args: {
    variant: "h4",
    children: "H4 Child Component",
  },
}
export const H5 = {
  ...Template,
  args: {
    variant: "h5",
    children: "H5 Child Component",
  },
}
export const H6 = {
  ...Template,
  args: {
    variant: "h6",
    children: "H6 Child Component",
  },
}
export const Div = {
  ...Template,
  args: {
    variant: "div",
    children: "Div Child Component",
  },
}
export const Paragraph = {
  ...Template,
  args: {
    variant: "paragraph",
    children: "Paragraph Child Component",
  },
}
export const Label = {
  ...Template,
  args: {
    variant: "label",
    children: "Label Child Component",
  },
}
export const Span = {
  ...Template,
  args: {
    variant: "span",
    children: "Span Child Component",
  },
}

export const Playground = {
  ...Template,
  args: {
    variant: "h1",
    children: "Playground Child Component",
  }
};