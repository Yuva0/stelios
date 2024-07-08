import type { Meta, StoryObj } from "@storybook/react";

import Text from "../../components/Text/Text";

const DUMMY_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Variants: Story = {
  render: () => {
    return (
      <div>
        <Text variant="h5">Heading 1</Text>
        <Text variant="h1" size="large">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h1" size="medium">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h1" size="small">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h5" style={{ marginTop: "2rem" }}>
          Heading 2
        </Text>
        <Text variant="h2" size="large">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h2" size="medium">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h2" size="small">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h5" style={{ marginTop: "2rem" }}>
          Heading 3
        </Text>
        <Text variant="h3" size="large">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h3" size="medium">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h3" size="small">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h5" style={{ marginTop: "2rem" }}>
          Heading 4
        </Text>
        <Text variant="h4" size="large">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h4" size="medium">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h4" size="small">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h5" style={{ marginTop: "2rem" }}>
          Heading 5
        </Text>
        <Text variant="h5" size="large">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h5" size="medium">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h5" size="small">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h5" style={{ marginTop: "2rem" }}>
          Heading 6
        </Text>
        <Text variant="h6" size="large">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h6" size="medium">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h6" size="small">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h5" style={{ marginTop: "2rem" }}>
          Span
        </Text>
        <div>
          <Text variant="span" size="large">
            {DUMMY_TEXT}
          </Text>
        </div>
        <div>
          <Text variant="span" size="medium">
            {DUMMY_TEXT}
          </Text>
        </div>
        <div>
          <Text variant="span" size="small">
            {DUMMY_TEXT}
          </Text>
        </div>
        <Text variant="h5" style={{ marginTop: "2rem" }}>
          Label
        </Text>
        <Text variant="label" size="large">
          {DUMMY_TEXT}
        </Text>
        <Text variant="label" size="medium">
          {DUMMY_TEXT}
        </Text>
        <Text variant="label" size="small">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h5" style={{ marginTop: "2rem" }}>
          Paragraph
        </Text>
        <Text variant="paragraph" size="large">
          {DUMMY_TEXT}
        </Text>
        <Text variant="paragraph" size="medium">
          {DUMMY_TEXT}
        </Text>
        <Text variant="paragraph" size="small">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h5" style={{ marginTop: "2rem" }}>
          Div
        </Text>
        <Text variant="div" size="large">
          {DUMMY_TEXT}
        </Text>
        <Text variant="div" size="medium">
          {DUMMY_TEXT}
        </Text>
        <Text variant="div" size="small">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h5" style={{ marginTop: "2rem" }}>
          Color
        </Text>
        <Text variant="paragraph" size="large" color="red">
          {DUMMY_TEXT}
        </Text>
        <Text variant="h5" style={{ marginTop: "2rem" }} align="center">
          Align
        </Text>
        <Text variant="paragraph" size="large" align="center">
          {DUMMY_TEXT}
        </Text>
      </div>
    );
  },
};
