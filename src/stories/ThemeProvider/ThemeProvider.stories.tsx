import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";
import Header from "../../components/Header/Header";
import HeaderGroup from "../../components/Header/HeaderGroup/HeaderGroup";
import HeaderItem from "../../components/Header/HeaderItem/HeaderItem";
import Link from "../../components/Link/Link";
import Button from "../../components/Button/Button";
import IconButton from "../../components/IconButton/IconButton";
import { IconSettings } from "@tabler/icons-react";
import TestDiv from "./TestDiv";

const meta: Meta<typeof Text> = {
  title: "Components/ThemeProvider",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (args) => {
    return (
      <ThemeProvider>
        <TestDiv>
          <Header>
            <HeaderGroup>
              <HeaderItem>
                <Link href="www.google.com" variant="underline">
                  Header
                </Link>
              </HeaderItem>
              <HeaderItem>
                <Button variant="contained" color="primary">
                  Header
                </Button>
              </HeaderItem>
              <HeaderItem>
                <IconButton
                  icon={<IconSettings />}
                  variant="outlined"
                  color="primary"
                />
              </HeaderItem>
            </HeaderGroup>
          </Header>
          </TestDiv>
      </ThemeProvider>
    );
  }
};
