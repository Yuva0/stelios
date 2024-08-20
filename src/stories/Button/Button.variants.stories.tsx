import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import colors_new from "../../tokens/colors_new.json";

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
          <span><Button variant="contained">Click Here</Button></span>

          <Text variant="paragraph">outlined</Text>
          <span><Button variant="outlined">Click Here</Button></span>

          <Text variant="paragraph">soft</Text>
          <span><Button variant="soft">Click Here</Button></span>


          <Text variant="paragraph">outlined-soft</Text>
          <span><Button variant="outlined-soft">Click Here</Button></span>

          <Text variant="paragraph">neumorph</Text>
          <span><Button variant="neumorph">Click Here</Button></span>
        </div>
      </ThemeProvider>
    );
  },
};
