import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "../../../components/IconButton/IconButton";
import { IconAwardFilled } from "@tabler/icons-react";

const IconButtonMeta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["contained", "soft", "outlined", "outlined-soft", "neumorph"],
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
    disabled: {
      description: "If true, the button will be disabled.",
      control: {
        type: "boolean",
      },
    }
  },
};

export default IconButtonMeta;
type Story = StoryObj<typeof IconButton>;

const IconButtonTemplate: Story = {
  render: (args) => {
    return <IconButton {...args} />;
  },
};
export const Contained = {
  ...IconButtonTemplate,
  args: {
    icon: <IconAwardFilled />,
    alt:"Award",
    variant: "contained",
  },
}
export const Outlined = {
  ...IconButtonTemplate,
  args: {
    icon: <IconAwardFilled />,
    alt:"Award",
    variant: "outlined",
  },
}
export const Soft = {
  ...IconButtonTemplate,
  args: {
    icon: <IconAwardFilled />,
    alt:"Award",
    variant: "soft",
  },
}
export const OutlinedSoft = {
  ...IconButtonTemplate,
  args: {
    icon: <IconAwardFilled />,
    alt:"Award",
    variant: "outlined-soft",
  },
}
export const Neumorph = {
  ...IconButtonTemplate,
  args: {
    icon: <IconAwardFilled />,
    alt:"Award",
    variant: "neumorph",
  },
}
export const NeumorphContained = {
  ...IconButtonTemplate,
  args: {
    icon: <IconAwardFilled />,
    alt:"Award",
    variant: "neumorph-contained",
  },
}

export const Small = {
  ...IconButtonTemplate,
  args: {
    icon: <IconAwardFilled />,
    size: "small",
  },
}
export const Medium = {
  ...IconButtonTemplate,
  args: {
    icon: <IconAwardFilled />,
    size: "medium",
  },
}
export const Large = {
  ...IconButtonTemplate,
  args: {
    icon: <IconAwardFilled />,
    size: "large",
  },
}

export const Playground = {
  ...IconButtonTemplate,
  args: {
    icon: <IconAwardFilled />,
  },
}