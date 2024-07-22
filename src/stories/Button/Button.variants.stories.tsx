import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => {
    return (
      <ThemeProvider accent={{primary: "#DD3C74", success:"#DD843C"}} appearance="dark">
        <div style={{background: "#212529"}}>
          <table style={{ width: "100%", textAlign: "center" }}>
            <thead>
              <tr>
                <td>
                  <Text variant="h5" size="large">
                    Variants
                  </Text>
                </td>
                <td>
                  <Text variant="h5" size="large">
                    Primary
                  </Text>
                </td>
                <td>
                  <Text variant="h5" size="large">
                    Secondary
                  </Text>
                </td>
                <td>
                  <Text variant="h5" size="large">
                    Danger
                  </Text>
                </td>
                <td>
                  <Text variant="h5" size="large">
                    Warning
                  </Text>
                </td>
                <td>
                  <Text variant="h4" size="large">
                    Success
                  </Text>
                </td>
                <td>
                  <Text variant="h4" size="large">
                    Info
                  </Text>
                </td>
              </tr>
              <tr style={{ height: "36px" }}>
                <Text size="large" variant="h5">
                  Large Buttons
                </Text>
              </tr>
            </thead>
            <tr style={{ height: "64px" }}>
              <td>
                <Text size="large" variant="paragraph">
                  Contained
                </Text>
              </td>
              <td>
                <Button size="large" variant="contained" color="primary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="large" variant="contained" color="secondary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="large" variant="contained" color="danger">
                  Label
                </Button>
              </td>
              <td>
                <Button size="large" variant="contained" color="warning">
                  Label
                </Button>
              </td>
              <td>
                <Button size="large" variant="contained" color="success">
                  Label
                </Button>
              </td>
              <td>
                <Button size="large" variant="contained" color="info">
                  Label
                </Button>
              </td>
            </tr>
            <tr style={{ height: "64px" }}>
              <td>
                <Text size="large" variant="paragraph">
                  Outlined
                </Text>
              </td>
              <td>
                <Button size="large" variant="outlined" color="primary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="large" variant="outlined" color="secondary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="large" variant="outlined" color="danger">
                  Label
                </Button>
              </td>
              <td>
                <Button size="large" variant="outlined" color="warning">
                  Label
                </Button>
              </td>
              <td>
                <Button size="large" variant="outlined" color="success">
                  Label
                </Button>
              </td>
              <td>
                <Button size="large" variant="outlined" color="info">
                  Label
                </Button>
              </td>
            </tr>
            <tr style={{ height: "64px" }}>
              <td>
                <Text size="large" variant="paragraph">
                  Text
                </Text>
              </td>
              <td>
                <Button size="large" variant="text" color="primary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="large" variant="text" color="secondary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="large" variant="text" color="danger">
                  Label
                </Button>
              </td>
              <td>
                <Button size="large" variant="text" color="warning">
                  Label
                </Button>
              </td>
              <td>
                <Button size="large" variant="text" color="success">
                  Label
                </Button>
              </td>
              <td>
                <Button size="large" variant="text" color="info">
                  Label
                </Button>
              </td>
            </tr>
            <thead>
              <Text size="large" variant="h5">
                Medium Button
              </Text>
            </thead>
            <tr style={{ height: "64px" }}>
              <td>
                <Text size="large" variant="paragraph">
                  Contained
                </Text>
              </td>
              <td>
                <Button size="medium" variant="contained" color="primary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="medium" variant="contained" color="secondary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="medium" variant="contained" color="danger">
                  Label
                </Button>
              </td>
              <td>
                <Button size="medium" variant="contained" color="warning">
                  Label
                </Button>
              </td>
              <td>
                <Button size="medium" variant="contained" color="success">
                  Label
                </Button>
              </td>
              <td>
                <Button size="medium" variant="contained" color="info">
                  Label
                </Button>
              </td>
            </tr>
            <tr style={{ height: "64px" }}>
              <td>
                <Text size="large" variant="paragraph">
                  Outlined
                </Text>
              </td>
              <td>
                <Button size="medium" variant="outlined" color="primary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="medium" variant="outlined" color="secondary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="medium" variant="outlined" color="danger">
                  Label
                </Button>
              </td>
              <td>
                <Button size="medium" variant="outlined" color="warning">
                  Label
                </Button>
              </td>
              <td>
                <Button size="medium" variant="outlined" color="success">
                  Label
                </Button>
              </td>
              <td>
                <Button size="medium" variant="outlined" color="info">
                  Label
                </Button>
              </td>
            </tr>
            <tr style={{ height: "64px" }}>
              <td>
                <Text size="large" variant="paragraph">
                  Text
                </Text>
              </td>
              <td>
                <Button size="medium" variant="text" color="primary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="medium" variant="text" color="secondary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="medium" variant="text" color="danger">
                  Label
                </Button>
              </td>
              <td>
                <Button size="medium" variant="text" color="warning">
                  Label
                </Button>
              </td>
              <td>
                <Button size="medium" variant="text" color="success">
                  Label
                </Button>
              </td>
              <td>
                <Button size="medium" variant="text" color="info">
                  Label
                </Button>
              </td>
            </tr>
            <thead>
              <Text size="large" variant="h5">
                Small Button
              </Text>
            </thead>
            <tr style={{ height: "64px" }}>
              <td>
                <Text size="large" variant="paragraph">
                  Contained
                </Text>
              </td>
              <td>
                <Button size="small" variant="contained" color="primary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="small" variant="contained" color="secondary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="small" variant="contained" color="danger">
                  Label
                </Button>
              </td>
              <td>
                <Button size="small" variant="contained" color="warning">
                  Label
                </Button>
              </td>
              <td>
                <Button size="small" variant="contained" color="success">
                  Label
                </Button>
              </td>
              <td>
                <Button size="small" variant="contained" color="info">
                  Label
                </Button>
              </td>
            </tr>
            <tr style={{ height: "64px" }}>
              <td>
                <Text size="large" variant="paragraph">
                  Outlined
                </Text>
              </td>
              <td>
                <Button size="small" variant="outlined" color="primary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="small" variant="outlined" color="secondary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="small" variant="outlined" color="danger">
                  Label
                </Button>
              </td>
              <td>
                <Button size="small" variant="outlined" color="warning">
                  Label
                </Button>
              </td>
              <td>
                <Button size="small" variant="outlined" color="success">
                  Label
                </Button>
              </td>
              <td>
                <Button size="small" variant="outlined" color="info">
                  Label
                </Button>
              </td>
            </tr>
            <tr style={{ height: "64px" }}>
              <td>
                <Text size="large" variant="paragraph">
                  Text
                </Text>
              </td>
              <td>
                <Button size="small" variant="text" color="primary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="small" variant="text" color="secondary">
                  Label
                </Button>
              </td>
              <td>
                <Button size="small" variant="text" color="danger">
                  Label
                </Button>
              </td>
              <td>
                <Button size="small" variant="text" color="warning">
                  Label
                </Button>
              </td>
              <td>
                <Button size="small" variant="text" color="success">
                  Label
                </Button>
              </td>
              <td>
                <Button size="small" variant="text" color="info">
                  Label
                </Button>
              </td>
            </tr>
          </table>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button leadingIcon={<IconArrowLeft />}>Label</Button>
            <Button trailingIcon={<IconArrowRight />}>Label</Button>
            <Button
              leadingIcon={<IconArrowLeft />}
              trailingIcon={<IconArrowRight />}
            >
              Label
            </Button>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};
