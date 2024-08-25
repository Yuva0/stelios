import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Header from "../../../components/Header/Header";
import HeaderGroup from "../../../components/Header/HeaderGroup/HeaderGroup";
import HeaderItem from "../../../components/Header/HeaderItem/HeaderItem";
import Input from "../../../components/Input/Input";
import IconButton from "../../../components/IconButton/IconButton";
import { IconBrandGithub, IconBrandLinkedin, IconSettings } from "@tabler/icons-react";
import Text from "../../../components/Text/Text";

const HeaderMeta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ minHeight: "10rem" }}>
        <Story />
      </div>
    ),
  ],
};
export default HeaderMeta;
type HeaderStory = StoryObj<typeof Header>;

const Template: HeaderStory = {
  render: (args) => {

    const _onLinkedInClick = () => {
      window.open("https://www.linkedin.com/in/tanuj-sengupta-872a05129/", "_blank");
    };
    const _onGithubClick = () => {
      window.open("https://github.com/yuva0", "_blank");
    };

    return (
      <Header style={{padding:"0 1rem"}}>
        <HeaderGroup style={{paddingLeft:"1rem"}}>
          <Text size="large">Stelios</Text>
        </HeaderGroup>
        <HeaderGroup>
          <Input placeholder="Search" variant="soft"/>
        </HeaderGroup>
        <HeaderGroup style={{marginRight:"1rem"}}>
          <HeaderItem>
            <IconButton size="small" icon={<IconBrandGithub />} variant="soft" onClick={_onGithubClick}/>
          </HeaderItem>
          <HeaderItem>
            <IconButton size="small" icon={<IconBrandLinkedin />} variant="soft" onClick={_onLinkedInClick}/>
          </HeaderItem>
          <HeaderItem>
            <IconButton size="small" icon={<IconSettings />}  variant="soft"/>
          </HeaderItem>
        </HeaderGroup>
      </Header>
    );
  },
  args: {},
};

export const Default = Template;

