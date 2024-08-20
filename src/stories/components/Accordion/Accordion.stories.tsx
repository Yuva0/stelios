import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "../../../components/Accordion/Accordion";
import AccordionItem from "../../../components/Accordion/AccordionItem/AccordionItem";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";
import Text from "../../../components/Text/Text";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => {
    return (
      <ThemeProvider appearance="dark">
        <Accordion>
          <AccordionItem title="Accordion Item Title 1" expanded={false}>
            <div style={{background: "grey"}}>
            <Text variant="div">Accordion Item Children 1</Text>
            <div style={{height:"400px"}}>Test</div>
            </div>
          </AccordionItem>
          <AccordionItem title="Accordion Item Title 2" expanded={false}>
            Accordion Item Children 2
          </AccordionItem>
          <AccordionItem title="Accordion Item Title 3" expanded={false}>
            Accordion Item Children 3
          </AccordionItem>
        </Accordion>
      </ThemeProvider>
    );
  },
};
