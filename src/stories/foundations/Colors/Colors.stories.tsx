import * as React from "react";
import { Meta } from "@storybook/react";
import Header from "../../../components/Header/Header";
import HeaderItem from "../../../components/Header/HeaderItem/HeaderItem";
import Text from "../../../components/Text/Text";
import IconButton from "../../../components/IconButton/IconButton";
import NavigationBar from "../../../components/NavigationBar/NavigationBar";
import NavigationBarItem from "../../../components/NavigationBar/NavigationBarItem/NavigationBarItem";
import NavigationBarGroup from "../../../components/NavigationBar/NavigationBarGroup/NavigationBarGroup";
import NavigationBarHeader from "../../../components/NavigationBar/NavigationBarHeader/NavigationBarHeader";
import NavigationBarGroupItem from "../../../components/NavigationBar/NavigationBarGroupItem/NavigationBarGroupItem";
import Autocomplete from "../../../components/Autocomplete/Autocomplete";
import SideBar from "../../../components/SideBar/SideBar";
import SideBarGroup from "../../../components/SideBar/SideBarGroup/SideBarGroup";
import SideBarGroupItem from "../../../components/SideBar/SideBarGroupItem/SideBarGroupItem";
import SideBarItem from "../../../components/SideBar/SideBarItem/SideBarItem";
import ColorPicker from "../../../components/ColorPicker/ColorPicker";
import Button from "../../../components/Button/Button";
import Banner from "../../../components/Banner/Banner";
import Slider from "../../../components/Slider/Slider";
import Avatar from "../../../components/Avatar/Avatar";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "../../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem";
import CodeDisplay from "../../../components/CodeDisplay/CodeDisplay";
import ToggleButton from "../../../components/ToggleButton/ToggleButton";
import ToggleButtonGroup from "../../../components/ToggleButton/ToggleButtonGroup/ToggleButtonGroup";

import {
  Icon12Hours,
  Icon24Hours,
  Icon3dCubeSphereOff,
  IconAward,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMoon,
  IconSettings,
  IconSun,
} from "@tabler/icons-react";
import {
  ThemeProvider,
  useTheme,
  useUpdateTheme,
} from "../../../components/ThemeProvider/ThemeProvider";
import { getColorPalette } from "../../../helpers/helpers";

const TEXT_CONTENT = `<Button variant="contained"> Contained </Button>
<Button variant="contained" disabled> Disabled </Button>
<Button variant="contained" href="#contained-buttons"> Link </Button>`;

