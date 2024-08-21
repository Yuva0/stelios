import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconAwardFilled } from "@tabler/icons-react";
import Button from "../../../components/Button/Button";
import colors_storybook from "../../storybook-tokens/colors.json";
import { ThemeProvider } from "../../../components/ThemeProvider/ThemeProvider";

const ButtonStoryMeta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "The content of the button.",
      control: {
        type: "text",
      },
    },
    leadingIcon: {
      description: "The leading icon of the button.",
      options: [<IconAwardFilled />, undefined],
      control: {
        type: "inline-radio",
      },
    },
    trailingIcon: {
      description: "The leading icon of the button.",
      options: [<IconAwardFilled />, undefined],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      description: "The size of the button.",
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    variant: {
      description: "The variant of the button.",
      control: {
        type: "select",
        options: ["contained", "outlined", "soft", "outlined-soft", "neumorph"],
      },
    },
    color: {
      description:
        "The color of the button. Pair it with a theme provider for a more consistent experience.",
      control: {
        type: "color",
      },
    },
    disabled: {
      description: "If true, the button will be disabled.",
      control: {
        type: "boolean",
      },
    },
    isFullWidth: {
      control: {
        type: "boolean",
      },
    },
  },
};
export default ButtonStoryMeta;

type Story = StoryObj<typeof Button>;
const ButtonTemplate: Story = {
  render: (args) => <Button {...args}>{args.children}</Button>,
};

// Variants
export const Contained = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    variant: "contained",
  },
};

export const Outlined = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    variant: "outlined",
  },
};

export const Soft = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    variant: "soft",
  },
};

export const OutlinedSoft = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    variant: "outlined-soft",
  },
};

export const Neuromorph = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    variant: "neumorph",
  },
};

// Sizes
export const Small = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    size: "small",
  },
};

export const Medium = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    size: "medium",
  },
};

export const Large = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    size: "large",
  },
};

// Icons
export const LeadingIcon = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    leadingIcon: <IconAwardFilled />,
  },
};

export const TrailingIcon = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    trailingIcon: <IconAwardFilled />,
  },
};

export const BothIcons = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    leadingIcon: <IconAwardFilled />,
    trailingIcon: <IconAwardFilled />,
  },
};

export const Playground = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
  },
};

export const ButtonThemeProvider: Story = {
  render: (args) => (
    <ThemeProvider
      accents={{
        primary: colors_storybook.color.default.primary,
        secondary: colors_storybook.color.default.secondary,
        success: colors_storybook.color.default.success,
        warning: colors_storybook.color.default.warning,
        critical: colors_storybook.color.default.critical,
        info: colors_storybook.color.default.info,
      }}
    >
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button color="primary" {...args}>
          {args.children}
        </Button>
        <Button color="secondary" {...args}>
          {args.children}
        </Button>
        <Button color="success" {...args}>
          {args.children}
        </Button>
        <Button color="warning" {...args}>
          {args.children}
        </Button>
        <Button color="critical" {...args}>
          {args.children}
        </Button>
        <Button color="info" {...args}>
          {args.children}
        </Button>
      </div>
    </ThemeProvider>
  ),
  args: {
    children: "Click Here"
  }
};
