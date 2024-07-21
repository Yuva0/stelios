import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { generateRadixColors } from "../../helpers/colors/generateRadixColors";
import Text from "../../components/Text/Text";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import ToggleButtonGroup from "../../components/ToggleButton/ToggleButtonGroup/ToggleButtonGroup";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import { IconMoon, IconSun } from "@tabler/icons-react";

const meta: Meta<typeof ToggleButton> = {
  title: "Components/ToggleButton",
  component: ToggleButton,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  render: (args) => {
    const _onClick = (e: React.MouseEvent, value?: string) => {
      console.log(e, value);
    };

    return (
      <ThemeProvider>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <Text variant="paragraph">Appearance</Text>
            <ToggleButtonGroup
              size="small"
              value="1"
              color="primary"
              onClick={_onClick}
              width="100%"
              {...args}
            >
              <ToggleButton value="1">
                <IconSun />
                <Text variant="paragraph">Light</Text>
              </ToggleButton>
              <ToggleButton>
                <IconMoon width={20} height={20} />
                <Text variant="paragraph">Dark</Text>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <Text variant="paragraph">Appearance</Text>
            <ToggleButtonGroup
              size="medium"
              value="1"
              color="primary"
              onClick={_onClick}
              {...args}
            >
              <ToggleButton value="1">
                <IconSun width={20} height={20} />
                <Text variant="paragraph">Light</Text>
              </ToggleButton>
              <ToggleButton>
                <IconMoon width={20} height={20} />
                <Text variant="paragraph">Dark</Text>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <Text variant="paragraph">Appearance</Text>
            <ToggleButtonGroup
              size="large"
              value="1"
              color="primary"
              onClick={_onClick}
              {...args}
            >
              <ToggleButton value="1">
                <IconSun width={20} height={20} />
                <Text variant="paragraph">Light</Text>
              </ToggleButton>
              <ToggleButton>
                <IconMoon width={20} height={20} />
                <Text variant="paragraph">Dark</Text>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </ThemeProvider>
    );
  },
  args: {
    children: "ToggleButton",
  },
};
