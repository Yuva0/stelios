import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "../../components/IconButton/IconButton";
import Text from "../../components/Text/Text";
import {
  Icon12Hours,
  // IconArrowLeft,
  // IconArrowRight,
} from "@tabler/icons-react";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Variants: Story = {
  render: () => {
    return (
      <div>
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
                Large IconButtons
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
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="contained"
                color="primary"
              />
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="contained"
                color="secondary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="contained"
                color="danger"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="contained"
                color="warning"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="contained"
                color="success"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="contained"
                color="info"
              ></IconButton>
            </td>
          </tr>
          <tr style={{ height: "64px" }}>
            <td>
              <Text size="large" variant="paragraph">
                Outlined
              </Text>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="outlined"
                color="primary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="outlined"
                color="secondary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="outlined"
                color="danger"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="outlined"
                color="warning"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="outlined"
                color="success"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="outlined"
                color="info"
              ></IconButton>
            </td>
          </tr>
          <tr style={{ height: "64px" }}>
            <td>
              <Text size="large" variant="paragraph">
                Text
              </Text>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="text"
                color="primary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="text"
                color="secondary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="text"
                color="danger"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="text"
                color="warning"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="text"
                color="success"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="large"
                variant="text"
                color="info"
              ></IconButton>
            </td>
          </tr>
          <thead>
            <Text size="large" variant="h5">
              Medium IconButton
            </Text>
          </thead>
          <tr style={{ height: "64px" }}>
            <td>
              <Text size="large" variant="paragraph">
                Contained
              </Text>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="contained"
                color="primary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="contained"
                color="secondary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="contained"
                color="danger"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="contained"
                color="warning"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="contained"
                color="success"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="contained"
                color="info"
              ></IconButton>
            </td>
          </tr>
          <tr style={{ height: "64px" }}>
            <td>
              <Text size="large" variant="paragraph">
                Outlined
              </Text>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="outlined"
                color="primary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="outlined"
                color="secondary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="outlined"
                color="danger"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="outlined"
                color="warning"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="outlined"
                color="success"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="outlined"
                color="info"
              ></IconButton>
            </td>
          </tr>
          <tr style={{ height: "64px" }}>
            <td>
              <Text size="large" variant="paragraph">
                Text
              </Text>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="text"
                color="primary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="text"
                color="secondary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="text"
                color="danger"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="text"
                color="warning"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="text"
                color="success"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="medium"
                variant="text"
                color="info"
              ></IconButton>
            </td>
          </tr>
          <thead>
            <Text size="large" variant="h5">
              Small IconButton
            </Text>
          </thead>
          <tr style={{ height: "64px" }}>
            <td>
              <Text size="large" variant="paragraph">
                Contained
              </Text>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="contained"
                color="primary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="contained"
                color="secondary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="contained"
                color="danger"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="contained"
                color="warning"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="contained"
                color="success"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="contained"
                color="info"
              ></IconButton>
            </td>
          </tr>
          <tr style={{ height: "64px" }}>
            <td>
              <Text size="large" variant="paragraph">
                Outlined
              </Text>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="outlined"
                color="primary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="outlined"
                color="secondary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="outlined"
                color="danger"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="outlined"
                color="warning"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="outlined"
                color="success"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="outlined"
                color="info"
              ></IconButton>
            </td>
          </tr>
          <tr style={{ height: "64px" }}>
            <td>
              <Text size="large" variant="paragraph">
                Text
              </Text>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="text"
                color="primary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="text"
                color="secondary"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="text"
                color="danger"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="text"
                color="warning"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="text"
                color="success"
              ></IconButton>
            </td>
            <td>
              <IconButton
                icon={<Icon12Hours />}
                size="small"
                variant="text"
                color="info"
              ></IconButton>
            </td>
          </tr>
        </table>
      </div>
    );
  },
};
