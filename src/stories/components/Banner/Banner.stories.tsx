import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Banner from "../../../components/Banner/Banner";
import { IconArrowBackUp, IconAwardFilled, IconBrandReact, IconBrandTypescript } from "@tabler/icons-react";

const BannerStoryMeta: Meta<typeof Banner> = {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      description: "Variant of the banner",
      control: {
        type: "select",
        options: ["contained", "outlined", "soft"],
      },
    },
    title: {
      description: "Title of the banner",
      control: {
        type: "text",
      },
    },
    description: {
      description: "Description of the banner",
      control: {
        type: "text",
      },
    },
    leadingIcon: {
      description: "Leading icon of the banner",
      options: [<IconAwardFilled />, undefined],
      control: {
        type: "inline-radio",
      },
    },
    titleIcon: {
      description: "Title icon of the banner",
      options: [<IconAwardFilled />, undefined],
      control: {
        type: "inline-radio",
      },
    },
  },
};
export default BannerStoryMeta;

type BannerStory = StoryObj<typeof Banner>;
const BannerTemplate: BannerStory = {
  render: (args) => <Banner {...args} />,
};

// Variant
export const Contained = {
  ...BannerTemplate,
  args: {
    title: "MERN Stack",
    description:
      "The MERN stack, comprising MongoDB, Express, React, and Node.js, is a powerful combination for full-stack web development. MongoDB, a NoSQL database, provides a flexible and scalable way to manage data, while Express and Node.js handle the server-side logic, enabling efficient data processing and API creation. React, a popular front-end library, brings dynamic and responsive user interfaces, allowing developers to create seamless single-page applications.",
  },
};
export const Outlined = {
  ...BannerTemplate,
  args: {
    title: "MEAN Stack",
    description:
      "The MEAN stack, consisting of MongoDB, Express, Angular, and Node.js, is a popular full-stack development framework that allows developers to build dynamic web applications using JavaScript from front to back. MongoDB serves as the database, offering a document-based, NoSQL structure that is highly flexible and scalable. Express provides a robust backend framework that simplifies the process of building APIs and handling server-side logic. Angular, a powerful front-end framework, enables the creation of dynamic, single-page applications with rich user interfaces. Node.js ties the stack together with its efficient, event-driven runtime, allowing for scalable and high-performance server-side operations. ",
    variant: "outlined",
  },
};
export const Soft = {
  ...BannerTemplate,
  args: {
    title: "React + Java",
    description:
      "Combining React with Java creates a powerful duo for building robust and scalable web applications. React, a popular JavaScript library, excels at developing dynamic, responsive user interfaces, enabling developers to create seamless single-page applications with a component-based architecture. On the backend, Java provides a strong, enterprise-level foundation, known for its stability, security, and performance. By using Java for server-side logic, database management, and API development, and React for the front-end interface, developers can leverage the strengths of both technologies. This combination allows for the creation of modern, interactive applications with a clear separation of concerns, where React handles the user experience and Java manages the underlying business logic.",
    variant: "soft",
  },
};
export const OutlinedSoft = {
  ...BannerTemplate,
  args: {
    title: "React + Go",
    description:
      "Combining React with Go (Golang) offers a powerful and efficient approach to building modern web applications. React, a leading JavaScript library, is well-known for its ability to create dynamic, responsive user interfaces with a component-based architecture, making it ideal for single-page applications. Go, on the other hand, is a statically typed, compiled language renowned for its simplicity, performance, and concurrency capabilities. By using React for the front-end and Go for the backend, developers can create applications that are both user-friendly and highly performant.",
    variant: "outlined-soft",
  },
};

// Icons
export const LeadingIcon = {
  ...BannerTemplate,
  args: {
    title: "React",
    description:
      "React is a JavaScript library for building dynamic, interactive user interfaces through reusable components and a virtual DOM.",
    leadingIcon: <IconBrandReact />,
  },
};
export const TitleIcon = {
  ...BannerTemplate,
  args: {
    title: "Typescript",
    description:
      "TypeScript is a superset of JavaScript that adds static typing and advanced features to enhance development, improve code quality, and catch errors at compile-time.",
    titleIcon: <IconBrandTypescript />,
  },
};

// Playground
export const Playground = {
  ...BannerTemplate,
  args: {
    title: "Design Systems",
    description:
      "A component design system is a collection of reusable, standardized UI components and guidelines that ensure consistency, efficiency, and scalability in building and maintaining user interfaces across applications.",
  },
};
