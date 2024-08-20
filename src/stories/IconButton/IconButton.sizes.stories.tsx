import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "../../components/IconButton/IconButton";
import Text from "../../components/Text/Text";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import colors_new from "../../tokens/colors_new.json";
import { IconPackage } from "@tabler/icons-react";

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

export const Sizes: Story = {
  render: () => {
    return (
        <ThemeProvider
            accent={{
            primary: colors_new.primary.accent,
            secondary: colors_new.secondary.accent,
            danger: colors_new.danger.accent,
            warning: colors_new.warning.accent,
            success: colors_new.success.accent,
            info: colors_new.info.accent,
            }}
      >
        <div style={{display:"grid", gridTemplateColumns: "repeat(2, max-content)", gridTemplateRows: "40px auto", 
            gridAutoFlow:"column", columnGap:"3rem", justifyContent: "center", alignItems:"center"}}>
            <Text variant="paragraph">small</Text>
            <span><IconButton icon={<IconPackage/>} size="small"/></span>

            <Text variant="paragraph">medium</Text>
            <span><IconButton icon={<IconPackage/>} size="medium"/></span>

            <Text variant="paragraph">large</Text>
            <span><IconButton icon={<IconPackage/>} size="large"/></span>
        </div>
      </ThemeProvider>
    );
  },
};
