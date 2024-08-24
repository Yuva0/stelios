import React from "react";
import type { Meta } from "@storybook/react";
import Card from "../../../../components/Card/Card";
import IconButton from "../../../../components/IconButton/IconButton";
import {
  ThemeProvider,
  useUpdateTheme,
} from "../../../../components/ThemeProvider/ThemeProvider";
import {
  IconArrowLeft,
  IconMenu,
  IconPlayerPauseFilled,
  IconPlayerTrackNextFilled,
  IconPlayerTrackPrevFilled,
} from "@tabler/icons-react";
import Text from "../../../../components/Text/Text";
import Avatar from "../../../../components/Avatar/Avatar";
import Slider from "../../../../components/Slider/Slider";
import colorTokens from "../../../../tokens/colors.json";

const MUSIC_NAME = "BYE BYE BYE";
const MUSIC_AUTHOR = "NSYNC";
const MUSIC_IMG_URL =
  "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg";
const MUSIC_IMG_URL_2 =
  "https://w7.pngwing.com/pngs/709/653/png-transparent-deadpool-logo-illustration-marvel-heroes-2016-deadpool-captain-america-logo-marvel-comics-icon-deadpool-angle-face-superhero.png";

interface MusicPlayerProps {
  width?: string;
  primaryColor: string;
  secondaryColor: string;
  appearance: "light" | "dark";
}
const MusicPlayerStoryMeta: Meta<typeof MusicPlayerComp> = {
  title: "Samples/MusicPlayer",
  parameters: {
    layout: ["centered", "fullscreen"],
    backgrounds: {
      default: "smooth-light",
      values: [
        {
          name: "smooth-light",
          value: "#e0e5ec",
        },
        {
          name: "smooth-dark",
          value: "#3b5998",
        },
      ],
    },
  },
  argTypes: {
    width: {
      description: "The width of the music player.",
      control: {
        type: "text",
      },
    },
    primaryColor: {
      description: "The primary color of the music player.",
      control: {
        type: "color",
      },
    },
    secondaryColor: {
      description: "The secondary color of the music player.",
      control: {
        type: "color",
      },
    },
    appearance: {
      description: "The appearance of the music player.",
      control: {
        type: "select",
        options: ["light", "dark"],
      },
    },
  },
};
export default MusicPlayerStoryMeta;
const MusicPlayerComp: React.FC<MusicPlayerProps> = ({
  width,
  primaryColor,
  secondaryColor,
  appearance,
}) => {
  const updateTheme = useUpdateTheme();
  React.useEffect(() => {
    updateTheme({
      accents: {
        primary: primaryColor,
        secondary: secondaryColor,
      },
    });
  }, [primaryColor, secondaryColor, updateTheme]);

  return (
    <Card
      width={width}
      variant="neumorph"
      header={<MusicPlayerHeader />}
      footer={<MusicPlayerFooter />}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Avatar
          type="image"
          size="xlarge"
          src={MUSIC_IMG_URL}
          alt="profile picture"
        />
        <Text size="large" color="secondary" style={{ marginTop: "2rem" }}>
          {MUSIC_NAME}
        </Text>
        <Text color="secondary" style={{ marginTop: "0.5rem" }}>
          {MUSIC_AUTHOR}
        </Text>
        <Slider
          width="80%"
          size="small"
          min={0}
          minDisplay="00:00"
          max={100}
          maxDisplay="04:10"
          step={1}
          defaultValue={34}
          color="primary"
          variant="contained"
        />
      </div>
    </Card>
  );
};
const MusicPlayerHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "2.5rem",
      }}
    >
      <IconButton
        color="secondary"
        icon={<IconArrowLeft />}
        variant="neumorph"
      />
      <Text color="secondary" size="large">
        PLAYING NOW
      </Text>
      <IconButton color="secondary" icon={<IconMenu />} variant="neumorph" />
    </div>
  );
};
const MusicPlayerFooter = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "2.5rem",
      }}
    >
      <IconButton
        color="secondary"
        icon={<IconPlayerTrackPrevFilled />}
        variant="neumorph"
      />
      <IconButton
        color="primary"
        size="large"
        icon={<IconPlayerPauseFilled />}
        variant="neumorph-contained"
      />
      <IconButton
        color="secondary"
        icon={<IconPlayerTrackNextFilled />}
        variant="neumorph"
      />
    </div>
  );
};

export const MusicPlayer: typeof MusicPlayerStoryMeta = {
  render: (args) => {
    return (
      <ThemeProvider
        accents={{ primary: args.primaryColor, secondary: args.secondaryColor }}
        background={colorTokens.theme.background.light}
        appearance={args.appearance}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              args.appearance === "light"
                ? "#e0e5ec"
                : colorTokens.theme.background.dark,
          }}
        >
          <MusicPlayerComp {...args} />
        </div>
      </ThemeProvider>
    );
  },
  args: {
    width: "400px",
    primaryColor: "#ef476f",
    secondaryColor: "#343a40",
    appearance: "light",
  },
};
