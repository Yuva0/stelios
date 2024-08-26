import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Alert from "../../../components/Alert/Alert";
import { IconArrowBackUp, IconAwardFilled } from "@tabler/icons-react";

const AlertStoryMeta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      description: "Variant of the alert",
      control: {
        type: "select",
        options: ["contained", "outlined", "soft"],
      },
    },
    title: {
      description: "Title of the alert",
      control: {
        type: "text",
      },
    },
    description: {
      description: "Description of the alert",
      control: {
        type: "text",
      },
    },
    leadingIcon: {
      description: "Leading icon of the alert",
      options: [<IconAwardFilled />, undefined],
      control: {
        type: "inline-radio",
      },
    },
    titleIcon: {
      description: "Title icon of the alert",
      options: [<IconAwardFilled />, undefined],
      control: {
        type: "inline-radio",
      },
    },
  },
};
export default AlertStoryMeta;

type AlertStory = StoryObj<typeof Alert>;
const AlertTemplate: AlertStory = {
  render: (args) => <Alert {...args} />,
};

// Variant
export const Contained = {
  ...AlertTemplate,
  args: {
    title: "Gojo Satoru",
    description:
      "Gojo Satoru is a prominent character in the anime and manga series Jujutsu Kaisen, created by Gege Akutami. He is one of the most powerful sorcerers in the series and a teacher at Tokyo Jujutsu High, where he trains young sorcerers to fight against cursed spirits.",
  },
};
export const Outlined = {
  ...AlertTemplate,
  args: {
    title: "Lelouch Lamperouge",
    description:
      "Lelouch vi Britannia, whose alias is Lelouch Lamperouge, is the main protagonist of the Sunrise anime series Code Geass: Lelouch of the Rebellion. In the series, Lelouch is a former prince from the superpower Britannia who is given the power of the `Geass` by a witch known as C.C. Using the Geass and his genius-level intellect, Lelouch becomes the leader of the resistance movement known as The Black Knights under his alter ego Zero (ゼロ) to destroy the Holy Britannian Empire, an imperial monarchy that has been conquering various countries under the control of his father.",
    variant: "outlined",
  },
};
export const Soft = {
  ...AlertTemplate,
  args: {
    title: "L",
    description:
      "A weirdo if you have never met him. Once you do, there is no going back. He is a genius detective who is known for his eccentricity and his ability to solve any case, no matter how difficult it may be.",
    variant: "soft",
  },
};
export const OutlinedSoft = {
  ...AlertTemplate,
  args: {
    title: "L",
    description:
      "A weirdo if you have never met him. Once you do, there is no going back. He is a genius detective who is known for his eccentricity and his ability to solve any case, no matter how difficult it may be.",
    variant: "outlined-soft",
  },
};

// Icons
export const LeadingIcon = {
  ...AlertTemplate,
  args: {
    title: "Joseph Joestar",
    description:
      "*sigh*, I don't why I have added him here but he is an inspiration to many (not me).",
    leadingIcon: <IconArrowBackUp />,
  },
};
export const TitleIcon = {
  ...AlertTemplate,
  args: {
    title: "Ken Kaneki",
    description:
      "Ken Kaneki, also known as the Black Reaper and the One-Eyed King, is the main protagonist of the Tokyo Ghoul franchise. Ken was a normal college student until his encounter with Rize Kamishiro left him transformed into a Ghoul.",
    titleIcon: <IconArrowBackUp />,
  },
};

// Playground
export const Playground = {
  ...AlertTemplate,
  args: {
    title: "Gojo Satoru",
    description:
      "Gojo Satoru is a prominent character in the anime and manga series Jujutsu Kaisen, created by Gege Akutami.",
  },
};
