import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import IconButton from "../../../components/IconButton/IconButton";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";
import ImageHighlight from "../../../components/ImageHighlight/ImageHighlight";
import { IconArrowBack, IconArrowLeft, IconMenu, IconPlayerPauseFilled, IconPlayerTrackNextFilled, IconPlayerTrackPrevFilled } from "@tabler/icons-react";
import Text from "../../../components/Text/Text";

const MusicPlayerStoryMeta: Meta<typeof MusicPlayer> = {
  title: "Samples/MusicPlayer",
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'smooth-light',
      values: [
        {
          name: 'smooth-light',
          value: '#e0e5ec',
        },
        {
          name: 'smooth-dark',
          value: '#3b5998',
        },
      ],
    },
  },
  
};
export default MusicPlayerStoryMeta;

const Header = () => {
  return (
    <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"2.5rem"}}>
      <IconButton color="secondary" icon={<IconArrowLeft />} variant="neumorph" />
      <Text color="secondary" size="large">PLAYING NOW</Text>
      <IconButton color="secondary" icon={<IconMenu />} variant="neumorph" />
    </div>
  )
};
const Footer = () => {
  return (
    <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"2.5rem"}}>
      <IconButton color="secondary" icon={<IconPlayerTrackPrevFilled />} variant="neumorph" />
      <IconButton color="primary" size="large" icon={<IconPlayerPauseFilled />} variant="neumorph-contained" />
      <IconButton color="secondary" icon={<IconPlayerTrackNextFilled />} variant="neumorph" />
    </div>
  )
}

type MusicPlayerStory = StoryObj;
export const MusicPlayer: MusicPlayerStory = {
  render: (args) => {
    return (
      <ThemeProvider accents={{primary: "#ef476f", secondary: "#343a40"}} background="#e0e5ec">
        <Card width="400px" variant="neumorph" header={<Header/>} footer={<Footer/>}>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"1rem"}}>
            <ImageHighlight imgSrc="https://source.unsplash.com/random/400x400" imgAlt="Song Cover" gradientColors={["#fb6f92", "#f7cb5e"]} />
            <Text size="large" color="secondary">Song Title</Text>
            <Text color="secondary">Artist Name</Text>
          </div>
        </Card>
      </ThemeProvider>
    )
  }
};
