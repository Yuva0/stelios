import * as React from "react";
import { Meta } from "@storybook/react";
import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/Button";
import IconButton from "../../../components/IconButton/IconButton";
import Accordion from "../../../components/Accordion/Accordion";
import AccordionItem from "../../../components/Accordion/AccordionItem/AccordionItem";
import { IconTrophy } from "@tabler/icons-react";
import Input from "../../../components/Input/Input";

const VariantMeta: Meta = {
  title: "Foundations/Variants",
  parameters: {
    layout: "centered",
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
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};
export default VariantMeta;

export const Sample: typeof VariantMeta = {
  render: (args) => {
    return (
      <>
        <Text variant="paragraph" size="medium">
          Button
        </Text>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined-soft">Outlined Soft</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="neumorph">Neumorph</Button>
        </div>
        <Text variant="paragraph" size="medium" style={{ marginTop: "2rem" }}>
          IconButton
        </Text>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <IconButton alt="trophy" icon={<IconTrophy />} variant="contained" />
          <IconButton alt="trophy" icon={<IconTrophy />} variant="outlined" />
          <IconButton
            alt="trophy"
            icon={<IconTrophy />}
            variant="outlined-soft"
          />
          <IconButton alt="trophy" icon={<IconTrophy />} variant="soft" />
          <IconButton alt="trophy" icon={<IconTrophy />} variant="neumorph" />
          <IconButton
            alt="trophy"
            icon={<IconTrophy />}
            variant="neumorph-contained"
          />
        </div>
        <Text variant="paragraph" size="medium" style={{ marginTop: "2rem" }}>
          Accordion
        </Text>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <Accordion variant="contained" width="300px">
            <AccordionItem title="React">
              <Text size="small" disableColor>
                React is one of the most influential technologies in modern web
                development. Created by Facebook in 2013, it revolutionized the
                way developers think about building user interfaces. React
                introduced a component-based architecture that allows developers
                to create reusable, modular pieces of code, which can be
                combined to form complex user interfaces. This approach not only
                enhances code maintainability but also improves development
                efficiency, as components can be independently developed and
                tested.
              </Text>
            </AccordionItem>
            <AccordionItem title="Vue">
              <Text size="small" disableColor>
                Vue.js is a progressive JavaScript framework for building user
                interfaces. It is designed from the ground up to be
                incrementally adoptable, and can easily scale between a library
                and a framework depending on different use cases. Vue is also
                perfectly capable of powering sophisticated Single-Page
                Applications when used in combination with modern tooling and
                supporting libraries.
              </Text>
            </AccordionItem>
            <AccordionItem title="Angular">
              <Text size="small" disableColor>
                Angular is a platform and framework for building single-page
                client applications using HTML and TypeScript. Angular is
                written in TypeScript. It implements core and optional
                functionality as a set of TypeScript libraries that you import
                into your apps.
              </Text>
            </AccordionItem>
          </Accordion>
          <Accordion variant="outlined-soft" width="300px">
            <AccordionItem title="React">
              <Text size="small" disableColor>
                React is one of the most influential technologies in modern web
                development. Created by Facebook in 2013, it revolutionized the
                way developers think about building user interfaces. React
                introduced a component-based architecture that allows developers
                to create reusable, modular pieces of code, which can be
                combined to form complex user interfaces. This approach not only
                enhances code maintainability but also improves development
                efficiency, as components can be independently developed and
                tested.
              </Text>
            </AccordionItem>
            <AccordionItem title="Vue">
              <Text size="small" disableColor>
                Vue.js is a progressive JavaScript framework for building user
                interfaces. It is designed from the ground up to be
                incrementally adoptable, and can easily scale between a library
                and a framework depending on different use cases. Vue is also
                perfectly capable of powering sophisticated Single-Page
                Applications when used in combination with modern tooling and
                supporting libraries.
              </Text>
            </AccordionItem>
            <AccordionItem title="Angular">
              <Text size="small" disableColor>
                Angular is a platform and framework for building single-page
                client applications using HTML and TypeScript. Angular is
                written in TypeScript. It implements core and optional
                functionality as a set of TypeScript libraries that you import
                into your apps.
              </Text>
            </AccordionItem>
          </Accordion>
          <Accordion variant="soft" width="300px">
            <AccordionItem title="React">
              <Text size="small" disableColor>
                React is one of the most influential technologies in modern web
                development. Created by Facebook in 2013, it revolutionized the
                way developers think about building user interfaces. React
                introduced a component-based architecture that allows developers
                to create reusable, modular pieces of code, which can be
                combined to form complex user interfaces. This approach not only
                enhances code maintainability but also improves development
                efficiency, as components can be independently developed and
                tested.
              </Text>
            </AccordionItem>
            <AccordionItem title="Vue">
              <Text size="small" disableColor>
                Vue.js is a progressive JavaScript framework for building user
                interfaces. It is designed from the ground up to be
                incrementally adoptable, and can easily scale between a library
                and a framework depending on different use cases. Vue is also
                perfectly capable of powering sophisticated Single-Page
                Applications when used in combination with modern tooling and
                supporting libraries.
              </Text>
            </AccordionItem>
            <AccordionItem title="Angular">
              <Text size="small" disableColor>
                Angular is a platform and framework for building single-page
                client applications using HTML and TypeScript. Angular is
                written in TypeScript. It implements core and optional
                functionality as a set of TypeScript libraries that you import
                into your apps.
              </Text>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Text variant="paragraph" size="medium" style={{ marginTop: "2rem" }}>
            Input
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              marginTop: "0.5rem",
            }}
          >
            <Input width="300px" variant="contained" placeholder="Contained" />
            <Input width="300px" variant="outlined" placeholder="Outlined" />
            <Input width="300px" variant="soft" placeholder="Soft" />
          </div>
        </div>
      </>
    );
  },
};
