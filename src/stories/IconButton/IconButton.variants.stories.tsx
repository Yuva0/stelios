import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "../../components/IconButton/IconButton";
import Text from "../../components/Text/Text";
import {
  Icon12Hours,
  IconPackage,
  // IconArrowLeft,
  // IconArrowRight,
} from "@tabler/icons-react";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import colors_new from "../../tokens/colors_new.json";

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
          <Text variant="paragraph">contained</Text>
          <span><IconButton icon={<IconPackage/>} variant="contained">Click Here</IconButton></span>

          <Text variant="paragraph">outlined</Text>
          <span><IconButton icon={<IconPackage/>} variant="outlined">Click Here</IconButton></span>

          <Text variant="paragraph">soft</Text>
          <span><IconButton icon={<IconPackage/>} variant="soft">Click Here</IconButton></span>


          <Text variant="paragraph">outlined-soft</Text>
          <span><IconButton icon={<IconPackage/>} variant="outlined-soft">Click Here</IconButton></span>

          <Text variant="paragraph">neumorph</Text>
          <span><IconButton icon={<IconPackage/>} variant="neumorph">Click Here</IconButton></span>
        </div>
      </ThemeProvider>
    );
  },
};