const ColorMeta: Meta = {
  title: "Foundations/Colors",
  parameters: {
    layout: "fullscreen",
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
export default ColorMeta;

export const Sample: typeof ColorMeta = {
  render: (args) => {
    return (
      <ThemeProvider accents={{ primary: "#00b4d8" }}>
        <ColorComponent />
      </ThemeProvider>
    );
  },
};
const ColorComponent = () => {
  const theme = useTheme().theme;
  const updateTheme = useUpdateTheme();
  const [color, setColor] = React.useState("#00b4d8");
  const [appearance, setAppearance] = React.useState<"light" | "dark">("light");

  const colorPalette = getColorPalette(theme);

  const _onColorChange = (color?: string) => {
    if (!color) return;
    setColor(color);
    updateTheme({ accents: { primary: color }, appearance: appearance });
  };
  const _onAppearanceChange = (e, appearance?: string) => {
    if (!appearance) return;
    setAppearance(appearance as "light" | "dark");
    updateTheme({
      appearance: appearance as "light" | "dark",
      accents: { primary: color },
    });
  };

  return (
    <div style={{ background: appearance === "light" ? "#fff" : "#000" }}>
      <Header
        expandable={false}
        style={{
          backgroundColor: colorPalette!["primary"].accentScale[1],
          height: "4rem",
        }}
      >
        <HeaderItem>
          <Text color="primary" size="large">
            Stelios
          </Text>
        </HeaderItem>
        <HeaderItem>
          <Autocomplete
            color={color}
            width="100%"
            variant="soft"
            placeholder="Type here..."
            options={[
              { title: "Option 1", value: "option_1" },
              { title: "Option 2", value: "option_2" },
              { title: "Option 3", value: "option_3" },
              { title: "Option 4", value: "option_4" },
              { title: "Option 5", value: "option_5" },
            ]}
          />
        </HeaderItem>
        <HeaderItem style={{ display: "flex", gap: "1rem" }}>
          <IconButton
            alt="github"
            size="small"
            icon={<IconBrandGithub />}
            variant="soft"
            color="primary"
          />
          <IconButton
            alt="linkedin"
            size="small"
            icon={<IconBrandLinkedin />}
            variant="soft"
            color="primary"
          />
          <IconButton
            alt="settings"
            size="small"
            icon={<IconSettings />}
            variant="contained"
            color="primary"
          />
        </HeaderItem>
      </Header>
      <NavigationBar
        style={{
          background: "transparent",
          borderRight: "0",
          height: "calc(100vh - 3.5rem)",
          position: "fixed",
          top: "5rem",
        }}
        color="primary"
      >
        <NavigationBarGroup expanded title="Group 1" color="primary">
          <NavigationBarHeader color="primary">Header 1</NavigationBarHeader>
          <NavigationBarGroupItem selected value="1" color="primary">
            Group Items
          </NavigationBarGroupItem>
          <NavigationBarGroupItem value="2" color="primary">
            Group Items
          </NavigationBarGroupItem>
          <NavigationBarGroupItem value="3" color="primary">
            Group Items
          </NavigationBarGroupItem>
          <NavigationBarHeader color="primary">Header 2</NavigationBarHeader>
          <NavigationBarGroupItem value="6" color="primary">
            Group Items
          </NavigationBarGroupItem>
          <NavigationBarGroupItem value="7" color="primary">
            Group Items
          </NavigationBarGroupItem>
        </NavigationBarGroup>
        <NavigationBarGroup expanded title="Group 2" color="primary">
          <NavigationBarHeader color="primary">Header 3</NavigationBarHeader>
          <NavigationBarGroupItem value="13" color="primary">
            Group Items
          </NavigationBarGroupItem>
          <NavigationBarGroupItem value="14" color="primary">
            Group Items
          </NavigationBarGroupItem>
          <NavigationBarGroupItem value="18" color="primary">
            Group Items
          </NavigationBarGroupItem>
          <NavigationBarGroupItem value="19" color="primary">
            Group Items
          </NavigationBarGroupItem>
          <NavigationBarGroupItem value="20" color="primary">
            Group Items
          </NavigationBarGroupItem>
          <NavigationBarGroupItem value="21" color="primary">
            Group Items
          </NavigationBarGroupItem>
        </NavigationBarGroup>
        <NavigationBarGroup title="Group 3" color="primary">
          <NavigationBarHeader color="primary">Header 3</NavigationBarHeader>
          <NavigationBarGroupItem value="13" color="primary">
            Group Items
          </NavigationBarGroupItem>
          <NavigationBarGroupItem value="14" color="primary">
            Group Items
          </NavigationBarGroupItem>
          <NavigationBarGroupItem value="18" color="primary">
            Group Items
          </NavigationBarGroupItem>
          <NavigationBarGroupItem value="19" color="primary">
            Group Items
          </NavigationBarGroupItem>
          <NavigationBarGroupItem value="20" color="primary">
            Group Items
          </NavigationBarGroupItem>
          <NavigationBarGroupItem value="21" color="primary">
            Group Items
          </NavigationBarGroupItem>
        </NavigationBarGroup>
        <NavigationBarItem value="22" color="primary">
          Title Item
        </NavigationBarItem>
      </NavigationBar>
      <div
        style={{
          margin: "0 12rem 0 15rem",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            padding: "3rem 0 5rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text color="primary" size="large" style={{ marginTop: "1rem" }}>
            Choose your color palette
          </Text>
          <Text color="primary" style={{ paddingBottom: "1rem" }}>
            This story is created using only one color.
          </Text>
          <ColorPicker color="primary" width="100%" onChange={_onColorChange} />
          <ToggleButtonGroup
            width="240px"
            color={color}
            value={appearance}
            onClick={_onAppearanceChange}
          >
            <ToggleButton value="light" color="primary">
              <IconSun />
              <Text disableColor variant="paragraph">
                Light
              </Text>
            </ToggleButton>
            <ToggleButton value="dark" color="primary">
              <IconMoon width={20} height={20} />
              <Text disableColor variant="paragraph">
                Dark
              </Text>
            </ToggleButton>
          </ToggleButtonGroup>
          <Text color="primary" size="small">
            (Change color and appearance here)
          </Text>
        </div>

        <Breadcrumbs color="primary" variant="contained" size="small">
          <BreadcrumbsItem title="Link 1" link="test" />
          <BreadcrumbsItem title="Link 2" link="test" />
        </Breadcrumbs>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Button variant="contained" color="primary" size="small">
            Contained
          </Button>
          <Button variant="outlined" color="primary" size="small">
            Contained
          </Button>
          <Button variant="outlined-soft" color="primary" size="small">
            Contained
          </Button>
          <Button variant="soft" color="primary" size="small">
            Contained
          </Button>
          <Button variant="neumorph" color="primary" size="small">
            Contained
          </Button>
        </div>
        <Banner
          title="Banner"
          description="Description"
          width="100%"
          color="primary"
          variant="soft"
        />
        <Slider color="primary" value={50} width="100%" />
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            type="initials"
            variant="contained"
            initials="TS"
            color="primary"
            size="small"
          />
          <Avatar
            type="initials"
            variant="outlined"
            initials="TS"
            color="primary"
            size="small"
          />
          <IconButton alt="Award" icon={<IconAward />} variant="soft" color="primary" />
          <IconButton
            alt="12 Hours"
            icon={<Icon12Hours />}
            variant="outlined-soft"
            color="primary"
          />
          <IconButton
            alt="24 Hours"
            icon={<Icon24Hours />}
            variant="neumorph"
            color="primary"
          />
          <IconButton
            alt="3D Cube Sphere Off"
            icon={<Icon3dCubeSphereOff />}
            variant="neumorph-contained"
            color="primary"
          />
        </div>
        <CodeDisplay
          language="JSX"
          title="JSX"
          text={TEXT_CONTENT}
          color="primary"
          style={{ marginTop: "1rem" }}
        />
      </div>

      <SideBar style={{ marginTop: "7rem", right: "2rem" }} color={color}>
        <SideBarGroup title="Group 1" color="primary">
          <SideBarGroupItem color="primary">Group 1 Item 1</SideBarGroupItem>
          <SideBarGroupItem color="primary">Group 1 Item 2</SideBarGroupItem>
        </SideBarGroup>
        <SideBarGroup title="Group 2" color="primary">
          <SideBarGroupItem color="primary">Group 2 Item 1</SideBarGroupItem>
          <SideBarGroupItem color="primary">Group 2 Item 1</SideBarGroupItem>
        </SideBarGroup>
        <SideBarItem color="primary">Test</SideBarItem>
      </SideBar>
    </div>
  );
};
