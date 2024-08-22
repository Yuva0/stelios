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
    title: "Gojo Satoru",
    description:
      "Gojo Satoru is a prominent character in the anime and manga series Jujutsu Kaisen, created by Gege Akutami. He is one of the most powerful sorcerers in the series and a teacher at Tokyo Jujutsu High, where he trains young sorcerers to fight against cursed spirits.",
    variant: "outlined",
  }
}
export const Soft = {
  ...AlertTemplate,
  args: {
    title: "Gojo Satoru",
    description:
      "Gojo Satoru is a prominent character in the anime and manga series Jujutsu Kaisen, created by Gege Akutami. He is one of the most powerful sorcerers in the series and a teacher at Tokyo Jujutsu High, where he trains young sorcerers to fight against cursed spirits.",
    variant: "soft",
  }
}

// Icons
export const LeadingIcon = {
  ...AlertTemplate,
  args: {
    title: "Gojo Satoru",
    description:
      "Gojo Satoru is a prominent character in the anime and manga series Jujutsu Kaisen, created by Gege Akutami.",
    leadingIcon: <IconArrowBackUp/>,
  }
}
export const TitleIcon = {
  ...AlertTemplate,
  args: {
    title: "Gojo Satoru",
    description:
      "Gojo Satoru is a prominent character in the anime and manga series Jujutsu Kaisen, created by Gege Akutami.",
    titleIcon: <IconArrowBackUp />,
  }
}

// Playground
export const Playground = {
  ...AlertTemplate,
  args: {
    title: "Gojo Satoru",
    description:
      "Gojo Satoru is a prominent character in the anime and manga series Jujutsu Kaisen, created by Gege Akutami.",
  },
};