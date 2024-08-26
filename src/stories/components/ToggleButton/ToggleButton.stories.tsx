import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { generateRadixColors } from "../../helpers/colors/generateRadixColors";
import Text from "../../../components/Text/Text";
import ToggleButton from "../../../components/ToggleButton/ToggleButton";
import ToggleButtonGroup from "../../../components/ToggleButton/ToggleButtonGroup/ToggleButtonGroup";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";
import { IconMoon, IconSun } from "@tabler/icons-react";

const meta: Meta<typeof ToggleButton> = {
  title: "Components/ToggleButton",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

const Template: Story = {
  render: (args) => {
    const _onClick = (e: React.MouseEvent, value?: string) => {
      console.log(e, value);
    };

    return (
      <ToggleButtonGroup
        size="small"
        value="sun"
        onClick={_onClick}
        width="15rem"
        {...args}
      >
        <ToggleButton value="sun">
          <IconSun />
          <Text disableColor variant="paragraph">
            Light
          </Text>
        </ToggleButton>
        <ToggleButton value="moon">
          <IconMoon width={20} height={20} />
          <Text disableColor variant="paragraph">
            Dark
          </Text>
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};
export const Default = {
  ...Template,
};
export const Playground = Template;