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
    rounded: {
      description: "If true, the button will be rounded.",
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

type ButtonStory = StoryObj<typeof Button>;
const ButtonTemplate: ButtonStory = {
  render: (args) => <Button {...args}>{args.children}</Button>,
};

// Variants
export const Contained = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    variant: "contained",
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
    actions: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
  }
};
export const Outlined = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    variant: "outlined",
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
    actions: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
  }
};
export const Soft = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    variant: "soft",
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
    actions: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
  }
};
export const OutlinedSoft = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    variant: "outlined-soft",
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
    actions: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
  }
};
export const Neuromorph = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    variant: "neumorph",
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
    actions: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
  }
};

// Sizes
export const Small = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    size: "small",
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
    actions: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
  }
};
export const Medium = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    size: "medium",
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
    actions: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
  }
};
export const Large = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    size: "large",
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
    actions: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
  }
};

// Icons
export const LeadingIcon = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    leadingIcon: <IconAwardFilled />,
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
    actions: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
  }
};
export const TrailingIcon = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    trailingIcon: <IconAwardFilled />,
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
    actions: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
  }
};
export const BothIcons = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
    leadingIcon: <IconAwardFilled />,
    trailingIcon: <IconAwardFilled />,
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
    actions: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
  }
};

export const Playground = {
  ...ButtonTemplate,
  args: {
    children: "Click Here",
  },
};

export const ButtonThemeProvider: ButtonStory = {
  render: (args) => (
    <ThemeProvider
      accents={{
        primary: colors_storybook.color.default.primary,
        success: colors_storybook.color.default.success,
        warning: colors_storybook.color.default.warning,
        critical: colors_storybook.color.default.critical,
        info: colors_storybook.color.default.info,
      }}
    >
      <div style={{display:"flex", gap: "1rem"}}>
        <Button color="primary" {...args}>
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
    children: "Click Here",
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
    actions: {
      hideNoControlsWarning: true,
      disabled: true,
      disable: true,
    },
  }
};
